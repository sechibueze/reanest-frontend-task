import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./Sidebar.scss";
import { testData } from "../../_data";
// import userThumbnailPlaceholder from "../../assets/images/reanest-board-desktop.jpg";
export const links = [
  {
    name: "Dashboard",
    icon: "home",
    link: "/",
    prefix: "fas",
  },
  {
    name: "Countries",
    icon: "globe",
    link: "/countries",
    prefix: "fas",
  },
  {
    name: "States",
    icon: "xing-square",
    link: "/statess",
    prefix: "fab",
  },
  {
    name: "Schools",
    icon: "graduation-cap",
    link: "/schools",
    prefix: "fas",
  },
  {
    name: "Faculties",
    icon: "delicious",
    link: "/faculty",
    prefix: "fab",
  },
  {
    name: "Students",
    icon: "openid",
    link: "/students",
    prefix: "fab",
  },
];
const Sidebar = ({ user }) => {
  const [sidebarMenu, setSidebarMenu] = useState(links);

  useEffect(() => {
    const fetchMenuLinks = async () => {
      const uri = "http://601d848abe5f340017a19c29.mockapi.io/menu";
      // Whatever happens, overide api response with hardcoded data
      // some icons names from api are not in free version of fontawesome
      axios
        .get(uri)
        .then(({ data }) => {
          console.log("result ", data);
          setSidebarMenu(links);
        })
        .catch((err) => {
          setSidebarMenu(links);
          console.log("err ", { err });
        });
    };
    fetchMenuLinks();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <label htmlFor="menu-checkbox" className="sidebar-close-btn">
          <FontAwesomeIcon icon="times" color="#ddd" />
        </label>
        <div className="sidebar-user-container">
          <img
            src={"https://i.ibb.co/swkR93p/bramdejager-600x600.png"}
            alt="user-thumbnail"
            className="sidebar-user-image"
          />
          <div className="sidebar-user-data">
            <p className="sidebar-username"> {user && user.name} </p>
            <p className="sidebar-user-id">
              {" "}
              {user && user.id && user.id.title} : {user.id.value}{" "}
            </p>
          </div>
        </div>

        <a href="https://" className="sidebar-header-cta">
          View Profile
        </a>
      </div>

      <ul className="sidebar-menu">
        {sidebarMenu &&
          Array.isArray(sidebarMenu) &&
          sidebarMenu.length > 0 &&
          sidebarMenu.map((menu) => {
            return (
              <li className="sidebar-link" key={menu.link}>
                <span className="icon-border">
                  <FontAwesomeIcon
                    icon={[menu.prefix, menu.icon]}
                    size={12}
                    fixedWidth
                  />
                </span>
                <a href={menu.link} className="sidebar-menu-name">
                  {" "}
                  {menu.name}{" "}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Sidebar.defaultProps = {
  user: testData.user,
};
export default Sidebar;
