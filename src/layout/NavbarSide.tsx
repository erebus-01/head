import React from 'react'
import { ButtonSearch, ButtonCircleIcon, ButtonWhite, ButtonBlack, ButtonTransparent, ButtonCart, ButtonWhiteBlack } from '../components/index';
import { useState, useEffect } from 'react'
import axios from 'axios';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Cart } from '../svg';
import { Link } from 'react-router-dom';
import { escape } from 'querystring';

interface SessionData {
  json: {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    verify: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}


const NavbarSide = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [sessionData, setSessionData] = useState<SessionData | null>(null);

  useEffect(() => {
    const storedDataToken = localStorage.getItem('dataToken');
    if (storedDataToken !== null) {
      const parsedDataToken = JSON.parse(storedDataToken) as SessionData;
      setSessionData(parsedDataToken);
    } else {
      setSessionData(null);
    }
  }, []);


  console.log(sessionData);

  return (
    <>
      <div className="header-container">
        <Navbar className="flex border-0">
          <div className="screen-md w-full">
            <div className="">
              <ButtonCircleIcon
                linkTo='/'
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                }
              />
            </div>
            <div className="">
              <Typography
                as="li"
                variant="small"
                className="cursor-pointer logo-header nav-item inline-block"
              >
                <Link to='/'>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 800 800" enableBackground="new 0 0 800 800" xmlSpace="preserve">
                    <path fill="#FFFFFF" stroke="#000000" strokeWidth="60" strokeMiterlimit="10" d="M766.617,769.3405H32.6596  c-1.5041,0-2.7234-1.2194-2.7234-2.7234V32.6596c0-1.5041,1.2193-2.7234,2.7234-2.7234H766.617  c1.5041,0,2.7234,1.2193,2.7234,2.7234V766.617C769.3405,768.1211,768.1211,769.3405,766.617,769.3405z" />
                    <circle fill="#FFFFFF" stroke="#000000" strokeWidth="100" strokeMiterlimit="10" cx="400" cy="400" r="138.7655" />
                  </svg>
                </Link>
              </Typography>
            </div>
            <ButtonSearch />
          </div>
          <ul className="ul-header relative flex justify-center items-center flex-[1_0_1px] max-h-[80px] m-0 text-[1.125px] text-blue-gray-900">
            <Typography
              as="li"
              variant="small"
              className="cursor-pointer logo-header nav-item inline-block align-middle absolute left-0 font-normal"
            >
              <Link to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 800 800" enableBackground="new 0 0 800 800" xmlSpace="preserve">
                  <path fill="#FFFFFF" stroke="#000000" strokeWidth="60" strokeMiterlimit="10" d="M766.617,769.3405H32.6596  c-1.5041,0-2.7234-1.2194-2.7234-2.7234V32.6596c0-1.5041,1.2193-2.7234,2.7234-2.7234H766.617  c1.5041,0,2.7234,1.2193,2.7234,2.7234V766.617C769.3405,768.1211,768.1211,769.3405,766.617,769.3405z" />
                  <circle fill="#FFFFFF" stroke="#000000" strokeWidth="100" strokeMiterlimit="10" cx="400" cy="400" r="138.7655" />
                </svg>
              </Link>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal nav-item text-[18px]"
            >
              <a href="/" className="relative flex items-center nav-link">
                DISCOVER
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal nav-item text-[18px]"
            >
              <a href="/shop" className="relative flex items-center nav-link">
                SHOP
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal nav-item text-[18px]"
            >
              <a href="/support" className="relative flex items-center nav-link">
                SUPPORT
              </a>
            </Typography>
            <IconButton
              variant="text"
              className="ml-auto hidden h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </ul>
          <div className='gr-icon m-0 max-h[80px] flex justify-end items-center gap-5 '>
            <ButtonSearch />
            <ButtonCart
              icon={<Cart />}
              linkTo='/cart'
            />
            {sessionData !== null ? (
              <ButtonWhiteBlack title={sessionData.json.username} />
            ) : (
              <Link to="/login">
                <ButtonWhiteBlack title="Login" />
              </Link>
            )}

          </div>
        </Navbar>
      </div>
    </>
  )
}

export default NavbarSide