import ExamplePopup from "../../components/popups/example/ExamplePopup";
import AppButton from "../../components/UI/buttons/app/AppButton";
import { AppRoutes } from "../../router/routers";
import Image from "../../assets/images/react.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../redux/example/exampleSlice";
import HomeFonts from "./fonts/HomeFonts";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isAuth, user } = useAppSelector((state) => state.example);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <main>
      <h1>Home page</h1>
      <section>
        <AppButton to={AppRoutes.HOME}>go to home page</AppButton>

        <ExamplePopup />

        <AppButton
          disabled={!isAuth}
          onClick={handleLogout}
          variant="contained"
        >
          {`logout ${user?.name || ""}`}
        </AppButton>
      </section>

      <section>
        <img alt="react" src={Image} />
      </section>

      <HomeFonts />
    </main>
  );
};

export default HomePage;
