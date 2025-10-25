import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmaiId] = useState("neha@gmail.com");
  const [password, setPassword] = useState("Neha@123");
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
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center mt-16">
      <div className="card card-border bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h1 className="card-title justify-center mt-2 font-bold">Login</h1>
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
          <div className="card-actions justify-center m-4">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
