import ExamplePopup from "../../components/popups/example/ExamplePopup";
import AppButton from "../../components/UI/buttons/app/AppButton";
import { AppRoutes } from "../../router/routers";
import Image from "../../assets/images/react.png";

const HomePage = () => {
  return (
    <main>
      <h1>Home page</h1>
      <section>
        <AppButton to={AppRoutes.HOME} variant="contained">
          go to home page
        </AppButton>
        <ExamplePopup />
        <img alt="react" src={Image} />
      </section>
    </main>
  );
};

export default HomePage;
