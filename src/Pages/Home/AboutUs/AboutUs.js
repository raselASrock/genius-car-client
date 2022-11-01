import React from "react";
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets//images/about_us/parts.jpg';

const AboutUs = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
        <img
          src={person}
          className="rounded-lg shadow-2xl w-4/5 h-full" alt=""
        />
        <img
          src={parts}
          className="rounded-lg shadow-2xl absolute right-5 top-1/2 w-3/5 border-8" alt=""
        />
        </div>
        <div className="w-1/2">
            <h5 className="text-orange-600 font-bold text-xl ">About Us</h5>
          <h1 className="text-5xl font-bold my-5">We are qualified <br /> & of experience <br /> in this field!</h1>
          <p className="py-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <p className="py-2">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn btn-error">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
