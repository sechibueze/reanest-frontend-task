import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <Fragment>
      <input type="checkbox" id="menu-checkbox" className="menu-toggler" />
      <headeer className="header">
        <label htmlFor="menu-checkbox">
          <FontAwesomeIcon icon={"bars"} size="2x" />
        </label>
      </headeer>
    </Fragment>
  );
};

export default Navbar;
