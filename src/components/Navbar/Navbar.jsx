import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar() {

    const navigate = useNavigate();

    function handleLogout()
    {
        localStorage.removeItem("isLogged");
        navigate("/signin");

    }
  return (
    <nav className={" bg-transparent py-6"}>
      <div
        className={`container mx-auto flex flex-row items-center justify-around align-middle `}
      >
        <div>
          <h1 className="font-nav font-bold">car Wash</h1>
        </div>

        <div className={`hidden md:block `}>
          <ul className={`flex flex-col md:flex-row md:gap-4 gap-2`}>
            <li>
              <NavLink className={`font-bold`} to={"/"}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className={`font-bold`} to={"booking"}>
                Booking
              </NavLink>
            </li>

            <li>
              <NavLink className={`font-bold`} to={"cart"}>
                About US
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          {!localStorage.getItem("isLogged") ? (
            <button className={`px-4`}>
              <NavLink to={"signin"}>SIGN IN</NavLink>
            </button>
          ) : (
            <button onClick={handleLogout} className={`px-4`}>Logout</button>
          )}

          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </nav>
  );
}
