import React from "react";
import { ToastContainer } from "react-toastify";
import { Header, Sidebar, Content, Footer } from "./index";

function Layout() {
  return (
    <div className="app">
      <ToastContainer />
      <Header />
      <div className="app-body">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
