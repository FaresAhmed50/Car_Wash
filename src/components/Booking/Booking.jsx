import React from "react";
import BookingCard from "../BookingCards/BookingCard.jsx";


export default function Booking() {
  const plans = [
    {
      price: "39",
      billingCycle: "month",
      title: "Basic License",
      features: [
        { text: "Secure your customer usage", active: true },
        { text: "View basic analytics", active: false },

        { text: "Up to 350 customer profiles", active: false },
        { text: "Custom network name", active: true },
      ],
      highlightColor: "text-yellow-400",
      buttonHoverBgColor: "hover:bg-yellow-400",
    },
    {
      price: "55",
      billingCycle: "month",
      title: "Social License",
      features: [
        { text: "Secure your customer usage", active: true },
        { text: "Up to 350 customer profiles", active: true },
        { text: "View basic analytics", active: true },
        { text: "Custom network name", active: false },
      ],
      highlightColor: "text-blue-400",
      buttonHoverBgColor: "hover:bg-blue-400",
    },
    {
      price: "99",
      billingCycle: "month",
      title: "Marketing License",
      features: [
        { text: "Secure your customer usage", active: true },
        { text: "Up to 350 customer profiles", active: false },
        { text: "View basic analytics", active: true },
        { text: "Custom network name", active: true },
      ],
      highlightColor: "text-green-400",
      buttonHoverBgColor: "hover:bg-green-400",
    },
    {
      price: "130",
      billingCycle: "month",
      title: "Marketing License",
      features: [
        { text: "Secure your customer usage", active: true },
        { text: "Up to 350 customer profiles", active: true },
        { text: "View basic analytics", active: true },
        { text: "Custom network name", active: true },
      ],
      highlightColor: "text-green-400",
      buttonHoverBgColor: "hover:bg-green-400",
    },
    
  ];

  const handleSelect = (planTitle) => {
    alert(`Plan Selected: ${planTitle}`);
  };

  return (
    <section className="flex flex-wrap items-center justify-center gap-6 bg-black py-8">
      {plans.map((plan, index) => (
        <BookingCard
          key={index}
          price={plan.price}
          billingCycle={plan.billingCycle}
          title={plan.title}
          features={plan.features}
          highlightColor={plan.highlightColor}
          buttonHoverBgColor={plan.buttonHoverBgColor}
          onSelect={() => handleSelect(plan.title)}
        />
      ))}
    </section>
  );
}
