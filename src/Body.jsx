import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet />        {/* any children routes of body will render over here */}
      <Footer />
    </div>
  );
};

export default Body;
