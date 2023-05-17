import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import authentications from '../../assets/authentications-gif.gif'
import GoogleGitHubLogin from "../shares/GoogleGitHubLogin/GoogleGitHubLogin";
const SignUp = () => {
  const { createUser } = useContext(AuthContext)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const navigate = useNavigate();
  {/* sweetalert */ }
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = (event.target);
    // const name = form.name.value
    const password = form.password.value
    const email = form.email.value
   // const pic = form.photoUrl.value;
    // const confirmPassword = form.confirmPassword.value
    //    console.log({name,password,email});
    createUser(email, password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
     // form.reset();
        navigate("/");
  
    })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }



  return (
    <div className="container mx-auto row w-100">
      <div className="col-md-6">
        <img
          src={authentications}
          alt=""
          draggable="false"
          className="img-fluid"
        />
      </div>
      <div className="col-md-6 mt-5">
        <h4>Sign up to your account</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="border-0 border-bottom form-control pb-2 rounded-0"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter photo URL"
              name="photoUrl"
              required
              className="border-0 border-bottom form-control pb-2 rounded-0"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter email"
              className="border-0 border-bottom form-control pb-2 rounded-0"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
              className="border-0 border-bottom form-control pb-2 rounded-0"
            />
          </Form.Group>
          <input type="submit" className="btn btn-primary w-100" value="SignUp" />
        </Form>
        <p className="my-2">
          Already have an account?<Link to={"/login"}> Sign in here? </Link>
        </p>

        <GoogleGitHubLogin />
      </div>
    </div>
  );
};

export default SignUp;