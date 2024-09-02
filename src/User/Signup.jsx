import "./Userstyle.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div class="bodylgn1">
      <div class="bodylgn">
        <div class="containerlgn">
          <center class="lgn-font">Create Account</center>
          <form>
            <div class="inputlgn">
              <span>
                <label for="username">Username</label>
              </span>
              <span class="icon">
                <PersonIcon />
              </span>
              <br></br>
              <input type="text" id="username"></input>
            </div>
            <div class="inputlgn">
              <span>
                <label for="email">Email</label>
              </span>
              <span class="icon">
                <EmailIcon />
              </span>
              <br></br>
              <input type="email" id="email"></input>
              <br></br>
            </div>
            <div class="inputlgn">
              <span>
                <label for="password">Password</label>
              </span>
              <span class="icon">
                <LockIcon />
              </span>
              <br></br>
              <input type="password" id="password"></input>
              <br></br>
            </div>
            <div class="inputlgn">
              <span>
                <label for="pass">Confirm Password</label>
              </span>
              <span class="icon">
                <LockIcon />
              </span>
              <br></br>
              <input type="password" id="pass"></input>
              <br></br>
            </div>
            <br></br>
            <div class="btnlgn">
              <center>
                <Link to="/">
                  <button>Sign up</button>
                </Link>
              </center>
            </div>
            <div class="sgn-txt1">
              <center>
                <span class="sgn-txt2">Already have an Account? </span>
                <span class="sgn-txt">
                  <Link to="/login" className="font1">
                    Login
                  </Link>
                </span>
              </center>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
