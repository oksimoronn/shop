import React from "react";
import StickyHeaderComponents from "../components/StickyHeaderComponents";
import PagesSearchComponent from "../components/PagesSearchComponent";
import SiteContentComponent from "../components/SiteContentComponent";

export default function Home() {
  return (
    <div>
      <StickyHeaderComponents />
      <PagesSearchComponent />
      <SiteContentComponent />
    </div>
  );
}
