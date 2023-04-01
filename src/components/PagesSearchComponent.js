import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

export default function PagesSearchComponent() {
  return (
    <div className="header">
      <img
        src="https://cdn.sancta-domenica.hr/static/version1677585628/frontend/SanctaDomenica/theme/hr_HR/images/logo.svg"
        alt="Sancta Domenica"
      ></img>
      <div className="headerLinks">
        <NavLink
          to="/promotions"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          AKCIJE I PROMOCIJE
        </NavLink>
        <NavLink
          to="/brands"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          BRANDOVI
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          NOVOSTI
        </NavLink>
        <NavLink
          to="/newsLeter"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          NEWSLETTER
        </NavLink>
      </div>
      {/* <div className="headerSearch">*/}
      <form className="headerSearchForm">
        <input type="text" placeholder="Upišite traženi proizvod ..."></input>
      </form>
      {/*</div>*/}
      <div className="shopingCart">
        <FontAwesomeIcon icon={faCartShopping} />
        <div className="shopingCartAmount">0</div>
      </div>
    </div>
  );
}
