import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

import "./App.css";

const App = () => {
  const routes = useRoutes([
    { path: "/about", element: <About /> },
    { path: "/", element: <Home /> },
  ]);
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
