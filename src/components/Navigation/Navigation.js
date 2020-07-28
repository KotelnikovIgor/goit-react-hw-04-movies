import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav_list}>
        <li className={style.nav_list__items}>
          <NavLink className={style.nav_list__item} to={routes.HOME}>
            Home page
          </NavLink>
        </li>
        <li className={style.nav_list__items}>
          <NavLink className={style.nav_list__item} to={routes.MOVIES}>
            Movies page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
