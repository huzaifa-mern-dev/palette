"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img
                src="assets/images/resources/logo-1.png"
                width="150"
                alt=""
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li>
                  <Link href="/">Home </Link>
                </li>

                <li>
                  <Link href="about">About Us</Link>
                </li>

                <li>
                  <Link href="services">Services</Link>
                </li>

                <li>
                  <Link href="projects">Projects</Link>
                </li>
                <li>
                  <Link href="contact">Contact</Link>
                </li>
               
              </ul>
            </div>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:huzaifa.fullstack@gmail.com">
                huzaifa.fullstack@gmail.com
              </Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link href="tel:666-888-0000">666 888 0000</Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="#" className="fab fa-twitter"></Link>
              <Link href="#" className="fab fa-facebook-square"></Link>
              <Link href="#" className="fab fa-pinterest-p"></Link>
              <Link href="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
