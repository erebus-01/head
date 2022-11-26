import React from 'react'
import { ButtonSearch, ButtonCircleIcon, ButtonWhite, ButtonBlack, ButtonTransparent, ButtonCart } from '../components/index';
import { useState, useEffect } from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Cart } from '../svg';
import { Link } from 'react-router-dom';

const NavbarSide = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <div className="header-container">
        <Navbar className="flex py-2 lg:py-4">
          <ul className="relative flex justify-center items-center flex-[1_0_1px] max-h-[80px] m-0 pl-[75px] text-[1.125px] text-blue-gray-900">
            <Typography
              as="li"
              variant="small"
              className="cursor-pointer nav-item inline-block align-middle absolute left-0 font-normal"
            >
              <Link to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                  <g id="Layer_1">
                    <title>Layer 1</title>
                    <ellipse ry="19.95544" rx="19.95544" id="svg_3" cy="20" cx="20" stroke-width="0" stroke="#000" fill="#000000" />
                    <text transform="matrix(2.31841 0 0 1.47095 -12.029 -15.5815)" stroke="#000" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_4" y="32.39538" x="5.80745" stroke-width="0" fill="#ffffff">II</text>
                  </g>
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
                linkTo='/aa'
              />
              <Link to='/login'>
                <ButtonBlack title="Login" />
              </Link>
            </div>
          <MobileNav className='hidden' open={openNav}>
          <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal text-[18px]"
            >
              <a href="/" className="relative flex items-center nav-link">
              DISCOVER
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal text-[18px]"
            >
              <a href="/shop" className="relative flex items-center nav-link">
              SHOP
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal text-[18px]"
            >
              <a href="/support" className="relative flex items-center nav-link">
              SUPPORT
              </a>
            </Typography>
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Buy Now</span>
            </Button>
          </MobileNav>
        </Navbar>
      </div>
    </>
  )
}

export default NavbarSide