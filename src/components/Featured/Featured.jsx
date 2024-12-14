import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'

import snowflake from "../../assets/images/snowflake.png"
import avatar from "../../assets/images/avatar.png"
import windSun from "../../assets/images/wind-sun.png"
import wind from "../../assets/images/wind.png"


export default function Featured() {
  return (<>

  <section className='bg-black'>
    <div className='container mx-auto py-[5rem] px-3 grid gap-6 grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3' >
      
        <FeatureCard imgSrc={snowflake} title= "Safety Materials" text="Cras aliquam tristique metus, eu gravida diam vestibulum gravida."/>
        <FeatureCard imgSrc={avatar} title= "Contactless Washing" text="Vestibulum tortor risus, rutrum at congue sed ultricies finibus."/>
        <FeatureCard imgSrc={windSun} title= "Modern Equipment" text="Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam."/>
        <FeatureCard imgSrc={wind} title= "Extensive Cleanings" text="Sestibulum non dolor sit amet mi moles tincidunt vel non velit."/>
        

    </div>


  </section>
  
  </>

  )
}
