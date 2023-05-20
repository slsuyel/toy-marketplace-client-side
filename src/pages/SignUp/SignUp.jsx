/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import authentications from '../../assets/authentications-gif.gif'
import GoogleLogin from "../shares/GoogleLogin/GoogleLogin";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
const SignUp = () => {
  useTitle("Sign Up")

  const { createUser, userUpdate, logOut } = useContext(AuthContext)

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = (event.target);
    const name = form.name.value
    const password = form.password.value
    const email = form.email.value
    const pic = form.photoUrl.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
        navigate("/");

        userUpdate(user, {
          displayName: name, photoURL: pic
        }, Swal.fire({
          icon: "success",
          title: "You successfully signed up!!",
          footer:
            '<a href="/login" class="btn btn-outline-dark"> Sign in here</a>',
          showConfirmButton: false,
        })
        )
          .then(() => {
            logOut()
            navigate("/");
          }).catch((error) => {
            setError(error.message);
            console.log(error);
          });

      })

  }
  //  AOS.init
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div data-aos="zoom-in"
      className="container mx-auto row w-100">
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

        <GoogleLogin />
      </div>
    </div>
  );
};

export default SignUp;
