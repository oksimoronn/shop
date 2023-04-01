import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GamingNavComponent from "./navComponents/GamingNavComponent";

export default function SiteContentComponent() {
  const [isHover, setHover] = useState(false);

  const mouseHover = () => {
    setHover(true);
  };
  const mouseOut = () => {
    setHover(false);
  };

  return (
    <div className="contentComponent">
      <ul>
        {/* MORAŠ DODATI RUTEE ZA OVO SVE I POPRAVITI  to=""*/}
        <li onMouseOver={mouseHover} onMouseOut={mouseOut}>
          <NavLink className="navLink" to="/about">
            Gaming
          </NavLink>
          {isHover && <GamingNavComponent />}
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            Informatika
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            Mobiteli, tablet i satovi
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            Televizori i audio
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            Veliki kućanski aparati
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            Mali kućanski aparati
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            Osobna njega
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            Dronovi, kamere i navigacija
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            Dom, vrt i alati
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            Outlet
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            Sport
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            Ps bonovi
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
