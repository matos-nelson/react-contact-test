import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));

const ContactsView = React.lazy(() => import("./views/Contacts"));
const ContactUpdateForm = React.lazy(() =>
  import("./components/Contact/ContactUpdateForm")
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/contacts", exact: true, name: "Contacts", component: ContactsView },
  {
    path: "/contacts/:id",
    exact: true,
    name: "Details",
    component: ContactUpdateForm,
  },
];

export default routes;
