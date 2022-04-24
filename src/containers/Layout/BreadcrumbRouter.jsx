import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

function BreadcrumbRouter(props) {
  const [routes] = useState(props.routes);
  const pathname = useLocation().pathname;
  const [routeItems, setRouteItems] = useState("");

  const getPaths = useCallback(() => {
    const paths = ["/"];
    if (pathname === "/") return paths;
    pathname.split("/").reduce((prev, curr) => {
      const currPath = `${prev}/${curr}`;
      paths.push(currPath);
      return currPath;
    });
    return paths;
  }, [pathname]);

  function BreadcrumbRouteItem({ name, path }, currPath) {
    if (path === currPath) {
      return (
        <Breadcrumb.Item key={path} active>
          {name}
        </Breadcrumb.Item>
      );
    } else {
      return (
        <Breadcrumb.Item linkAs="span" key={path}>
          <NavLink to={path}>{name}</NavLink>
        </Breadcrumb.Item>
      );
    }
  }

  useEffect(() => {
    if (!routes) {
      return;
    }
    const paths = getPaths();
    const currRoutes = routes.filter((route) => paths.includes(route.path));
    const items = currRoutes.map((route) => {
      return BreadcrumbRouteItem(route, pathname);
    });
    setRouteItems(items);
  }, [routes, getPaths, pathname]);

  return (
    <div>
      <Breadcrumb>{routeItems}</Breadcrumb>
    </div>
  );
}

BreadcrumbRouter.propTypes = { routes: PropTypes.array };

export default BreadcrumbRouter;
