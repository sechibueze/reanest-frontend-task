import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./Sidebar.scss";
import userThumbnailPlaceholder from "../../assets/images/reanest-board-desktop.jpg";
const links = [
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
const Sidebar = () => {
  const [sidebarMenu, setSidebarMenu] = useState(null);
  useEffect(() => {
    const fetchMenuLinks = async () => {
      const uri = "https://601d848abe5f340017a19c29.mockapi.io/menu";
      axios
        .get(uri)
        .then(({ data }) => {
          console.log("result ", data);
          setSidebarMenu(data);
        })
        .catch((err) => {
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
            src={userThumbnailPlaceholder}
            alt="user-thumbnail"
            className="sidebar-user-image"
          />
          <div className="sidebar-user-data">
            <p className="sidebar-username"> Elon Musk A.</p>
            <p className="sidebar-user-id"> ID: 956D27499 </p>
          </div>
        </div>

        <a href="https://" className="sidebar-header-cta">
          View Profile
        </a>
      </div>

      <ul className="sidebar-menu">
        {
          // sidebarMenu &&
          // Array.isArray(sidebarMenu) &&
          // sidebarMenu.length > 0 &&
          links.map((menu) => {
            return (
              <li className="sidebar-link" key={menu.link}>
                <span className="icon-border">
                  <FontAwesomeIcon
                    icon={[menu.prefix, menu.icon]}
                    size="1.5x"
                    fixedWidth
                  />
                </span>
                <a href={menu.link} className="sidebar-menu-name">
                  {" "}
                  {menu.name}{" "}
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Sidebar;
