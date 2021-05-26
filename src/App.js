import "bulma";
import { useState } from "react";
import './App.css';
import Header from "components/Header";
import Modal from "components/LoginForm";
import Toast from "components/Toast";

function App() {
  const  [modal, setModal] = useState(false);

  function displayModal() {
    setModal(!modal);
  }

  return (
    <div className="App">
      <Header action={displayModal} />
      <Modal action={displayModal} show={modal} />
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
