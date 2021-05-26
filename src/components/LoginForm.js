import hasKeychain from "utils/steemKeychain";
import { useState } from "react";
import { toast } from "react-toastify";

function Login(props) {
  const [account, setAccount] = useState("");

  let isActive = (props.show) ? " is-active" : "";
      isActive = "login-box" + isActive
  
  function getTitle(data) {
    const titles = {
      steem: "STEEM Keychain",
      near: "Near Wallet"
    }
    return titles[data];
  }

  /* main login function */
  function login(e) {
    const method = e.currentTarget.dataset.method;
    const func = {
      steem: function() { loginSteem(); },
      near: function() { loginNear(); }
    }
    func[method]();
  }

  function loginNear() {}

  /* log in STEEM via Keychain */
  function loginSteem() {
    setAccount(account.trim());
    if (account === "") {
      toast.warn("Please input an account", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
    else if (hasKeychain()) {
      window.steem_keychain.requestSignBuffer(account, account+Date.now(), "Posting", (r) => {
        if (r.success) {
          localStorage.setItem("steemId", account);
          props.action();
          toast.success("Authentication with STEEM successfully", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
      });
    }
    else {
      console.log("Nothing happened")
    }
  }

  function handleChange(e) {
    let field = e.currentTarget.dataset.field;
    const fields = {
      account: function() { setAccount(e.currentTarget.value); }
    }
    fields[field]();
  }

  return (
    <div className={isActive}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{getTitle(props.title)} Log In</p>
          <button className="delete" aria-label="close" onClick={props.action}></button>
        </header>
        <section className="modal-card-body">
          <div className="control">
            <input className="input" data-field="account" value={account} onChange={handleChange} />
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" data-method={props.title} onClick={login}>Log in</button>
          <button className="button" onClick={props.action}>Cancel</button>
        </footer>
      </div>
    </div>
  );
}

export default Login;