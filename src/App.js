import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./containers/Auth/SignIn/SignIn";
import SignUp from "./containers/Auth/SignUp/SignUp";
import CustomLayout from "./components/Layouts/layout";
import SendTransaction from "./containers/Main/SendTransaction";
import InProgress from "./containers/InProgress/InProgress";

function App(props) {
  const NoMatch = (props) => {
    return <Redirect to="/signIn" />;
  };

  const routes =
    localStorage.getItem("token") === null ? (
      <Switch>
        <Route exact path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/send-transaction" component={SendTransaction} />
        <Route path="*">
          <InProgress />
        </Route>
      </Switch>
    );
  return <CustomLayout>{routes}</CustomLayout>;
}

export default App;
