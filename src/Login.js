import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";

function Login1() {  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/App" component={App} />
      </BrowserRouter>
    </div>
  );
}

export default Login1;
