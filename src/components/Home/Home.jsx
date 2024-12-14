import React from 'react'
import {BiAbacus} from "react-icons/bi";
import Button from "../Button/Button.jsx";
import {Link} from "react-router-dom";
import car from "../../assets/images/Vector.png"



export default function Home() {
  return (
      <>
          <section className={`bg-hero`}>

              <div className={` h-lvh   z-2 relative py-40 w-[90%] mx-auto `}>
                  <p className={` font-heading  text-[5rem]   text-white py-2`}>
                      The shine that <br/>
                      lasts <br/>
                      <span className={`text-[--main-color]`}>
                Forever
            </span>
                  </p>

                  <p className={` text-white py-3 font-heading text-[1.2rem]`}>
                      we are committed to providing your vehicle with the best care it deserves. <br/>
                      Our expert team uses high-quality products and modern techniques to ensure that your car is
                      spotless, inside and out.
                  </p>
                  <Link to={'/booking'}>
                      <Button text={`Book Now`}>

                      </Button>
                  </Link>
              </div>
          </section>

          <section className={`bg-slate-900 text-white py-20 `}>
              <div className={` w-[95%] mx-auto row `}>
                  <div className={`w-6/12 justify-center content-start`}>
                      <p className={`font-content  text-[3rem]`}>
                          Professional Washing <br/>
                          And Cleaning.
                      </p>
                      <p>
                          Whether you’re looking for a quick wash, a full-service detailing, or a specialized treatment, we’ve got you covered. Our services include exterior washing, waxing, interior cleaning, engine cleaning, and more, all designed to keep your vehicle looking brand new. We pride ourselves on offering fast, efficient, and eco-friendly solutions, so you can drive away with a gleaming car every time. Book your appointment today and let us take care of the rest!
                      </p>
                  </div>


                  <div className={`w-6/12  sm:hidden md:hidden lg:block` }>
                      <img src={car} className={`w-[80%]  `}/>
                  </div>

              </div>
          </section>
      </>


  )
}
