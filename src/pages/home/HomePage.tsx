import { Link } from "react-router-dom";
import { pages } from "../../assets/utils/pages";

const HomePage = () => {
  return (
    <main>
      <section>
        <h1>React-d3</h1>
        <p>This project contains from components created with d3. </p>
      </section>

      <section>
        <h2>Component-d3-examples</h2>
        <ul>
          {pages.map(({ route, name, description }) => (
            <li key={route}>
              <Link to={route}>{name || route}</Link>
              {description && <p>{description}</p>}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
