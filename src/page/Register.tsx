import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { InputText, InputPass } from '../components';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({})

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/user/register', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    
    navigate('/login')
  }
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-signup-image grid-page-web w-full min-h-screen">
        <div className="flex flex-grow justify-center items-center relative">
          <div className="flex flex-grow justify-end items-center max-w-full min-w-full">
            <div className="relative flex flex-col p-[4.5rem_3rem_3rem] bg-[#f9f9f9] min-h-[30rem] grow-0 text-black items-center justify-start w-[650px]">
              <div className="lg:mb-12 max-w-full">
                <h5 className="text-[4.5rem] lg:text-[2.5rem] font-bold leading-[110%] tracking-[-0.02em]">Signup</h5>
              </div>
              <div className="flex flex-col w-full">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-row gap-4 gap-y-[10px]">
                  <InputText label="First Name" name="firstName" form={form || ''} onChange={handleForm} />
                  <InputText label="Last Name" name="lastName" form={form || ''} onChange={handleForm} />
                  </div>
                  <InputText label="Userame" name="username" form={form || ''} onChange={handleForm} />
                  <InputText label="Email" name="email" form={form || ''} onChange={handleForm} />
                  <InputPass label='Password' name='password' form={form || ''} onChange={handleForm} />
                  <InputPass label='Confirm Password' name='cfpassword' form={form || ''} onChange={handleForm} />
                  <div className="flex items-center mb-4">
                      <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-0 accent-black focus:ring-blue-500 dark:focus:bg-black dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept all our terms</label>
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
                <div className="mt-5 text-center">
                  <p>Already have an account <Link to='/login' className='underline underline-offset-4'>Login</Link> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register