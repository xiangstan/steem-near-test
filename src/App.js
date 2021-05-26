import "bulma";
import { useState } from "react";
import './App.css';
import Header from "components/Header";
import Login from "components/LoginForm";
import Toast from "components/Toast";

function App() {
  const [loginForm, setLogin] = useState(false);
  const [loginTitle, setLoginTtl] = useState("");

  function displayLoginForm() {
    setLogin(!loginForm);
  }

  function displayLoginTitle(data) {
    setLoginTtl(data);
  }

  return (
    <div className="App">
      <Header action={displayLoginForm} loginTitle={displayLoginTitle} />
      <Login action={displayLoginForm} show={loginForm} title={loginTitle} />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="button is-warning">Test</button>
      </header>
      <Toast />
    </div>
  );
}

export default App;
