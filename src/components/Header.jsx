import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-[#29c221] border-b shadow-sm sticky top-0 z-100">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://www.vhv.rs/dpng/d/433-4339606_green-location-pin-transparent-background-hd-png-download.png"
            alt="logo"
            className="h-9 cursor-pointer hover:"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-bold text-[#2d4745] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-bold text-[#2d4745] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/outdoor-gyms") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/outdoor-gyms")}
            >
              Outdoor Gyms
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-bold text-[#2d4745] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/picnic-spots") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/picnic-spots")}
            >
              Picnic Spots
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-bold text-[#2d4745] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") ||
                (pathMatchRoute("/profile") && "text-black border-b-red-500")
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
