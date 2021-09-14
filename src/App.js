import { ApolloProvider } from "@apollo/client";
import { useEffect, useState } from "react";
import client from "./apollo";
import ExchangeRates from "./ExchangeRates";
import Navigation from "./Navigation";

const App = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  const routes = [
    { label: "Parent", path: "/" },
    { label: "Child", path: "child" },
  ];

  return (
    <ApolloProvider client={client}>
      <Navigation routes={routes} />
      {active === "/" && <ExchangeRates />}
    </ApolloProvider>
  );
};

export default App;
