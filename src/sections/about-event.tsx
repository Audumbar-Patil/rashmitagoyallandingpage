import React from 'react';
import AboutCard from '../components/about-card';

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
  },
];

export function AboutEvent() {
  return (
    <section id="about" className="container mx-auto flex flex-col items-center px-4 py-10">
      <h6 className="text-center mb-2 text-orange-500 font-semibold">
        About the event
      </h6>
      <h3 className="text-center text-4xl font-bold text-blue-gray-800">
        Why Attend?
      </h3>
      <p className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal text-gray-500 text-lg">
        Welcome to the AI Conference 2023, where the future unfolds! Whether
        you're a seasoned AI professional, a curious newcomer, or a
        business leader looking to harness the power of AI, this conference is
        designed to inspire, educate, and connect.
      </p>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;