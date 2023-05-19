import { useContext } from "react";
import googleLogo from "../../../assets/google-signin-button.png";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import './../../../styles/styles.css'


const GoogleLogin = () => {
  // eslint-disable-next-line no-unused-vars
  const {user, googleSignIn, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
       // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="d-flex flex-column w-100">
      <img
        onClick={handleGoogleLogin}
        src={googleLogo}
        alt=""
        draggable={false}
        className="mx-auto sign-in-icon"
      />
    </div>
  );
};

export default GoogleLogin;
