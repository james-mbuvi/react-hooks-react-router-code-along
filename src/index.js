import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
  }

  function About() {
    return(
      <div>
        <h1>This is my about componet!</h1>
      </div>
    );
  }

  function Login() {
    return(
      <div>
      <h1>Login</h1>
      <form>
<div>
  <input type="text" name="username" placeholder="username"  />
</div>
<div>
  <input type="password" name="password" placeholder="password"/>
</div>
<div>
  <input type="submit" value="submit"/>
</div>
      </form>
      </div>
    );
  }


  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );



