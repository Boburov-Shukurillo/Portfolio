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
          <p className="montserrat-light tracking-widest w-full  text-base text-center max-sm:text-sm">
            {` I’m Boburov Shukurillo, a Junior Frontend React Developer
            about crafting dynamic and user-friendly e-commerce websites. Skilled in JavaScript and React.js, I also enjoy building games for fun. Currently,
            I’m advancing in Node.js, Vue.js, and English proficiency, striving to become a senior developer by year-end.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
