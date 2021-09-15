import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import client from "./apollo";
import ExchangeRates from "./ExchangeRates";
import AraChild from "./AraChild";
import Navigation from "./Navigation";
import { loadScript } from "nova-helpers";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navigation
          routes={[
            { label: "Parent", path: "/" },
            { label: "Child", path: "child" },
          ]}
        />

        <Switch>
          <Route path="/child">
            Child route <AraChild />
          </Route>
          <Route path="/">
            <ExchangeRates />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

document.addEventListener("NovaMount", ({ detail }) => {
  const { name } = detail;
  if (name === "child") {
    loadScript(`${process.env.REACT_APP_CHILD_URL}/child.bundle.js`);
  }
});

export default App;
