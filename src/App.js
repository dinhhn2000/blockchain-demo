import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./containers/Auth/SignIn/SignIn";
import SignUp from "./containers/Auth/SignUp/SignUp";
import CustomLayout from "./components/Layouts/layout";
import SendTransaction from "./containers/Main/SendTransaction";
import InProgress from "./containers/InProgress/InProgress";
import Statistics from "./containers/Main/Statitics";
import WalletStatistics from "./containers/Main/WalletStatistics";
import Dashboard from "./containers/Main/Dashboard";

function App(props) {
  const NoMatch = (props) => {
    return <Redirect to="/signIn" />;
  };

  const routes =
    localStorage.getItem("publicKey") === null ? (
      <Switch>
        <Route exact path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/send-transaction" component={SendTransaction} />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/wallet-statistics" component={WalletStatistics} />
        <Route path="*">
          <InProgress />
        </Route>
      </Switch>
    );
  return <CustomLayout>{routes}</CustomLayout>;
}

export default App;
