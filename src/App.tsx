import Image from "./assets/images/react.png";
import Home from "./assets/images/home.svg";
import ClickCounter from "./components/clickCounter/ClickCounter";

const App = () => {
  return (
    <main>
      <h1>
        React Typescript SCSS Webpack Starter Templete - {process.env.NODE_ENV}
      </h1>

      <p>{process.env.REACT_APP_BASE_URL}</p>

      <img src={Image} alt="React logo" />
      <img src={Home} alt="React logo" />

      <ClickCounter />
    </main>
  );
};

export default App;
