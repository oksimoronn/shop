import React from "react";
import { NavLink } from "react-router-dom";

export default function SubNavComponent({ mouseHover, mouseOut, title, link }) {
  return (
    <>
      <div
        className="gamingContent"
        onMouseOver={mouseHover}
        onMouseLeave={mouseOut}
      >
        <div className="gamingConsoles">
          <h4>{title}</h4>
          <ul>
            {link.map((el) => (
              <li key={el}>
                <NavLink className="navLink" to={el}>
                  {el}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
