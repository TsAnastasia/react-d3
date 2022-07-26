import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const AppOutlet = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
export default AppOutlet;
