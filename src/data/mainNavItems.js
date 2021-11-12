export const navItemsData = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/services",
    name: "Services",
    childs: [
      {
        path: "/",
        name: "Service1",
      },
      {
        path: "/about",
        name: "Service2",
      },
      {
        path: "/",
        name: "Service3",
      },
      {
        path: "/about",
        name: "Service4",
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
  },
];
