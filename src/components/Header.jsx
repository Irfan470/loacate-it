import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
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
            src="https://t4.ftcdn.net/jpg/01/92/96/93/360_F_192969327_l5WdNvwU5myPhZ08wsbEWNLXpyVXSIi4.jpg"
            alt="logo"
            className="h-9 cursor-pointer hover:"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-bold text-[#2d4745] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-orange-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-bold text-[#2d4745] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/outdoor-gyms") &&
                "text-black border-b-orange-500"
              }`}
              onClick={() => navigate("/outdoor-gyms")}
            >
              Outdoor Gyms
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-bold text-[#2d4745] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/bike-service-spots") &&
                "text-black border-b-orange-500"
              }`}
              onClick={() => navigate("/bike-service-spots")}
            >
              Bike Service
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-bold text-[#2d4745] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/picnic-spots") &&
                "text-black border-b-orange-500"
              }`}
              onClick={() => navigate("/picnic-spots")}
            >
              Picnic Spots
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-bold text-[#2d4745] border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-black border-b-orange-500"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
