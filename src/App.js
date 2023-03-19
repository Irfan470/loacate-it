import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BikeServiceSpots from "./Pages/BikeServiceSpots";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import OutdoorGyms from "./Pages/OutdoorGYms";
import PicnicSpots from "./Pages/PicnicSpots";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SIgnUp from "./Pages/SIgnUp";

function App() {
  return (
    <>
      <Router>
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
    </>
  );
}

export default App;
