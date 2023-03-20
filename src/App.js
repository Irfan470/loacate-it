import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./components/Header";
import BikeServiceSpots from "./Pages/BikeServiceSpots";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import OutdoorGyms from "./Pages/OutdoorGYms";
import PicnicSpots from "./Pages/PicnicSpots";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SIgnUp from "./Pages/SIgnUp";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/outdoor-gyms" element={<OutdoorGyms />} />
          <Route path="/sign-up" element={<SIgnUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/bike-service-spots" element={<BikeServiceSpots />} />
          <Route path="/picnic-spots" element={<PicnicSpots />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
