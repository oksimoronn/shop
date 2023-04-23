import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GamingNavComponent from "./navComponents/GamingNavComponent";
import InformatikaNavComponent from "./navComponents/InformatikaNavComponent";
//import { key } from "localforage";

export default function SiteContentComponent() {
  const initialvalues = [
    { el: "gaingm", state: false },
    { el: "infom", state: false },
    { el: "mob", state: false },
    { el: "tv", state: false },
    { el: "veAparati", state: false },
    { el: "maAparati", state: false },
    { el: "njega", state: false },
    { el: "dronovi", state: false },
    { el: "dom", state: false },
    { el: "outlet", state: false },
    { el: "sport", state: false },
    { el: "psBonovi", state: false },
  ];

  const titleValueas = [
    { el: "gaingm", name: "Gaming", adress: "/gaming", state: false },
    { el: "infom", name: "Informatika", adress: "/informatika", state: false },
    {
      el: "mob",
      name: "Mobiteli, tablet i satovi",
      adress: "/mob",
      state: false,
    },
    { el: "tv", name: "Televizori i audio", adress: "/tv", state: false },
    {
      el: "veAparati",
      name: "Veliki kućanski aparati",
      adress: "/velikiKucanskiAparati",
      state: false,
    },
    {
      el: "maAparati",
      name: "Mali kućanski aparati",
      adress: "/maliKucanskiAparati",
      state: false,
    },
    { el: "njega", name: "Osobna njega", adress: "/njega", state: false },
    {
      el: "dronovi",
      name: "Dronovi, kamere i navigacija",
      adress: "/dronoviKamereNavigacija",
      state: false,
    },
    {
      el: "dom",
      name: " Dom, vrt i alati",
      adress: "/domVrtAlat",
      state: false,
    },
    { el: "outlet", name: "Outlet", adress: "/outlet", state: false },
    { el: "sport", name: "Sport", adress: "/sport", state: false },
    { el: "psBonovi", name: "PS bonovi", adress: "/psBonovi", state: false },
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
  };

  return (
    <div className="contentComponent">
      <ul>
        {titleValueas.map((el) => (
          <li
            key={el.adress}
            onMouseOver={() => {
              mouseHover(el.el);
            }}
          >
            <NavLink className="navLink" to={el.adress}>
              {el.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <hr></hr>

      {gaming.map(
        (el) =>
          el.state && (
            <GamingNavComponent
              key={el.el}
              mouseHover={() => mouseHover(el.el)}
              mouseOut={() => mouseOut(el.el)}
            />
          )
      )}
      {/*gaming[0].state && (
        <GamingNavComponent
          mouseHover={() => mouseHover("gaingm")}
          mouseOut={() => mouseOut("gaingm")}
        />
      )*/}
      {/*gaming[1].state && (
        <InformatikaNavComponent
          mouseHover={() => mouseHover("infom")}
          mouseOut={() => mouseOut("infom")}
        />
      )*/}
    </div>
  );
}
