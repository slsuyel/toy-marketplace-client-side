import { useContext } from "react";
import googleLogo from "../../../assets/google-signin-button.png";
import gitHubLogo from "../../../assets/sign-with-git.jpg";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import './../../../styles/styles.css'


const GoogleGitHubLogin = () => {
  // eslint-disable-next-line no-unused-vars
  const {user, googleSignIn, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleGitHubLogin = () => {
    githubLogin()
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
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
      <img
        onClick={handleGitHubLogin}
        src={gitHubLogo}
        alt=""
        draggable={false}
        className="mx-auto sign-in-icon"
      />
    </div>
  );
};

export default GoogleGitHubLogin;
