import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faPhone,
  faCreditCard,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function StickyHeaderComponents() {
  return (
    <div className="stickyHeader">
      <div className="stickyHeaderLeft">
        <ul>
          <li>
            <a href="3">
              <FontAwesomeIcon icon={faCircleInfo} /> Trgovine
            </a>
          </li>
          <li>
            <a href="3">
              <FontAwesomeIcon icon={faPhone} /> 072 33 69 55
            </a>
          </li>
          <li>
            <a href="3">
              {" "}
              <FontAwesomeIcon icon={faCreditCard} /> Plaćanje na rate
            </a>
          </li>
          <li>
            <a href="3">
              <FontAwesomeIcon icon={faTruck} /> Besplatna dostava
            </a>
          </li>
          <li>
            <a href="3">Ocijeni poslovnicu</a>
          </li>
          <li>
            <a href="3">Info Centar</a>
          </li>
          <li>
            <a href="3">Eu projekti</a>
          </li>
          <li>
            <a href="3">Tečaj 1EUR = 7.534 HRK</a>
          </li>
        </ul>
      </div>
      <div className="stickyHeaderRight">
        <a href="3">
          <FontAwesomeIcon icon={faUser} /> Prijavi se
        </a>
      </div>
    </div>
  );
}
