import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SubNavComponent from "./navComponents/SubNavComponent";

export default function SiteContentComponent() {
  const initialvalues = [
    { el: "gaingm", name: "Gaming", adress: "/gaming" },
    { el: "infom", name: "Informatika", adress: "/informatika" },
    {
      el: "mob",
      name: "Mobiteli, tablet i satovi",
      adress: "/mob",
    },
    { el: "tv", name: "Televizori i audio", adress: "/tv" },
    {
      el: "veAparati",
      name: "Veliki kućanski aparati",
      adress: "/velikiKucanskiAparati",
    },
    {
      el: "maAparati",
      name: "Mali kućanski aparati",
      adress: "/maliKucanskiAparati",
    },
    { el: "njega", name: "Osobna njega", adress: "/njega" },
    {
      el: "dronovi",
      name: "Dronovi, kamere i navigacija",
      adress: "/dronoviKamereNavigacija",
    },
    {
      el: "dom",
      name: " Dom, vrt i alati",
      adress: "/domVrtAlat",
    },
    { el: "outlet", name: "Outlet", adress: "/outlet" },
    { el: "sport", name: "Sport", adress: "/sport" },
    { el: "psBonovi", name: "PS bonovi", adress: "/psBonovi" },
  ];

  const subValues = [
    {
      el: "gaingm",
      title: "Igrače konzole & VR",
      link: ["PlayStation 4", "PlayStation 5", "VR", "Nitendo", "Xbox"],
      state: false,
    },
    {
      el: "gaingm",
      title: "Igre za sve platforme",
      link: [
        "Igre za PS 5",
        "Igre za PS VR",
        "Igre za PS Nitendo",
        "Igre za Xbox",
      ],
      state: false,
    },
    {
      el: "infom",
      title: "Laptop Računala",
      link: [
        "Standardni laptopi",
        "Gaming laptopi",
        "Ultramobilni laptopi",
        "Hibridni laptopi",
      ],
      state: false,
    },
    {
      el: "infom",
      title: "Stolna Računala",
      link: [
        "Gaming računala",
        "Stolna računala",
        "Poslovna računala",
        "AIO računala",
      ],
      state: false,
    },
  ];
  const [gaming, setGaming] = useState(subValues);

  const mouseHover = (el) => {
    setGaming(
      subValues.map((intval) => {
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
      subValues.map((intval) => {
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
        {initialvalues.map((el) => (
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
            <SubNavComponent
              key={el.title}
              mouseHover={() => mouseHover(el.el)}
              mouseOut={() => mouseOut(el.el)}
              title={el.title}
              link={el.link}
            />
          )
      )}
    </div>
  );
}
