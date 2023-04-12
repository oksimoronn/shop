import React from "react";
import { NavLink } from "react-router-dom";

export default function InformatikaNavComponent({ mouseHover, mouseOut }) {
  return (
    <>
      <hr></hr>
      <div
        className="gamingContent"
        onMouseOver={mouseHover}
        onMouseLeave={mouseOut}
      >
        <div className="gamingConsoles">
          <h4>Laptop računala</h4>
          <ul>
            <li>
              <NavLink className="navLink" to="/about">
                Standardni laptopi
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Gaming laptopi
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Ultramobilni laptopi
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Poslovni laptopi
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Hibridni laptopi
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="gamingTitles">
          <h4>Laptop pribor</h4>
          <ul>
            <li>
              <NavLink className="navLink" to="/about">
                Torbe za laptope
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Punjači i coleri
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Ostali laptop pribori
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
