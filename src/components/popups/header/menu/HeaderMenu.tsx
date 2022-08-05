import { FC } from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../../../../assets/utils/pages";
import scss from "./headerMenu.modue.scss";

const HeaderMenu: FC<{ onClose: () => void }> = ({ onClose }) => (
  <nav className={scss.root}>
    <ul>
      {pages.map(({ route, name }) => (
        <li key={route}>
          <NavLink to={route} onClick={onClose}>
            {name || route}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderMenu;
