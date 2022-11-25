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
  const navList = (
    <ul className="mb-4 mt-2 ul-top flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-[1440px] py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
            <g id="Layer_1">
              <title>Layer 1</title>
              <ellipse ry="19.95544" rx="19.95544" id="svg_3" cy="20" cx="20" stroke-width="0" stroke="#000" fill="#000000" />
              <text transform="matrix(2.31841 0 0 1.47095 -12.029 -15.5815)" stroke="#000" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_4" y="32.39538" x="5.80745" stroke-width="0" fill="#ffffff">II</text>
            </g>
          </svg>
        </Typography>
        <div className="hidden lg:block font-font-secondary">{navList}</div>
        <div className='gr-icon flex justify-center items-center'>
          <ButtonSearch />
          <ButtonCart
            icon={<Cart />}
            linkTo='/aa'
          />
          <Link to='/login'>
            <ButtonBlack title="Login" />
          </Link>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  )
}

export default NavbarSide