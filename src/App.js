import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import client from "./apollo";
import ExchangeRates from "./ExchangeRates";
import Navigation from "./Navigation";

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
          <Route path="/child">Child route</Route>
          <Route path="/">
            <ExchangeRates />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
