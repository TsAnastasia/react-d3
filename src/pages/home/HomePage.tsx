import AppButton from "../../components/UI/buttons/app/AppButton";
import { AppRoutes } from "../../router/routers";

const HomePage = () => {
  return (
    <main>
      <h1>Home page</h1>
      <section>
        <AppButton to={AppRoutes.HOME} variant="contained">
          go to home page
        </AppButton>
      </section>
    </main>
  );
};

export default HomePage;
