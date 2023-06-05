import { useState, useEffect } from 'react';

interface Order {
    _id: string;
    user: string;
    products: any[];
    totalPrice: number;
    name: string;
    phone: string;
    address: string;
    wards: string;
    districts: string;
    provinces: string;
    payment: string;
    statusPayment: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const Order = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState(0);

    const toggleModal = () => setModalVisible(!modalVisible);
    const hideModal = () => setModalVisible(false);



    const [orders, setOrders] = useState<Order[]>([]);
    const [selectedStatus, setSelectedStatus] = useState('Pending');

    useEffect(() => {
        fetchOrders(selectedStatus);
    }, [selectedStatus]);

    const fetchOrders = async (status: any) => {
        try {
            const userId = localStorage.getItem('userId');
            const response = await fetch(`http://localhost:5000/auth/v1/get_order/${userId}/?status=${status}`);
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleChange = (event: any, status: any) => {
        setSelectedStatus(status);
    };


    return (
        <div>
            <button
                onClick={toggleModal}
                style={{backgroundColor: 'black', color: 'white'}}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                View Order
            </button>

            {modalVisible && (
                <div
                    id="defaultModal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
                >
                    <div className="relative w-full max-w-2xl">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700" style={{ backgroundColor: '#ffffff' }}>
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Your Order
                                </h3>
                                <button
                                    onClick={hideModal}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <div>
                                    <div className="border-b border-gray-300">
                                        <div className="flex justify-center">
                                            <button
                                                className={`p-4`}
                                                style={{ backgroundColor: ` ${selectedStatus === 'Pending' ? '#111111' : '#ffffff'}`, color: ` ${selectedStatus === 'Pending' ? '#ffffff' : '#111111'}` }}
                                                onClick={(event) => handleChange(event, 'Pending')}
                                            >
                                                Pending
                                            </button>
                                            <button
                                                className={`p-4`}
                                                style={{ backgroundColor: ` ${selectedStatus === 'Processing' ? '#111111' : '#ffffff'}`, color: ` ${selectedStatus === 'Processing' ? '#ffffff' : '#111111'}` }}
                                                onClick={(event) => handleChange(event, 'Processing')}
                                            >
                                                Processing
                                            </button>
                                            <button
                                                className={`p-4`}
                                                style={{ backgroundColor: ` ${selectedStatus === 'Shipped' ? '#111111' : '#ffffff'}`, color: ` ${selectedStatus === 'Shipped' ? '#ffffff' : '#111111'}` }}
                                                onClick={(event) => handleChange(event, 'Shipped')}
                                            >
                                                Shipped
                                            </button>
                                            <button
                                                className={`p-4`}
                                                style={{ backgroundColor: ` ${selectedStatus === 'Delivered' ? '#111111' : '#ffffff'}`, color: ` ${selectedStatus === 'Delivered' ? '#ffffff' : '#111111'}` }}
                                                onClick={(event) => handleChange(event, 'Delivered')}
                                            >
                                                Delivered
                                            </button>
                                            <button
                                                className={`p-4`}
                                                style={{ backgroundColor: ` ${selectedStatus === 'Cancelled' ? '#111111' : '#ffffff'}`, color: ` ${selectedStatus === 'Cancelled' ? '#ffffff' : '#111111'}` }}
                                                onClick={(event) => handleChange(event, 'Cancelled')}
                                            >
                                                Cancelled
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        {selectedStatus === 'Pending' && orders !== undefined ? (
                                            orders.length > 0 ? (
                                                orders.map((order, index) => (
                                                    <>
                                                        <div key={index} className='py-5'>
                                                            <p>{order.name} - {order.totalPrice.toLocaleString()}{"\u0111"} - {order.payment} - {order.statusPayment}</p>
                                                            {order.products.map((data: any, index: number) => (
                                                                <p key={index}>{data.name} - {data.color} - {data.quantity}</p>
                                                            ))}
                                                        </div>
                                                        <div className="border-b" style={{ borderColor: '#d1d5db' }}></div>
                                                    </>
                                                ))
                                            ) : (
                                                <p>Không có đơn hàng</p>
                                            )
                                        ) : null}
                                        {selectedStatus === 'Processing' && orders !== undefined ? (
                                            orders.length > 0 ? (
                                                orders.map((order, index) => (
                                                    <>
                                                        <div key={index} className='py-5'>
                                                            <p>{order.name} - {order.totalPrice.toLocaleString()}{"\u0111"} - {order.payment} - {order.statusPayment}</p>
                                                            {order.products.map((data: any, index: number) => (
                                                                <p key={index}>{data.name} - {data.color} - {data.quantity}</p>
                                                            ))}
                                                        </div>
                                                        <div className="border-b" style={{ borderColor: '#d1d5db' }}></div>
                                                    </>
                                                ))
                                            ) : (
                                                <p>Không có đơn hàng</p>
                                            )
                                        ) : null}
                                        {selectedStatus === 'Shipped' && orders !== undefined ? (
                                            orders.length > 0 ? (
                                                orders.map((order, index) => (
                                                    <>
                                                        <div key={index} className='py-5'>
                                                            <p>{order.name} - {order.totalPrice.toLocaleString()}{"\u0111"} - {order.payment} - {order.statusPayment}</p>
                                                            {order.products.map((data: any, index: number) => (
                                                                <p key={index}>{data.name} - {data.color} - {data.quantity}</p>
                                                            ))}
                                                        </div>
                                                        <div className="border-b" style={{ borderColor: '#d1d5db' }}></div>
                                                    </>
                                                ))
                                            ) : (
                                                <p>Không có đơn hàng</p>
                                            )
                                        ) : null}
                                        {selectedStatus === 'Delivered' && orders !== undefined ? (
                                            orders.length > 0 ? (
                                                orders.map((order, index) => (
                                                    <>
                                                        <div key={index} className='py-5'>
                                                            <p>{order.name} - {order.totalPrice.toLocaleString()}{"\u0111"} - {order.payment} - {order.statusPayment}</p>
                                                            {order.products.map((data: any, index: number) => (
                                                                <p key={index}>{data.name} - {data.color} - {data.quantity}</p>
                                                            ))}
                                                        </div>
                                                        <div className="border-b" style={{ borderColor: '#d1d5db' }}></div>
                                                    </>
                                                ))
                                            ) : (
                                                <p>Không có đơn hàng</p>
                                            )
                                        ) : null}
                                        {selectedStatus === 'Cancelled' && orders !== undefined ? (
                                            orders.length > 0 ? (
                                                orders.map((order, index) => (
                                                    <>
                                                        <div key={index} className='py-5'>
                                                            <p>{order.name} - {order.totalPrice.toLocaleString()}{"\u0111"} - {order.payment} - {order.statusPayment}</p>
                                                            {order.products.map((data: any, index: number) => (
                                                                <p key={index}>{data.name} - {data.color} - {data.quantity}</p>
                                                            ))}
                                                        </div>
                                                        <div className="border-b" style={{ borderColor: '#d1d5db' }}></div>
                                                    </>
                                                ))
                                            ) : (
                                                <p>Không có đơn hàng</p>
                                            )
                                        ) : null}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Order;
