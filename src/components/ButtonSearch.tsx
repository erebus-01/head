import React, { useState } from "react";
import { Search } from "../svg/index";

const ButtonSearch = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <div className="beats-button">
        <button 
          className='h-6 w-6 rounded-full flex justify-center items-center'
          onClick={() => setOpenSearch(!openSearch)}>
          <Search />
        </button>
      </div>
      <div className={`search__container fixed top-0 left-0 w-full h-screen ${openSearch ? "search_open" : ""} `}>
        <div className="search-main">
          <div
            className="search__exit__bg absolute m-0 p-0 w-full h-full"
            onClick={() => setOpenSearch(!openSearch)}
          ></div>
          <form action="" className="search__form relative bg-black">
            <div className="search__input relative block max-w-[calc(1200px_-_2rem)] w-[calc(100%_-_2rem)] p-0 opacity-0">
              <button
                type="button"
                className="search__input__close min-w-[auto] top-[0.6rem] py-1 left-[0.5rem] w-[33px] p-0 text-inverse absolute flex justify-center"
                aria-label="Close search"
                onClick={() => setOpenSearch(!openSearch)}
              >
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="16"
                  viewBox="0 0 11.121 19.243"
                >
                  <g transform="translate(-228.5 -31.379)">
                    <path
                      d="M0,7.5,7.5,0,15,7.5"
                      transform="translate(230 48.5) rotate(-90)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="3"
                    ></path>
                  </g>
                </svg>
              </button>
              <input
                className="text-xl font-bold w-full h-[48px] text-inverse"
                name="search"
                type="text"
                placeholder="Search Beats"
              ></input>
              <button 
                className="w-5 text-inverse absolute top-[0.35rem] right-[0.75rem] min-w-[auto] p-1"
                type="submit" 
                aria-label="submit search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.761"
                  height="24.761"
                  viewBox="0 0 24.761 24.761"
                >
                  <g transform="translate(-970.858 951.059) rotate(-45)">
                    <g transform="translate(1352.5 23.5)">
                      <ellipse
                        cx="6.5"
                        cy="6.475"
                        rx="6.5"
                        ry="6.475"
                        transform="translate(0)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-width="3"
                      ></ellipse>
                      <line
                        y1="9.481"
                        transform="translate(6.5 13.036)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-width="3"
                      ></line>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </form>
          <div className="search__choices relative opacity-0 bg-black max-w-[calc(1200px_-_5rem)] w-[calc(100%)]">
            <div className="search__choices__container flex flex-row h-screen max-h-[calc(100vh_-_120px)] overflow-auto">
              <h3 className="search__choices__title text-base text-[#a7a6a6] font-normal pb-4">Quick Links</h3>
              <section className="search__popular__products">
                <h3>Explore</h3>
                <ul>
                  <li>
                    <a href="/earbuds/beats-fit-pro" target="_self">
                      <span>Beats Fit Pro</span>
                    </a>
                  </li>
                  <li>
                    <a href="/earbuds/studio-buds" target="_self">
                      <span>Beats Studio Buds</span>
                    </a>
                  </li>
                  <li>
                    <a href="/earphones/powerbeats-pro" target="_self">
                      <span>Powerbeats Pro</span>
                    </a>
                  </li>
                  <li>
                    <a href="/promotions" target="_self">
                      <span>Special Offers</span>
                    </a>
                  </li>
                  <li>
                    <a href="/register" target="_self">
                      <span>Register</span>
                    </a>
                  </li>
                  <li>
                    <a href="/support" target="_self">
                      <span>Support</span>
                    </a>
                  </li>
                  <li>
                    <a href="/headphones/studio3-wireless" target="_self">
                      <span>
                        Beats Studio<sup>3</sup> Wireless
                      </span>
                    </a>
                  </li>
                </ul>
              </section>
              <section className="search__popular__support">
                <h3>Support</h3>
                <ul>
                  <li>
                    <a
                      href="https://support.apple.com/beats/repair/service"
                      target="_blank"
                    >
                      <span>Service and warranty</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-us/HT204196"
                      target="_blank"
                    >
                      <span>Find your Beats serial number</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-us/HT208304"
                      target="_blank"
                    >
                      <span>Reset your Beats earphones</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-us/HT201122"
                      target="_blank"
                    >
                      <span>Can’t connect to your wireless Beats</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/en-us/HT201127"
                      target="_blank"
                    >
                      <span>Beats Updater</span>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonSearch;
