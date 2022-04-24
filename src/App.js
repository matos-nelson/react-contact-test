import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import icons from "./_icons";
import "./App.scss";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = React.lazy(() => import("containers/Layout/Layout"));

// Pages
const Page404 = React.lazy(() => import("views/Errors/Page404"));
const Page500 = React.lazy(() => import("views/Errors/Page500"));

icons.include();

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route
            exact
            path="/500"
            name="Page 500"
            render={(props) => <Page500 {...props} />}
          />
          <Route
            exact
            path="/not-found"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
