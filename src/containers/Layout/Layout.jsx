import React from "react";
import { ToastContainer } from "react-toastify";
import { Header, Sidebar, Content, AsideMenu, Footer } from "./index";

function Layout() {
  return (
    <div className="app">
      <ToastContainer />
      <Header />
      <div className="app-body">
        <Sidebar />
        <Content />
        <AsideMenu />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
