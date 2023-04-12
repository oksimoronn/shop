import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GamingNavComponent from "./navComponents/GamingNavComponent";
import InformatikaNavComponent from "./navComponents/InformatikaNavComponent";

export default function SiteContentComponent() {
  const initialvalues = [
    { el: "gaingm", state: false },
    { el: "infom", state: false },
    { el: "mob", state: false },
  ];
  const [gaming, setGaming] = useState(initialvalues);

  const mouseHover = (el) => {
    setGaming(
      initialvalues.map((intval) => {
        if (intval.el === el) {
          return { ...intval, state: true };
        } else {
          return intval;
        }
      })
    );
  };
  const mouseOut = (el) => {
    setGaming(
      initialvalues.map((intval) => {
        if (intval.el === el) {
          return { ...intval, state: false };
        } else {
          return intval;
        }
      })
    );
    //setGaming(false);
  };

  return (
    <div className="contentComponent">
      <ul>
        {/* MORAŠ DODATI RUTEE ZA OVO SVE I POPRAVITI  to=""*/}
        <li
          onMouseOver={() => {
            mouseHover("gaingm");
          }}
        >
          <NavLink className="navLink" to="/about">
            Gaming
          </NavLink>
        </li>
        <li
          onMouseOver={() => {
            mouseHover("infom");
          }}
        >
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
      <hr></hr>
      {gaming[0].state && (
        <GamingNavComponent
          mouseHover={() => mouseHover("gaingm")}
          mouseOut={() => mouseOut("gaingm")}
        />
      )}
      {gaming[1].state && (
        <InformatikaNavComponent
          mouseHover={() => mouseHover("infom")}
          mouseOut={() => mouseOut("infom")}
        />
      )}
    </div>
  );
}
