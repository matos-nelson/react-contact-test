export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "fas fa-tachometer-alt",
    },
    {
      title: true,
      name: "Assets",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "", // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Contacts",
      url: "/contacts",
      icon: "fas fa-address-book",
    },
  ],
};
