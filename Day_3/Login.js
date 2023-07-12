import "../Flight/Login.css";

function Login() {
  return (
    <form className="login__form" method="POST" name="frm_login" action="#">
    <header className="login__header">
       <h1 className="login__title">Login</h1>
    </header>
    <main className="login__main">
       <div className="login__group">
          <input className="login__input" type="text" name="input_email" required/>
          <label className="login__label">Email </label>
          <div className="login__bar"></div>
       </div>
       <div className="login__group">
          <input className="login__input" type="password" name="input_password" required/>
          <label className="login__label">Password </label>
          <div className="login__bar"></div>
       </div>
       <p className="login__terms">Create an Account ?<a href="#">SIGN UP</a></p>
    </main>
    <footer className="login__footer">
      <input className="login__button" type="button" name="btn_signin" value="Login"/>
    </footer>
 </form>
  );
}

export default Login;