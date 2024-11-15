import React from "react";
import second from "../assets/aboutMe.webp";
const About = () => {
  return (
    <div
      id="about"
      className="text-white containerb flex flex-col justify-between items-center"
    >
      <h1 className="montserrat-medium text-4xl tracking-widest self-start mb-10 max-md:self-center max-md:mb-2">
        About me
      </h1>
      <div className="flex mb-20 gap-x-20 items-center justify-center">
        <div className="w-full py-1 max-md:hidden">
          <img src={second} className="rounded-2xl w-full" alt="" />
        </div>
        <div className="w-full py-10 flex items-center justify-start flex-col max-md:w-2/3 max-sm:w-full max-md:py-0">
          <p className="montserrat-light tracking-widest w-full  text-xl text-center mb-5 max-sm:text-sm">
            Hi I'm Frontend React Developer,
          </p>
          <p className="montserrat-light tracking-widest w-full text-xl  text-center mb-10 max-sm:text-sm">
            My name is Boburov Shukurillo, I'm Junior Young Developer I am
            Ecommers Sites{" "}
          </p>
          <p className="montserrat-light tracking-widest w-full text-xl  text-center max-sm:text-sm">
            My freeTime I like create game in Javascroipt and React beacuse I
            like thi programming Language
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
