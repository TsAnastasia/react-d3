import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import TextLoader from "../../UI/loaders/text/TextLoader";

const AppOutlet = () => (
  <>
    <Header />
    <Suspense fallback={<TextLoader />}>
      <Outlet />
    </Suspense>

    <Footer />
  </>
);
export default AppOutlet;
