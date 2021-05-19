import React from "react";

function hasKeychain() {
  return (window.steem_keychain) ? true : false;
}

class Header extends React.Component {

  loginSteem() {
    const steemKeychain = hasKeychain();
    console.log(steemKeychain);
    console.log("Login Steem");
  }

  loginNear() {
    console.log("Login Near");
  }

  render() {
    return (
      <nav className="navbar" role="navigation">
        <div className="navbar-brand">
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="#">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <p className="control">
                <button className="button is-default button-keychain" onClick={this.loginSteem}>
                  STEEM
                </button>
                </p>
            </div>
            <div className="navbar-item">
              <p className="control">
                <button className="button is-default button-keychain" onClick={this.loginNear}>
                  Near
                </button>
              </p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
