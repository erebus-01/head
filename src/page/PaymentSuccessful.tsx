import axios from 'axios';
import React, { Fragment, useState, useEffect, lazy, Suspense, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom'

interface ProductCart {
    _id: string;
    color: string;
    product: string;
    quantity: Number
}

interface Product {
    _id: string;
    name: string;
    description: string;
    image: string;
    price: string;
    benefit: string[];
}

const PaymentSuccessful = () => {
    const natigate = useNavigate()

    const [products, setProducts] = useState<ProductCart[]>([]);
    const [product, setProduct] = useState<Product[]>([]);

    const [showComponent, setShowComponent] = useState(false);
    const [paramsObject, setParamsObject] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const currentUrl = new URL(window.location.href);
        const searchParams = new URLSearchParams(currentUrl.search);

        const newParamsObject: { [key: string]: string } = {};
        searchParams.forEach((value, key) => {
            newParamsObject[key] = value;
        });

        delete newParamsObject['vnp_SecureHash'];
        delete newParamsObject['vnp_ResponseCode'];
        delete newParamsObject['vnp_TransactionStatus'];

        setParamsObject(newParamsObject);
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const id = localStorage.getItem('userId');
                const response = await axios.get(`http://localhost:5000/cart/${id}`);
                const productData: ProductCart[] = response.data;
                setProducts(productData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);


    const order = localStorage.getItem('Order')
    let user = {}
    if (order) {
        user = JSON.parse(order)
    }

    const handleOrderCart = async (e: any) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        console.log(order)
        const response = await fetch(`http://localhost:5000/order_payment_vnpay/${userId}`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response);
        if (response.status === 200) {
            localStorage.removeItem('Order')
        }
        natigate('/')
    }

    return (
        <div className="bg-gray-100 h-screen">
            <div className="bg-white p-6  md:mx-auto">
                <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                    <path fill="#16A34A"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                    </path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                    <p>You need to confirm your order to complete your order</p>
                    <div className="py-10 text-center">
                        <form onSubmit={handleOrderCart}>
                            <button type='submit' style={{border: '1.5px #14A34A solid', borderRadius: '5px', color: '#14A34A'}} className="px-12 hover:bg-indigo-500 text-white font-semibold py-3">
                                CONFIRM ORDER
                            </button>
                        </form>
                    </div>
                </div>


                <div className="flex justify-center">
                    <table className="">
                        <thead>
                            <tr>
                                <th>Noi dung</th>
                                <th className='w-[400px]'>Gia tri</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(paramsObject).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td className='w-[400px] text-right'>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccessful