import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram, Messages } from "../svg";

const Footer = () => {
  return (
    <footer className="global-footer relative bg-inverse p-4 dark:bg-gray-900">
      <div className="footer-content section-content--reboot">
        <div className="flex lg_footer">
          <div className="logo">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 800 800"
                enableBackground="new 0 0 800 800"
                xmlSpace="preserve"
              >
                <path
                  fill="#FFFFFF"
                  stroke="#000000"
                  strokeWidth="60"
                  strokeMiterlimit="10"
                  d="M766.617,769.3405H32.6596  c-1.5041,0-2.7234-1.2194-2.7234-2.7234V32.6596c0-1.5041,1.2193-2.7234,2.7234-2.7234H766.617  c1.5041,0,2.7234,1.2193,2.7234,2.7234V766.617C769.3405,768.1211,768.1211,769.3405,766.617,769.3405z"
                />
                <circle
                  fill="#FFFFFF"
                  stroke="#000000"
                  strokeWidth="100"
                  strokeMiterlimit="10"
                  cx="400"
                  cy="400"
                  r="138.7655"
                />
              </svg>
            </Link>
          </div>
          <div className="links">
            <div>
              <div className="flex font-font-secondary">
                <div className="flex-1">
                  <div>
                    <div className="linksList parbase section">
                      <h2 id="footer-Products">Products</h2>
                      <nav
                        role="navigation"
                        aria-labelledby="footer-Products"
                        className="bbd-component"
                      >
                        <ul role="presentation">
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/products"
                              className="button-natural footer-links"
                            >
                              View All
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/promotions"
                              className="button-natural footer-links"
                            >
                              Special Offers
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/collaborations"
                              className="button-natural footer-links"
                            >
                              Collaborations
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/earbuds/beats-fit-pro"
                              className="button-natural footer-links"
                            >
                              Beats Fit Pro
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/earphones/studio-buds"
                              className="button-natural footer-links"
                            >
                              Beats Studio Buds
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/earphones/beats-flex"
                              className="button-natural footer-links"
                            >
                              Beats Flex
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/earbuds/powerbeats-pro"
                              className="button-natural footer-links"
                            >
                              Powerbeats Pro
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/headphones/solo3-wireless"
                              className="button-natural footer-links"
                            >
                              Beats Solo<sup>3</sup> Wireless
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/headphones/studio3-wireless"
                              className="button-natural footer-links"
                            >
                              Beats Studio<sup>3</sup> Wireless
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div>
                    <div className="linksList parbase section">
                      <h2 id="footer-Support">Support</h2>
                      <nav
                        role="navigation"
                        aria-labelledby="footer-Support"
                        className="bbd-component"
                      >
                        <ul role="presentation">
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/mobile-apps"
                              className="button-natural footer-links"
                            >
                              Downloads
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              data-analytics-label="Footer|Support Home"
                              href="/support"
                              className="button-natural footer-links"
                            >
                              Product Help
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="supportExit"
                              data-analytics-label="Footer|Service and Warranty|SFAQ"
                              href="https://support.apple.com/beats/repair/service"
                              className="button-natural footer-links"
                            >
                              Service &amp; Warranty
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/register"
                              className="button-natural footer-links"
                            >
                              Register Your Beats
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="http://your.beatsbydre.com/#/"
                              className="button-natural footer-links"
                            >
                              Update Your Beats
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/company/authorized-retailers"
                              className="button-natural footer-links"
                            >
                              Authorized Retailers
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="supportExit"
                              data-analytics-label="Footer|Contact Support|PFC6007"
                              href="https://getsupport.apple.com/GetproductgroupList.action?caller=bbd&amp;PFC=PFC6007"
                              className="button-natural footer-links"
                            >
                              Contact Support
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              data-analytics-label="Footer|International Numbers"
                              href="/support/international-numbers"
                              className="button-natural footer-links"
                            >
                              International Numbers
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div>
                    <div className="linksList parbase section">
                      <h2 id="footer-Company">Company</h2>
                      <nav
                        role="navigation"
                        aria-labelledby="footer-Company"
                        className="bbd-component"
                      >
                        <ul role="presentation">
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/company/aboutus"
                              className="button-natural footer-links"
                            >
                              About
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/company/press"
                              className="button-natural footer-links"
                            >
                              Press
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="appleExit"
                              href="https://jobs.apple.com/en-us/search?sort=relevance&amp;search=beats"
                              className="button-natural footer-links"
                            >
                              Careers
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="linksList parbase section">
                      <h2 id="footer-Legal">Legal</h2>
                      <nav
                        role="navigation"
                        aria-labelledby="footer-Legal"
                        className="bbd-component"
                      >
                        <ul role="presentation">
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/company/legal"
                              className="button-natural footer-links"
                            >
                              Terms of Use
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/company/legal"
                              className="button-natural footer-links"
                            >
                              Privacy
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/company/trademark"
                              className="button-natural footer-links"
                            >
                              Trademark
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              data-analytics-click=""
                              data-analytics-link-type="siteClick"
                              href="/company/promotion-terms"
                              className="button-natural footer-links"
                            >
                              Promotion Terms
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div>
                    <div className="footerSocialMedia section">
                      <h2 id="footerBeatsArmy">Follow Us</h2>
                      <nav
                        className="bbd-component"
                        role="navigation"
                        aria-labelledby="footerBeatsArmy"
                      >
                        <ul
                          role="presentation"
                          className="social social--spaced-row"
                          id="footer-social-army"
                        >
                          <li>
                            <Twitter />
                          </li>
                          <li>
                            <Youtube />
                          </li>
                          <li>
                            <Facebook />
                          </li>
                          <li>
                            <Instagram />
                          </li>
                        </ul>
                      </nav>
                      <h2 className="footerDirectoryTitle">Location</h2>
                      <ul role="presentation" className="bbd-component">
                        <li>
                          <span className="footer__country__selected">
                            United States
                          </span>
                          <span className="separator">|</span>
                          <a
                            data-analytics-click=""
                            data-analytics-link-type="siteClick"
                            data-analytics-label="Footer|Country Region Selector"
                            href="#"
                            id="countrySelector"
                            className="change-location"
                            role="button"
                            data-countryselectionurl="/country-region-selector.modal"
                          >
                            Change
                          </a>
                        </li>
                      </ul>
                      <h2>
                        <span className="font-updated flex items-center">
                          <Messages /> Email
                        </span>
                      </h2>
                      <ul role="presentation" className="bbd-component">
                        <li className="newsletter-cta">
                          <a href="/">Sign Up</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md-footer">
          <ul className="social social--spaced-evenly hide-md-up">
            <li>
              <a
                data-analytics-click=""
                data-analytics-link-type="socialFollow"
                href="https://www.twitter.com/beatsbydre"
                aria-label="Twitter"
                target="_blank"
                className="flex justify-center items-center"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </li>

            <li>
              <a
                data-analytics-click=""
                data-analytics-link-type="socialFollow"
                href="https://www.facebook.com/beatsbydre"
                aria-label="Facebook"
                target="_blank"
                className="flex justify-center items-center"
                rel="noopener noreferrer"
              >
                <Youtube />
              </a>
            </li>

            <li>
              <a
                data-analytics-click=""
                data-analytics-link-type="socialFollow"
                href="https://www.youtube.com/beatsbydre"
                aria-label="YouTube"
                className="flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </li>

            <li>
              <a
                data-analytics-click=""
                data-analytics-link-type="socialFollow"
                href="https://www.instagram.com/beatsbydre"
                aria-label="Instagram"
                className="flex justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
