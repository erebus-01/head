import axios from 'axios';
import React, { Fragment, useState, useEffect, lazy, Suspense, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ReCAPTCHA from "react-google-recaptcha";
import TotalPrice from './TotalPrice';
import { useNavigate } from 'react-router-dom'
import Paypal from '../../components/Paypal';

interface ImageColorProps {
  product: any;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  benefit: string[];
}

interface Province {
  Id: string;
  Name: string;
  Districts: District[];
}

interface District {
  Id: string;
  Name: string;
  Wards: Ward[];
}

interface Ward {
  Id: string;
  Name: string;
}

const ProductItems: React.FC<ImageColorProps> = ({ product }) => {
  const natigate = useNavigate()
  const [verified, setVerified] = useState(false)
  const [showComponent, setShowComponent] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = React.useState(false);
  const [colors, setColors] = useState([])

  const [empty, setEmpty] = useState(true);

  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  // #region address

  const price = useRef<HTMLInputElement>(null);
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedWard, setSelectedWard] = useState<string>("");
  const [selectedAddress, setSelectedAddress] = useState<string[]>([]);
  const [form, setForm] = useState<Record<string, string>>({});



  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
      .then((response) => {
        setProvinces(response.data);
      });
  }, []);

  useEffect(() => {
    products.length == 0 ? setEmpty(true) : setEmpty(false);
  }, [products])

  useEffect(() => {
    const total = price.current?.value || '';
    const userId = localStorage.getItem('userId') || '';
    setForm({
      ...form,
      price: total,
      userId: userId
    })
  }, [wards])

  const handleForm = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedProvince = provinces.find((province) => province.Id === selectedValue);
    setDistricts(selectedProvince?.Districts || []);
    setWards([]);
    setSelectedProvince(selectedValue);
    setSelectedAddress([selectedProvince?.Name || ""]);
    setForm({
      ...form,
      [event.target.name]: selectedOption.text
    });
    event.target.options[0].text = selectedProvince?.Name || "";
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const districtId = event.target.value;
    const selectedValue = event.target.value;
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedDistrict = districts.find((district) => district.Id === districtId);
    setWards(selectedDistrict?.Wards || []);
    setSelectedDistrict(selectedValue);
    setSelectedAddress(prevState => [prevState[0], selectedDistrict?.Name || "", ""]);
    setForm({
      ...form,
      [event.target.name]: selectedOption.text
    });
    event.target.options[0].text = selectedDistrict?.Name || "";
  };

  const handleWardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedWard = wards.find((ward) => ward.Id === selectedValue);
    setSelectedWard(selectedValue);
    setSelectedAddress(prevState => [prevState[0], prevState[1], selectedWard?.Name || ""]);
    setForm({
      ...form,
      [event.target.name]: selectedOption.text
    });
    event.target.options[0].text = selectedWard?.Name || "";
  };
  // #endregion

  useEffect(() => {
    const delay = 500;

    const timer = setTimeout(() => {
      setShowComponent(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productIds = product.flatMap((item: any) => item.map((product: any) => product.product));
        const productColors = product.flatMap((item: any) => item.map((product: any) => product.color));
        setColors(productColors)
        const fetchedProducts = [];
        for (const productId of productIds) {
          const response = await axios.get(`http://localhost:5000/auth/v1/product/${productId}`);
          fetchedProducts.push(response.data);
        }
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProduct();
  }, [product]);



  const joinedArray = products.map((item, index) => {
    return { ...item, color: colors[index] };
  });

  let totalPrice: number = 0;
  let fax = 0;
  let all = 0;

  if (products !== null) {
    totalPrice = products.reduce((sum: number, product: any) => sum + product.price, 0);
    fax = totalPrice * 0.05;
    all = totalPrice + fax;
  }
  const userId = localStorage.getItem('userId');

  const handleRemoveItem = async (e: any, productId: string) => {

    e.preventDefault();
    const response = await fetch(`http://localhost:5000/remove_item/${userId}/${productId}`, {
      method: 'DELETE',
    });
    window.location.reload();
  };

  const handleOrderCart = async (e: any) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/order/${userId}`, {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.reload();
  }

  const handlePaymentOnline = async (e: any) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    const formData = {
      ...form,
      userId: userId
    };

    localStorage.setItem('Order', JSON.stringify(formData))
    console.log(formData);
  
    try {
      const response = await fetch('http://localhost:5000/create_payment_url', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const redirectUrl = await response.text();
        const startIndex = redirectUrl.indexOf('"') + 1;
        const endIndex = redirectUrl.lastIndexOf('"');
        const url = redirectUrl.substring(startIndex, endIndex);
      
        window.location.href = url;
      } else {
        // Handle unsuccessful response (if needed)
        // ...
      }
    } catch (error) {
      // Handle fetch error
      console.error(error);
    }
  };
  
  

  function onChange(value: any) {
    setVerified(true);
  }

  return (
    <>
      {!empty ? <p style={{ fontSize: '22px', marginTop: '20px', fontWeight: '700' }}>Your cart have {products.length} items</p> : <p style={{ fontSize: '28px', marginTop: '20px', fontWeight: '700', textAlign: 'center' }}>Cart is EMPTY</p>}
      <ol className="rs-bag-items rs-iteminfos">
        {showComponent ? (
          <Suspense fallback={<div>Loading...</div>}>
            {joinedArray.map((item: any, indexColor: number) => (
              <>
                <li className="rs-bag-item rs-iteminfo-wrap">
                  <div className="rs-iteminfo row">
                    <div className="rs-iteminfo-image column large-3 small-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="rs-iteminfo-content column large-9 small-12">
                      <div className="rs-iteminfo-details">
                        <div className="rs-iteminfo-title-wrapper large-6 small-12">
                          <h2 className="rs-iteminfo-title">
                            <a href={`/product/detail/${item._id}`}>{item.name}</a>
                          </h2>
                          <div className="rs-iteminfo-actions-left">Color: <span style={{ fontWeight: '700' }}>{item.color}</span></div>
                        </div>
                        <div className="rs-iteminfo-pricedetails large-last">
                          <div className="rs-iteminfo-price">
                            <p>{item.price.toLocaleString()}{"\u0111"}</p>
                          </div>
                          <div className="rs-iteminfo-actions-right">
                            <form onSubmit={(e) => handleRemoveItem(e, item._id)}>
                              <button type="submit" className="rs-iteminfo-remove as-buttonlink">
                                Remove
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="rs-item-fulfillment rs-iteminfo-child rs-has-delivery rs-has-pickup">
                        <div className="rs-item-fulfillment-callout">
                          <div className="rs-fulfillment-callout-title">
                            <span className="rs-fulfillment-callout-title-text">
                              Find out how soon you can get this item.
                            </span>
                          </div>
                        </div>
                        <div className="rs-item-fulfillment-columns">
                          <div className="rs-item-shipping rs-item-delivery as-icondetails">
                            <div className="as-icondetails-icon as-svgicon-container">
                              <svg viewBox="0 0 25 25" className="as-svgicon as-svgicon-shipping as-svgicon-reduced as-svgicon-shippingreduced" role="img" aria-hidden="true" width="35px" height="35px">
                                <path fill="none" d="M0 0h25v25H0z"></path>
                                <path d="M19.69 7.154l-6-3.245a2.5 2.5 0 00-2.38 0l-6 3.245A2.5 2.5 0 004 9.354v6.269a2.5 2.5 0 001.311 2.2l6 3.245a2.5 2.5 0 002.379 0l6-3.245a2.5 2.5 0 001.31-2.2V9.354a2.5 2.5 0 00-1.31-2.2zm-7.9-2.365a1.492 1.492 0 011.427 0l6 3.244a1.454 1.454 0 01.151.11l-2.931 1.665-6.743-3.886zM8.661 6.48l6.768 3.9-2.929 1.666-6.864-3.9a1.456 1.456 0 01.151-.11zM5.787 16.941A1.5 1.5 0 015 15.622V9.354a1.5 1.5 0 01.053-.39L12 12.912v7.358a1.463 1.463 0 01-.213-.083zM20 15.622a1.5 1.5 0 01-.786 1.319l-6 3.245a1.5 1.5 0 01-.214.084v-7.358l6.947-3.949a1.508 1.508 0 01.053.391z"></path>
                              </svg>
                            </div>
                            <div className="as-icondetails-detail" >
                              <div className="rs-item-shipping-detail-line as-icondetails-value">Ships in 1 business day.</div>
                            </div>
                          </div>
                          <div className="rs-item-pickup as-icondetails">
                            <div className="as-icondetails-icon as-svgicon-container">
                              <svg viewBox="0 0 25 25" className="as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced" role="img" aria-hidden="true" width="35px" height="35px">
                                <path fill="none" d="M0 0h25v25H0z"></path>
                                <path d="M18.5 5h-1.775a4.231 4.231 0 00-8.45 0H6.5A2.5 2.5 0 004 7.5v11A2.5 2.5 0 006.5 21h12a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018.5 5zm-6-3a3.245 3.245 0 013.225 3h-6.45A3.245 3.245 0 0112.5 2zM20 18.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 015 18.5v-11A1.5 1.5 0 016.5 6h12A1.5 1.5 0 0120 7.5z"></path>
                                <path d="M14.4 12.448a1.592 1.592 0 01.738-1.328 1.607 1.607 0 00-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 00-1.739 2.068 4.32 4.32 0 00.723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 00.474-.989 1.516 1.516 0 01-.926-1.403zM12.583 10.357a1.346 1.346 0 00.941-.5 1.594 1.594 0 00.361-.974.731.731 0 00-.008-.136 1.5 1.5 0 00-1.016.528 1.547 1.547 0 00-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011z"></path>
                              </svg>
                            </div>
                            <div className="as-icondetails-detail" >
                              <span className="as-icondetails-value">
                                Pick up at an Apple Store near you.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </>
            ))}
          </Suspense>
        ) : (
          <div>Loading...</div>
        )}
      </ol>
      <div className="rs-summary mt-0">
        <div className="large-9 large-offset-3 small-12 small-offset-0">
          <div className="rs-summary-content rs-summary-subtotal">
            <div className="rs-summary-labelandvaluecontainer">
              <div
                className=""
                data-autom="bagrs-summary-subtotallabel"
              >
                Subtotal
              </div>
              <div
                className="rs-summary-value"
                data-autom="bagrs-summary-subtotalvalue"
              >
                ${totalPrice.toLocaleString()}{"\u0111"}
              </div>
            </div>
          </div>
          <div className="rs-summary-content rs-summary-shipping">
            <div className="rs-summary-labelandvaluecontainer">
              <div
                className=""
                data-autom="bagrs-summary-shippinglabel"
              >
                Shipping
              </div>
              <div
                className="rs-summary-value"
                data-autom="bagrs-summary-shippingvalue"
              >
                FREE
              </div>
            </div>
          </div>
          <div className="rs-summary-content rs-summary-tax">
            <div className="rs-summary-labelandvaluecontainer">
              <div
                className=""
                data-autom="bagrs-summary-taxlabel"
              >
                <div className="rs-summary-tax">
                  <span className="rs-summary-tax-label">
                    Estimated tax for:{" "}
                  </span>
                </div>
              </div>
              <div
                className="rs-summary-value"
                data-autom="bagrs-summary-taxvalue"
              >
                $ {fax.toLocaleString()}{"\u0111"}
              </div>
            </div>
          </div>
          <div className="rs-summary-labelandvaluecontainer rs-summary-total">
            <div className="font-[700_!important] uppercase">
              Total
            </div>
            <div className="rs-summary-value" data-autom="bagtotalvalue">
              ${all.toLocaleString()}{"\u0111"}
            </div>
          </div>
          {!empty ? (
            <>
              <div className="rs-summary-content float-right flex gap-4 pt-7 button-container">
                <div className="beats-button">
                  <button onClick={() => { setOpen(!open); }} type="button" className='beats-btn btn-black beats-btn--button beats-btn--authored font-font-secondary' data-color="black">
                    <span className="beats-btn-inner">Checkout - Payment on delivery</span>
                    <span className="beats-btn-mask btn2-bg-hover-color-white"></span>
                  </button>
                </div>
              </div>
              {/* <div className='mt-5'>
                <Paypal product={product} />
              </div> */}
              <PayPalButtons />
            </>
          )
            : <></>
          }
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-1" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-1 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-[rgba(0,0,0,0.5)]">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:w-[800px] bg-[#ffffff]">
                  <form onSubmit={handleOrderCart}>
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title as="h3" className="text-base text-center font-semibold leading-6 text-gray-900">
                            Your personal information and shipping address
                          </Dialog.Title>
                          <div className="mt-4">
                            <p className="text-sm text-gray-500 text-center ">
                              Fill in the information correctly and completely so that the order is delivered to you on time
                            </p>
                            <div className='mt-2'>
                              <input name='price' hidden type="text" value={all.toFixed(2)} ref={price} />
                              <input onChange={handleForm} name='name' type="text" id="name" placeholder="Enter your name" className="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                              <input onChange={handleForm} name='phone' type="text" id="telephone" placeholder="Enter your phone" className="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                              <input onChange={handleForm} name='address' type="text" id="address" placeholder="Enter your address" className="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                              <div className='flex'>
                                <div style={{ flex: 1 }}>
                                  <select
                                    name="provinces"
                                    id="provinces"
                                    className="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={handleProvinceChange}
                                    required
                                  >
                                    <option value="" disabled selected>Tỉnh Thành</option>
                                    {provinces.map((province) => (
                                      <option key={province.Id} value={province.Id}>{province.Name}</option>
                                    ))}
                                  </select>
                                </div>
                                <div style={{ flex: 1 }}>
                                  <select
                                    name="districts"
                                    id="districts"
                                    className="bg-gray-50 mt-5 mx-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={handleDistrictChange}
                                    required
                                  >
                                    <option value="" disabled selected>Quận huyện</option>
                                    {districts.map((district) => (
                                      <option key={district.Id} value={district.Id}>{district.Name}</option>
                                    ))}
                                  </select>
                                </div>
                                <div style={{ flex: 1 }}>
                                  <select
                                    name="wards"
                                    id="wards"
                                    className="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={handleWardChange}
                                    required
                                  >
                                    <option value="" disabled selected>Xã phường</option>
                                    {wards.map((ward) => (
                                      <option key={ward.Id} value={ward.Id}>{ward.Name}</option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className='mt-4'>
                              <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        className="inline-flex w-full border-black justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        type="submit"
                        style={{ backgroundColor: !verified ? '#9F9FBC' : '#1790d0', color: 'white' }}
                        disabled={!verified}
                      >
                        Order
                      </button>
                      
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                  <form onSubmit={handlePaymentOnline}>
                    <button
                      className="inline-flex w-full border-black justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      type="submit"
                      style={{ backgroundColor: !verified ? '#9F9FBC' : '#1790d0', color: 'white' }}
                      disabled={!verified}
                    >
                      Payment Online
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default ProductItems