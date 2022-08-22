import React from "react";
import NavbarCSS from "./Navbar.module.css";
import mainLogo from "../../assets/INDONESIAFUTURE.png";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
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
  return (
    <div className={NavbarCSS.container}>
      <div className={NavbarCSS.left}>
        <div className={NavbarCSS.logo}>
          <img src={mainLogo} alt="" className={NavbarCSS.logo__img} />
        </div>
        <div className={NavbarCSS.menuItemsLeft}>
          {menuItemsLeft.map((item, i) => (
            <NavLink to={item.path} key={i} className={NavbarCSS.NavLinkLeft}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className={NavbarCSS.right}>
        <div className="search-bar">yep</div>
        <div className={NavbarCSS.menuItemsRight}>
          {menuItemsRight.map((item, i) => (
            <NavLink to={item.path} key={i} className={NavbarCSS.NavLinkRight}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
