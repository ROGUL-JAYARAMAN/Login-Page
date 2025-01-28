import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login-Container">
      <div className="Login-Wrapper_Main">
        {/* Login Container starts */}
        <div>
          {/* Title - Login */}
          <div className="Login-Title">Login</div>

          {/* Input Field starts*/}
          <div className="Login-InputFields">
            {/*Input - Username */}
            <div className="Login-Input">
              <div className="Login-IP-title">Email / Username</div>
              <input type="text" />
            </div>
            {/* Input - Password */}
            <div className="Login-Input">
              <div className="Login-IP-title">Password</div>
              <input type="text" />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="Login-ForgotPassword">
            <div>Forgot Password? </div>
            <div>Reset Password</div>
          </div>

          {/*Login Btn */}
          <div className="Login-btn">
            <button>Login</button>
          </div>

          <div className="Login-orDivider">
            <div className="Login-orContent">or</div>
          </div>

          {/* Sign up */}
          <div className="Login-signUp">
            <div>Don't have an account? </div>
            <Link to={"/Signup"}>Create Account</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
