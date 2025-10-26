import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user); //take userData from the user store

  // we want keep user logged in even after page get referaced
  const fetchUser = async () => {

    //if userData is their then return. not  make the api call to profile api again and again
    if (userData) return;

    try {
      const res = await axios(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.log(err);
    }
  };

  // called once when page get loaded if we write with an empty array
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet /> {/* any children routes of body will render over here */}
      <Footer />
    </div>
  );
};

export default Body;
