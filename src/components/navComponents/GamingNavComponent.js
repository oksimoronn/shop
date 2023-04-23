import React from "react";
import { NavLink } from "react-router-dom";

export default function GamingNavComponent({ mouseHover, mouseOut }) {
  return (
    <>
      <div
        className="gamingContent"
        onMouseOver={mouseHover}
        onMouseLeave={mouseOut}
      >
        <div className="gamingConsoles">
          <h4>Igrače konzole & VR</h4>
          <ul>
            <li>
              <NavLink className="navLink" to="/about">
                PlayStation 4
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                PlayStation 5
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                VR
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Nitendo
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Xbox
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="gamingTitles">
          <h4>Igre za sve platforme</h4>
          <ul>
            <li>
              <NavLink className="navLink" to="/about">
                Igre za PS 4
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Igre za PS 4
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Igre za PS VR
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Igre za PS Nitendo
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/about">
                Igre za PS Xbox
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
