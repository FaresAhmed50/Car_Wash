import React from "react";
import dryCleaning from "../../../assets/images/dryCleaning.jpg";
export default function DryCleaning() {
  return (
    <>
      <section className="py-[5rem] text-white">
        <div className="container mx-auto flex justify-between items-center gap-16 max-lg:flex-col px-3">
          <div className="w-1/2 max-lg:w-full max-lg:order-2">
            <h2 className="text-[3rem] font-[900] w-[90%] mb-5 max-lg:text-[2.5rem]">
              Dry Cleaning Any Dirt Inside The Car.
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>

            <p className="mb-9">
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>

            <button className="py-3  w-[12rem] rounded-md border ">
              View More
            </button>
          </div>
          <div className="w-1/2 max-lg:w-full max-lg:order-1">
            <img className="rounded-xl" src={dryCleaning} alt="Car wash" />
          </div>
        </div>
      </section>
    </>
  );
}
