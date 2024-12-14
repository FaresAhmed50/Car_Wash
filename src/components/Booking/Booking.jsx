import React, { useState } from "react";
import BookingCard from "../BookingCards/BookingCard.jsx";


export default function Booking() {
  const plans = [
    {
      price: "39",
      billingCycle: "month",
      title: "Exterior Wash",
      features: [
        { text: "Basic exterior cleaning", active: true },
        { text: "Tire shine application", active: false },
        { text: "Window cleaning (inside & outside)", active: false },
        { text: "Deep interior vacuuming", active: false },
        { text: "Dashboard wipe & detailing", active: false },
        { text: "Carpet shampooing", active: false },
        { text: "Factory finish guarantee", active: false },
      ],
      highlightColor: "text-yellow-400",
      buttonHoverBgColor: "hover:bg-yellow-400",
    },
    {
      price: "55",
      billingCycle: "month",
      title: "Complete Wash",
      features: [
        { text: "Basic exterior cleaning", active: true },
        { text: "Tire shine application", active: true },
        { text: "Window cleaning (inside & outside)", active: true },
        { text: "Deep interior vacuuming", active: false },
        { text: "Dashboard wipe & detailing", active: false },
        { text: "Carpet shampooing", active: false },
        { text: "Factory finish guarantee", active: false },
      ],
      highlightColor: "text-blue-400",
      buttonHoverBgColor: "hover:bg-blue-400",
    },
    {
      price: "99",
      billingCycle: "month",
      title: "Full Detailing",
      features: [
        { text: "Basic exterior cleaning", active: true },

        { text: "Tire shine application", active: true },
        { text: "Window cleaning (inside & outside)", active: true },
        { text: "Deep interior vacuuming", active: true },
        { text: "Dashboard wipe & detailing", active: true },
        { text: "Carpet shampooing", active: false },
        { text: "Factory finish guarantee", active: false },
      ],
      highlightColor: "text-green-400",
      buttonHoverBgColor: "hover:bg-green-400",
    },
    {
      price: "130",
      billingCycle: "month",
      title: "Factory Reset",
      features: [
        { text: "Basic exterior cleaning", active: true },
        { text: "Tire shine application", active: true },
        { text: "Window cleaning (inside & outside)", active: true },
        { text: "Deep interior vacuuming", active: true },
        { text: "Dashboard wipe & detailing", active: true },
        { text: "Carpet shampooing", active: true },
        { text: "Factory finish guarantee", active: true },
      ],
      highlightColor: "text-green-500",
      buttonHoverBgColor: "hover:bg-green-500",
    },
  ];
  

  // adding to cart logic

  const dummyUser = { id: "12345", name: "Test User",email:"examole@gmail.com", cart:[] };
  // using dummy user till the user logic done 
  const user = JSON.parse(localStorage.getItem("user")) || dummyUser;
  const cartKey=`cart_${user.id}`
  //====
  // helper functions to be moved 

  const loadCart = () => JSON.parse(localStorage.getItem(cartKey)) || [];
  const saveCart = (cart) => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  };
  const clearCart = () => {
    localStorage.removeItem(cartKey);
  };
    

  //============
  const [cart , setCart]=useState(loadCart());


  const handleSelect = (plan) => {
    const currentCart = loadCart();
    const updatedCart=[...currentCart];
    const existingPlanIndex=updatedCart.findIndex((item)=>item.title===plan.title);
    if(existingPlanIndex!==-1){
      updatedCart[existingPlanIndex].quantity+=1;

    }
    else{
      updatedCart.push({...plan,quantity:1})
    }
    setCart(updatedCart)
    saveCart(updatedCart);
    console.log("cart updated",updatedCart);
    
  };

  return (
   <section className="pt-12">
     <div className="flex flex-wrap items-center justify-center gap-6  bg-black py-8">
      {plans.map((plan, index) => (
        <BookingCard
          key={index}
          price={plan.price}
          billingCycle={plan.billingCycle}
          title={plan.title}
          features={plan.features}
          highlightColor={plan.highlightColor}
          buttonHoverBgColor={plan.buttonHoverBgColor}
          onSelect={() => handleSelect(plan)}
        />
      ))}
    </div>
   </section>
  );
}
