import React from "react";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <section className="bg-hero h-lvh relative text-white ps-[3rem] ">
        <div className="z-3 relative w-[8rem] py-7">
          <img className="w-full" src={logo} alt="Logo" />
        </div>

        <div className="flex justify-center">
          <div className="z-3 relative w-1/2">
            <div className="mb-10 text-center">
              <h1 className="text-[5rem] font-heading">Sign In</h1>
              <p className="text-[1.6rem]">Enter your credentials below.</p>
            </div>
            <form action="" className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem]" htmlFor="name">
                  Email
                </label>
                <input
                  className="py-3 px-2 rounded-md bg-transparent border-[0.1rem] focus:border-[#FF013E] focus:outline-none border-white "
                  placeholder="Enter Your email..."
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[1.2rem]" htmlFor="name">
                  Password
                </label>
                <input
                  className="py-3 px-2 rounded-md bg-transparent border-[0.1rem] focus:border-[#FF013E] focus:outline-none border-white "
                  placeholder="Enter Your password..."
                  type="password"
                  required
                />
              </div>
              <button className="bg-main py-3 rounded-md mt-2">Sign in</button>
            </form>
            <div>
              <p className="mt-3 text-[1.15rem]">
                Don’t have an account?
                <Link to="/signup" className="text-main font-semibold ms-2">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
