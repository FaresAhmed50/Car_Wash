import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLogged");
    navigate("/signin");
  }

  return (
  

    <>
      <nav class=" absolute w-full z-20 top-0 start-0 text-white py-5 max-md:bg-black">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            class="self-center font-semibold whitespace-nowrap"
          >
            Vroon Verse
          </Link>

          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div>
              {!localStorage.getItem("isLogged") ? (
                <button className={`px-4`}>
                  <NavLink to={"signin"}>SIGN IN</NavLink>
                </button>
              ) : (
                <button onClick={handleLogout} className={`px-4`}>
                  Logout
                </button>
              )}

              <button>
                <NavLink to={'/cart'}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </NavLink>
              </button>
            </div>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <NavLink to={"/"} class="block py-2 px-3 text-[1.2rem]" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/booking"}
                  class="block py-2 px-3 text-[1.2rem]"
                >
                  Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/cart"}
                  class="block py-2 px-3 text-[1.2rem]"
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
