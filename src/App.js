import React from "react";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Container from "./components/Container";
import Details from "./pages/details";
import Watch from "./pages/watch";
import Error from "./pages/404";
import Home from "./pages/homepage";
import { RiHomeHeartLine, RiSendPlaneLine } from "react-icons/ri";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/AnimTV" exact>
              <Home />
            </Route>
            <Route path="/popular/:page" exact>
              <Container
                heading={{
                  ...(
                    <span>
                      <RiHomeHeartLine
                        size="1.2em"
                        style={{
                          position: "relative",
                          top: "6px",
                          right: "4px",
                        }}
                      />
                      Popular
                    </span>
                  ),
                }}
              />
            </Route>
            <Route path="/recentlyadded/page/:page" exact>
              <Container
                heading={{
                  ...(
                    <span>
                      <RiSendPlaneLine
                        size="1.2em"
                        style={{
                          position: "relative",
                          top: "6px",
                          right: "4px",
                        }}
                      />
                      New
                    </span>
                  ),
                }}
              />
            </Route>
            <Route path="/search/:query/:page" exact>
              <Container heading="Search Results" />
            </Route>
            <Route path="/genre/:query/:page" exact>
              <Container heading="Genre" />
            </Route>
            <Route path="/details/:id" exact>
              <Details heading="Overview" />
            </Route>
            <Route path="/watch/:id/:ep" exact>
              <Watch />
            </Route>
            <Route path="/error" exact>
              <Error />
            </Route>
            <Route path="*" status={404}>
              <Redirect to="/error" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
