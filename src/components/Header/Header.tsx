import { Link } from "react-router-dom";
import { AppRoutes } from "../../router/routers";
import HeaderPopup from "../popups/header/HeaderPopup";
import scss from "./header.module.scss";

const Header = () => (
  <header className={scss.root}>
    <Link to={AppRoutes.MAIN} className={scss.logo}>
      <span className={scss.img} />
      React-d3
    </Link>
    <HeaderPopup />
  </header>
);

export default Header;
