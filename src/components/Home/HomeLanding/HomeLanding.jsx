import React from "react";
import Button from "../../Button/Button";


export default function HomeLanding() {
  return (
    <>
      <header className="overflow-hidden bg-hero min-h-lvh">
        <div className="container mx-auto text-white mt-20 relative z-2">
          <div className="w-1/2">
            <h1 className="text-[5rem] font-heading leading-none mb-8 font-semibold">
              The shine that lasts
              <p className="text-main">Forever.</p>
            </h1>
            <p className="mb-10 text-[1.1rem] w-[80%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button className="bg-main py-4 w-[18rem] rounded-lg">BOOK NOW</button>
          </div>
        </div>
      </header>
    </>
  );
}
