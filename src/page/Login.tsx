import React, { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { ButtonBlack, InputPass, InputText } from '../components';
import { Dialog, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const navigate = useNavigate();
  const [countUser, setCountUser] = useState('');
  const [countPass, setCountPass] = useState('');
  const [pass, setPass] = useState(false);
  const [onUserFocus, setOnUserFocus] = useState(false)
  const [onPassFocus, setOnPassFocus] = useState(false)

  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const [form, setForm] = useState({})

  const [item, setItem] = useState()

  const handleForm = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleCountUser = (event: any) => {
    setCountUser(event.target.value);
  }
  const handleCountPass = (event: any) => {
    setCountPass(event.target.value);
  }

  const handleShowPass = () => {
    setPass(!pass);
  }
  const handleOnUserFocus = () => {
    setOnUserFocus(!onUserFocus);
  }
  const handleOnPassFocus = () => {
    setOnPassFocus(!onPassFocus);
  }

  const handleSubmitLogin = async (e: any) => {
    e.preventDefault()
    console.log(form)
    const response = await fetch('http://localhost:5000/user/login', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    localStorage.setItem('token', data.accessToken)
    if(data.accessToken !== undefined){
      const responseToken = await fetch('http://localhost:5000/user/login/token', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.accessToken}`
        }
      })
      const dataToken = await responseToken.json();
      localStorage.setItem('dataToken', JSON.stringify(dataToken));
      console.log(dataToken);
      navigate('/')
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-image grid-page-web w-full min-h-screen">
        <div className="flex flex-grow justify-center items-center relative">
          <div className="flex flex-grow justify-center items-center max-w-full min-w-full">
            <div className="relative flex flex-col p-[4.5rem_3rem_3rem] bg-[#f9f9f9] min-h-[30rem] grow-0 text-black items-center justify-start w-[550px]">
              <div className="lg:mb-12 max-w-full">
                <h5 className="text-[4.5rem] lg:text-[2.5rem] font-bold leading-[110%] tracking-[-0.02em]">Login</h5>
              </div>
              <div className="flex flex-col w-full">
                <form onSubmit={handleSubmitLogin}>
                  <InputText label="Email" name="email" form={form || ''} onChange={handleForm} />
                  <InputPass label='Password' name='password' form={form || ''} onChange={handleForm} />
                  <div className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-0 accent-black focus:ring-blue-500 dark:focus:bg-black dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stay signed in</label>
                  </div>
                  <div className="button-container flex justify-center">
                    <div className="beats-button">
                      <button type='submit' className='beats-btn btn-black beats-btn--button beats-btn--authored font-font-secondary w-[100px] h-[100px]' data-color="light">
                        <span className="flex justify-center items-center z-[3]">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[60px] h-[60px]">
                            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-10 mb-3 text-center">
                  <button onClick={() => { setOpen(!open); }}>I don't remember the password</button>
                  <p>Haven't an account <Link to='/signup' className='underline underline-offset-4'>Signup</Link> </p>
                </div>


              </div>
            </div>
          </div>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg bg-[#ffffff]">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Deactivate account
                        </Dialog.Title>
                        <div className="mt-4">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to deactivate your account? All of your data will be permanently
                            removed. This action cannot be undone.
                          </p>
                          <div className='mt-2'>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Deactivate
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

    </div>
  )
}

export default Login