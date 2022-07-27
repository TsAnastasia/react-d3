import { cl } from "../../../assets/utils/classnames";
import scss from "./homeFonts.module.scss";

const HomeFonts = () => {
  return (
    <section>
      <p className={cl(scss.roboto, scss.thin)}>Roboto thin</p>
      <p className={cl(scss.roboto, scss.extralight)}>Roboto extralight</p>
      <p className={cl(scss.roboto, scss.light)}>Roboto light</p>
      <p className={cl(scss.roboto, scss.regular)}>Roboto regular</p>
      <p className={cl(scss.roboto, scss.medium)}>Roboto medium</p>
      <p className={cl(scss.roboto, scss.semibold)}>Robotosemibold</p>
      <p className={cl(scss.roboto, scss.bold)}>Roboto bold</p>
      <p className={cl(scss.roboto, scss.extrabold)}>Roboto extrabold</p>
      <p className={cl(scss.roboto, scss.black)}>Roboto black</p>

      <p className={cl(scss.openSans, scss.light)}>Open-sans light</p>
      <p className={cl(scss.openSans, scss.regular)}>Open-sans regular</p>
      <p className={cl(scss.openSans, scss.semibold)}>Open-sans semibold</p>
      <p className={cl(scss.openSans, scss.bold)}>Open-sans bold</p>
      <p className={cl(scss.openSans, scss.extrabold)}>Open-sans extrabold</p>
    </section>
  );
};

export default HomeFonts;
