import React, { useState, useEffect, useRef } from "react";
import NavbarCSS from "./Navbar.module.css";
import mainLogo from "../../assets/INDONESIAFUTURE.png";
import mainLogoWhite from "../../assets/INDONESIAFUTUREWHITE.png";
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { SearchBar } from "../../components/SearchBar";
export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { height, width } = useWindowDimensions();
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  let useClickOutside = (handler) => {
    let domNode = useRef();
    useEffect(() => {
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", maybeHandler);
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
    return domNode;
  };
  let domNode = useClickOutside(() => {
    setMobileMenu(false);
  });
  const arrayMenu = ["/browse-talents", "/browse-projects"];
  const menuItemsLeft = [
    {
      path: "/browse-talents",
      name: "Browse Talents",
    },
    {
      path: "/browse-projects",
      name: "Browse Projects",
    },
  ];

  const menuItemsRight = [
    {
      path: "/login",
      name: "Login",
    },
    {
      path: "/sign-up",
      name: "Sign Up",
    },
  ];
  const menuItemsAll = [...menuItemsLeft, ...menuItemsRight];

  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  const navbarLandingPage = `${NavbarCSS.bgContainer} ${NavbarCSS.bgScrolled}`;
  const navbarWhite = `${NavbarCSS.bgContainer} ${NavbarCSS.bgWhite}`;
  return (
    <>
      <div
        ref={domNode}
        className={
          pathname == "/"
            ? navbar
              ? navbarLandingPage
              : NavbarCSS.bgContainer
            : navbarWhite
        }
      >
        <div className={NavbarCSS.container}>
          <div className={NavbarCSS.left}>
            <NavLink to={"/"}>
              <img
                src={
                  pathname == "/"
                    ? width <= 769
                      ? mainLogo
                      : navbar
                      ? mainLogo
                      : mainLogoWhite
                    : mainLogo
                }
                alt=""
                className={NavbarCSS.logo__img}
              />
            </NavLink>
            {width <= 769
              ? null
              : menuItemsLeft.map((item, i) => (
                  <NavLink
                    to={item.path}
                    key={i}
                    className={({ isActive }) =>
                      isActive && arrayMenu.includes(pathname)
                        ? NavbarCSS.isActive
                        : pathname == "/"
                        ? NavbarCSS.NavLinkLeftWhite
                        : NavbarCSS.NavLinkLeft
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
          </div>
          <div className={NavbarCSS.right}>
            <div
              className={
                pathname == "/"
                  ? navbar
                    ? NavbarCSS.searchBar
                    : NavbarCSS.displayNone
                  : NavbarCSS.searchBar
              }
            >
              <SearchBar />
            </div>
            {menuItemsRight.map((item, i) => (
              <NavLink
                to={item.path}
                key={i}
                className={
                  pathname == "/"
                    ? NavbarCSS.NavLinkRightWhite
                    : NavbarCSS.NavLinkRight
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div
              className={NavbarCSS.burgerMenu}
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <GiHamburgerMenu className={NavbarCSS.iconBurger} />
            </div>
          </div>
        </div>
        <div
          className={
            mobileMenu
              ? `${NavbarCSS.test} ${NavbarCSS.active}`
              : NavbarCSS.test
          }
        >
          {menuItemsAll.map((item, i) => (
            <NavLink
              to={item.path}
              key={i}
              className={({ isActive }) =>
                isActive && arrayMenu.includes(pathname)
                  ? NavbarCSS.isActive
                  : pathname == "/"
                  ? NavbarCSS.NavLinkAllWhiteMobile
                  : NavbarCSS.NavLinkAllMobile
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div
          className={
            pathname === "/"
              ? navbar
                ? NavbarCSS.underline
                : ""
              : NavbarCSS.underline
          }
        ></div>
      </div>
    </>
  );
};
