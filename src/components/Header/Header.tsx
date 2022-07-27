import { Link } from "react-router-dom";
import { AppRoutes } from "../../router/routers";
import scss from "./header.module.scss";

const Header = () => (
  <header className={scss.root}>
    <Link to={AppRoutes.HOME} className={scss.logo}>
      <span className={scss.img} />
      logo
    </Link>
  </header>
);

export default Header;
