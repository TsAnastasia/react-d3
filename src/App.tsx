import { Suspense } from "react";
import TextLoader from "./components/UI/loaders/text/TextLoader";
import AppRouter from "./router/AppRouter";

const App = () => (
  <Suspense fallback={<TextLoader />}>
    <AppRouter />
  </Suspense>
);

export default App;
