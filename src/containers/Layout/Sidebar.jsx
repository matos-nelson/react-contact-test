import React, { useEffect, useRef } from "react";
import { useOnClickOutside } from "hooks";
import SidebarNav from "./SidebarNav";
import SidebarMinimizer from "./SidebarMinimizer";
import navigation from "./_nav";

function Sidebar(props) {
  const wrapperRef = useRef(null);

  useOnClickOutside(wrapperRef, (e) => {
    if (
      !e.target.closest("[data-sidebar-toggler]") &&
      document.body.classList.contains("sidebar-show")
    ) {
      document.body.classList.remove("sidebar-show");
    }
  });

  useEffect(() => {
    document.body.classList.add("sidebar-fixed", "sidebar-lg-show");
  });

  return (
    <div className="sidebar" ref={wrapperRef}>
      <div className="scrollbar-container sidebar-nav ps ps-container ps--active-y">
        <SidebarNav navConfig={navigation} {...props} />
      </div>
      <SidebarMinimizer />
    </div>
  );
}

export default Sidebar;
