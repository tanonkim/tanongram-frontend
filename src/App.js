import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/Notfound";
import SignUp from "./screens/SignUp";
import routes from "./routes";

import { useReactiveVar } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              path={routes.home}
              element={isLoggedIn === true ? <Home /> : <Login />}
            />
            {!isLoggedIn ? (
              <Route path={routes.signUp} element={<SignUp />}></Route>
            ) : null}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
