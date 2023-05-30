import React from "react";


function Login() {
  function loginPlayer(e) {
    e.preventDefault();
    const isLoggedIn = true;
    console.log("Ich habe mich eingeloggt", {isLoggedIn});
  }

  function registerNewPlayer(e) {
    e.preventDefault();
    console.log("Ich habe mich registriert");
  }

  return (
    <>
      <div className="main">
        <h1>Login / Registration</h1>
        <div className="formular">
          <div className="register">
            <h2>Registrierung</h2>
            <form>
              <div className="labelAndInput">
                <label>Username</label>
                <input type="text" placeholder="Username" />
              </div>
              <div className="labelAndInput">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="labelAndInput">
                <label>Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <button
                className="mainButton registerButton"
                onClick={registerNewPlayer}
              >
                Registrieren
              </button>
            </form>
          </div>
          <div className="login">
            <h2>Login</h2>
            <form>
              <div className="labelAndInput">
                <label>Username</label>
                <input type="text" placeholder="Username" />
              </div>
              <div className="labelAndInput">
                <label>Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <button className="mainButton loginButton" onClick={loginPlayer}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;