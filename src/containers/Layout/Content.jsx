import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes";
import BreadcrumbRouter from "./BreadcrumbRouter";

function Content() {
  function loading() {
    return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
  }

  return (
    <main className="main">
      <BreadcrumbRouter routes={routes} />
      <Container fluid>
        <Suspense fallback={loading()}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
            <Redirect exact from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </Container>
    </main>
  );
}

export default Content;
