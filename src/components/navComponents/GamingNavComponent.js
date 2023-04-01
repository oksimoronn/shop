import React from "react";
import { NavLink } from "react-router-dom";

export default function GamingNavComponent() {
  return (
    <div>
      <ul>
        <li>
          <NavLink className="navLink" to="/about">
            Gaming
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
