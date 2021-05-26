import { toast } from "react-toastify";
import "assets/style/header.css";

function hasKeychain() {
  return (window.steem_keychain) ? true : false;
}

function Header(props) {

  // toggle menu
  function expand(e) {
    e.preventDefault();
  }

  /*
   *  Event triggered by clicking steem button.
   *  Function will check if STEEM keychain extension is installed,
   *  then pop up login form.
   */
  function loginSteem() {
    if (hasKeychain()) {
      props.action();
      props.loginTitle("steem");
    }
    else {
      toast.error("Please install the STEEM Keychain extension first.", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      console.warn("STEEM Keychain not installed");
    }
  }

  function loginNear() {
    console.log("Login Near");
  }

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-brand">
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" href="/#" onClick={expand}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <p className="control">
              <button className="button is-default button-keychain" onClick={loginSteem}>
                STEEM
              </button>
              </p>
          </div>
          <div className="navbar-item">
            <p className="control">
              <button className="button is-default button-keychain" onClick={loginNear}>
                Near
              </button>
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
