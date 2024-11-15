import React, { useEffect } from "react";
import { games, projects } from "../data";
import gitIcon from "../assets/github.png";
import netlifyIcon from "../assets/netlify_logo_icon.png";
import Aos, { AOS } from "aos";
import "aos/dist/aos.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import boostrap from "../assets/bootstrap.png";
import javascript from "../assets/js.png";
import react from "../assets/react.png";
import left from "../assets/leaft.png";
import nodejs from "../assets/nodejs.webp";
import photo from "../assets/photo.png";
import Contact from "./Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import About from "./About";

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: "1000" });
    }, []);
    return (
        <div className="bg-darkenBlue">
            <div
                className={`py-20 pt-60 bg-contain bg-center max-1700:bg-cover max-md:py-24 max-md:pt-32`}
                id="home"
                data-aos="fade-in"
            >
                <div className="containerb flex items-center justify-between max-sm:flex-col">
                    <div className="w-full max-md:w-4/5 max-sm:text-center flex flex-col gap-y-7 max-sm:items-center max-sm:gap-y-3">
                        <h1 className="text-6xl font-bold ZingDemo text-white max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                            Front-End React
                            Developer 👋
                        </h1>
                        <p className="text-xl text-whiteGray mb-5  montserrat-light   w-2/3 max-md:w-4/5 max-mini_screen:w-full max-md:text-base monstera">
                            Hi, I'm Boburov Shukurillo. A passionate Frontend React Developer
                            based in Chinabod , Uzbekistan📍
                        </p>
                        <div className="w-full flex items-center justify-start gap-x-5 max-sm:flex-col max-md:gap-0">
                            <span className="text-xl tracking-widest text-white furore">
                                Teach Stack
                            </span>
                            <span className="inline-block w-0.5 h-10 max-md:h-24 max-md:mr-5 bg-whiteGray max-sm:w-full max-sm:my-5 max-sm:h-0.5"></span>
                            <div className="w-1/2  flex justify-start gap-5 max-sm:gap-x-1 max-sm:justify-center max-lg:flex-wrap max-lg:gap-0 max-md:gap-5 max-md:w-full">
                                <img
                                    src={html}
                                    alt="html png"
                                    className="w-12 h-10 object-contain"
                                />
                                <img
                                    src={css}
                                    alt="html png"
                                    className="w-12 h-10 object-contain"
                                />
                                <img
                                    src={javascript}
                                    alt="html png"
                                    className="w-12 h-10 object-contain"
                                />
                                <img
                                    src={react}
                                    alt="html png"
                                    className="w-12 h-10 object-contain"
                                />
                                <img
                                    src={tailwind}
                                    alt="html png"
                                    className="w-12 h-10 object-contain"
                                />
                                <img
                                    src={boostrap}
                                    alt="html png"
                                    className="w-12 h-10 object-contain"
                                />
                                <img
                                    src={nodejs}
                                    alt="html png"
                                    className="w-12 h-10 object-contain"
                                />
                                <img
                                    src={left}
                                    alt="html png"
                                    className="w-12 h-10 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <img
                        src={photo}
                        alt="portfolio"
                        className="w-96 h-96 rounded-full object-cover max-sm:w-1/2 block max-sm:hidden"
                    />
                </div>
            </div>

            <About />

            <div id="projects" className="mb-20">
                <div className="containerb">
                    <h1 className="text-2xl montserrat-light text-skyBlue tracking-widest mb-2 max-md:text-xl">
                        Projects
                    </h1>
                    <p className="text-4xl myFont text-white mb-10 max-md:text-2xl ZingDemo">
                        Each project is a unique piece of development 🧩
                    </p>

                    <ul className="flex flex-col items-center gap-y-24">
                        {projects.map((project, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <li
                                        key={project.id}
                                        className="flex items-start justify-between gap-x-10 h-96 max-md:flex-col max-md:items-center max-md:h-500px max-lg:items-center"
                                    >
                                        <img
                                            src={project.img}
                                            alt={project.projectName + " png"}
                                            className="rounded-xl w-733 object-cover object-right h-full max-xl:w-2/3 max-md:w-full max-md:mb-5 max-lg:h-72 max-lg:w-500"
                                        />

                                        <div className="w-1/2 flex flex-col items-center justify-center h-full max-md:w-full">
                                            <h2 className="text-3xl myFont text-white tracking-widest ZingDemo mb-5 max-xl:text-xl">
                                                {project.projectName}
                                            </h2>
                                            <p className="text-md montserrat-light tracking-wider font-semibold text-slate-400 mb-7 text-center max-xl:text-sm max-md:text-xl max-xl:w-full">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-5 mb-5">
                                                {project.usingLanguage.map((pl, index) => {
                                                    return (
                                                        <h3
                                                            key={index}
                                                            className="montserrat-light text-xl text-white tracking-widest max-xl:text-base"
                                                        >
                                                            #{pl}
                                                        </h3>
                                                    );
                                                })}
                                            </div>

                                            <div className="w-full flex items-center justify-center gap-x-5 max-sm:gap-x-2">
                                                <a
                                                    href={project.gitHb}
                                                    className="text-white montserrat-light flex items-center justify-evenly px-5 h-12 border-2 rounded-xl w-40 text-base myFont backdrop-blur-lg bg-white/20 stroke-black max-xl:w-20  max-xl:text-sm max-xl:gap-x-0 max-md:w-full max-mini_screen:text-sm"
                                                    target="_blank"
                                                >
                                                    Code
                                                    <img src={gitIcon} alt="git icon" className="h-2/3" />
                                                </a>

                                                <a
                                                    href={project.netlify}
                                                    className="text-white montserrat-light flex items-center justify-evenly px-5 h-12 border-2 rounded-xl w-40 text-base myFont backdrop-blur-lg bg-white/20 stroke-black max-xl:w-20  max-xl:text-sm max-xl:gap-x-0 max-md:w-full max-mini_screen:text-sm"
                                                    target="_blank"
                                                >
                                                    Live Demo
                                                    <img
                                                        src={netlifyIcon}
                                                        className="w-7"
                                                        alt="open demo"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        key={project.id}
                                        className="flex items-start justify-between gap-x-10 h-96 max-md:flex-col max-md:items-center max-md:h-500px"
                                    >
                                        <img
                                            src={project.img}
                                            alt={project.projectName + " png"}
                                            className="hidden max-md:block rounded-xl w-733 h-96 object-cover object-right max-xl:w-2/3 max-md:w-full max-md:mb-5 max-lg:h-72 max-lg:w-500"
                                        />
                                        <div className="w-1/2 flex flex-col items-center justify-center h-full max-md:w-full">
                                            <h2 className="text-3xl ZingDemo text-white tracking-widest mb-5 max-xl:text-xl">
                                                {project.projectName}
                                            </h2>
                                            <p className="text-md montserrat-light font-semibold text-slate-400 mb-7 text-center max-xl:text-sm max-md:text-xl max-xl:w-full">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-5 mb-5">
                                                {project.usingLanguage.map((pl, index) => {
                                                    return (
                                                        <h3
                                                            key={index}
                                                            className="myFont text-xl text-white max-xl:text-base montserrat-light tracking-wider"
                                                        >
                                                            #{pl}
                                                        </h3>
                                                    );
                                                })}
                                            </div>

                                            <div className="w-full flex items-center justify-center gap-x-5 max-sm:gap-x-2">
                                                <a
                                                    target="_blank"
                                                    href={project.gitHb}
                                                    className="text-white montserrat-light flex items-center justify-evenly gap-x-0 px-5 h-12 border-2 rounded-xl w-40 text-base myFont backdrop-blur-lg bg-white/20 stroke-black max-xl:w-20  max-xl:text-sm max-xl:gap-x-0 max-md:w-full max-mini_screen:text-sm"
                                                >
                                                    Code
                                                    <img src={gitIcon} alt="git icon" className="h-1/2" />
                                                </a>

                                                <a
                                                    target="_blank"
                                                    href={project.netlify}
                                                    className="text-white montserrat-light flex items-center justify-evenly gap-x-0 px-5 h-12 border-2 rounded-xl w-40 text-base myFont backdrop-blur-lg bg-white/20 stroke-black max-xl:w-20  max-xl:text-sm max-xl:gap-x-0 max-md:w-full max-mini_screen:text-sm"
                                                >
                                                    Live Demo
                                                    <img
                                                        src={netlifyIcon}
                                                        className="w-7"
                                                        alt="open demo"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <img
                                            src={project.img}
                                            alt={project.projectName + " png"}
                                            className=" max-md:hidden rounded-xl w-733 h-96 object-cover object-right max-xl:w-2/3 max-md:w-full max-md:mb-5"
                                        />
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>

            <div className="py-10 max-md:hidden">
                <div className="containerb">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        modules={[Pagination, Navigation]}
                        pagination
                        navigation
                        className="gamesSwiper"
                    >
                        <ul>
                            {games.map((game) => {
                                return (
                                    <li key={game.id}>
                                        <SwiperSlide
                                            key={game.id}
                                            className="rounded-xl overflow-hidden p-4 border-2 text-white border-white flex flex-col justify-between items-center text-center bg-white/20   transition-all"
                                        >
                                            <img
                                                src={game.img}
                                                className="w-full h-1/2 object-cover rounded-lg"
                                                alt={game.projectName + " "}
                                            />
                                            <h3 className="text-2xl font-bold">{game.projectName}</h3>
                                            <p className="font-semibold">{game.description}</p>
                                            <div className="flex justify-between w-full gap-x-7">
                                                <a
                                                    target="_blank"
                                                    href={game.gitHb}
                                                    className="w-full py-3 border-2 rounded-xl bg-slate-900 text-white flex items-center justify-center gap-x-2"
                                                >
                                                    <img
                                                        src={gitIcon}
                                                        className="rounded-full w-7"
                                                        alt="github icon"
                                                    />
                                                    Git Hub
                                                </a>
                                                <a
                                                    target="_blank"
                                                    href={game.netlify}
                                                    className="w-full py-3 border-2 rounded-xl bg-cyan-900 text-white flex items-center justify-center"
                                                >
                                                    <img
                                                        src={netlifyIcon}
                                                        className="w-10"
                                                        alt="netlify icon"
                                                    />
                                                    Netlify
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                    </li>
                                );
                            })}
                        </ul>
                    </Swiper>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Home;
