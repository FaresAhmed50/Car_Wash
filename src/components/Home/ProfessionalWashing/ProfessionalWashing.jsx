import React from "react";
import registerImage from "../../../assets/images/register.webp";
export default function ProfessionalWashing() {
  return (
    <section className="bg-black text-white  py-[5rem]">
      <div className="container mx-auto flex justify-between items-center gap-16 max-lg:flex-col px-3">
        <div className="w-1/2 max-lg:w-full max-lg:order-2">
          <h2 className="text-[3rem] font-[900] w-[90%] mb-5 max-lg:text-[2.5rem]">
            Professional Washing And Cleaning.
          </h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>

          <p className="mb-9">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-main py-2  rounded-md w-[12rem]">
              +91-0000-000000
            </button>
            <button className="py-2  w-[12rem] rounded-md border ">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-[90%] max-lg:order-1">
          <img className="" src={registerImage} alt="Car wash" />
        </div>
      </div>
    </section>
  );
}
