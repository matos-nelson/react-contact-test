import React from "react";

const Footer = () => {
  return (
    <footer className="app-footer">
      <span>
        <a href="https://company.com">Company, LLC</a> &copy;{" "}
        {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
