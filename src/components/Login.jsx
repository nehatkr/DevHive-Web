import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmaiId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch(); //this will dispatch an action
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data)); //here this dispatch action cll the addUser action with the data that we get from the response by hitting the api and add the loggedIn user data to the store
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong!");
    }
  };

  const handleSignUp = async ()=> {
    try {
      const res = await axios.post(BASE_URL + "/signup" , {firstName, lastName, emailId, password}, {withCredentials: true})
   dispatch(addUser(res.data.data));
   return navigate("/profile");
    }catch(err){
setError(err?.response?.data || "Something went wrong!");    }
  }

  return (
    <div className="flex justify-center mt-16">
      <div className="card card-border bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h1 className="card-title justify-center mt-2 font-bold">
            {isLoginForm ? "Login" : "Sign Up"}
          </h1>
          {!isLoginForm && (
            <>
              <div>
                <label className="form-control w-full max-w-xs ">
                  <div className="lable mt-2">
                    <span className="lable-text mt-2">First Name:</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs mt-2"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs ">
                  <div className="lable mt-2">
                    <span className="lable-text mt-2">Last Name:</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs mt-2"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </div>
            </>
          )}
          <div>
            <label className="form-control w-full max-w-xs ">
              <div className="lable mt-2">
                <span className="lable-text mt-2">Email ID:</span>
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs mt-2"
                onChange={(e) => setEmaiId(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs my-4 mt-4">
              <div className="lable mt-2">
                <span className="lable-text">Password:</span>
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs mt-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-4">
            <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignUp}>
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>
          <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User?  Signup Here "
              : "Existing User?  Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
