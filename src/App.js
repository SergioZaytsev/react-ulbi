import "./styles/app.css";

import React from "react";

import { RouterProvider } from "react-router-dom";

import { privateRoutes } from "./Routes/routes";
import { publicRoutes } from "./Routes/routes";

import { AuthContext } from "./Context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const [isAuth, setAuth] = React.useState(false);

  React.useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setAuth(auth);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      <Provider store={store}>
        <div className="App">
          <RouterProvider router={isAuth ? privateRoutes : publicRoutes} />
        </div>
      </Provider>
    </AuthContext.Provider>
  );
}

export default App;
