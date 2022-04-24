import React from "react";

function SidebarMinimizer(props) {
  function minimizeSidebar() {
    if (
      document.body.classList.contains("brand-minimized") &&
      document.body.classList.contains("sidebar-minimized")
    ) {
      document.body.classList.remove("brand-minimized", "sidebar-minimized");
    } else {
      document.body.classList.add("brand-minimized", "sidebar-minimized");
    }
  }
  return (
    <button
      className="sidebar-minimizer mt-auto"
      onClick={() => minimizeSidebar()}
    ></button>
  );
}

export default SidebarMinimizer;
