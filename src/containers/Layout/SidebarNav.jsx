import PropTypes from "prop-types";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function SidebarNav(props) {
  const pathname = useLocation().pathname;
  function GenerateNavs(content) {
    function hideMobile() {
      if (document.body.classList.contains("sidebar-show")) {
        document.body.classList.remove("sidebar-show");
      }
    }

    if (content.title) {
      return (
        <li key={content.name} className="nav-title">
          {content.name}
        </li>
      );
    }

    return (
      <Nav.Item key={content.name}>
        <Nav.Link
          as={Link}
          to={content.url}
          active={pathname === content.url}
          onClick={() => hideMobile()}
        >
          <i className={"nav-icon " + content.icon}></i>
          {content.name}
        </Nav.Link>
      </Nav.Item>
    );
  }

  return (
    <div>
      {props.navConfig && props.navConfig.items && (
        <Nav>{props.navConfig.items.map((item) => GenerateNavs(item))}</Nav>
      )}
    </div>
  );
}

SidebarNav.propTypes = { navConfig: PropTypes.object };

export default SidebarNav;
