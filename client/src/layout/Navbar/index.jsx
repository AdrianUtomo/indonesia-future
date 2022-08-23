import React from "react";
import NavbarCSS from "./Navbar.module.css";
import mainLogo from "../../assets/INDONESIAFUTURE.png";
import mainLogoWhite from "../../assets/INDONESIAFUTUREWHITE.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
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
  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div
        className={
          pathname == "/"
            ? navbar
              ? `${NavbarCSS.bgContainer} ${NavbarCSS.bgScrolled}`
              : NavbarCSS.bgContainer
            : `${NavbarCSS.bgContainer} ${NavbarCSS.bgWhite}`
        }
      >
        <div className={NavbarCSS.container}>
          <div className={NavbarCSS.left}>
            <NavLink to={"/"}>
              <img
                src={
                  pathname == "/"
                    ? navbar
                      ? mainLogo
                      : mainLogoWhite
                    : mainLogo
                }
                alt=""
                className={NavbarCSS.logo__img}
              />
            </NavLink>
            {menuItemsLeft.map((item, i) => (
              <NavLink
                to={item.path}
                key={i}
                className={
                  pathname == "/"
                    ? NavbarCSS.NavLinkLeftWhite
                    : NavbarCSS.NavLinkLeft
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className={NavbarCSS.right}>
            <div className="search-bar"></div>
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
          </div>
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
