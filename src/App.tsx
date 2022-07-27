import { Suspense } from "react";
import TextLoader from "./components/UI/loaders/text/TextLoader";
import AppRouter from "./router/AppRouter";
import scss from "./app.module.scss";

const App = () => (
  <div className={scss.app}>
    <Suspense fallback={<TextLoader />}>
      <AppRouter />
    </Suspense>
  </div>
);

export default App;
