import React, { useEffect, useState } from "react";
import telegram from "../assets/telegram.png";
import hamburgerBtn from "../assets/menu.svg";
import "aos/dist/aos.css";
import close from "../assets/close.png";
import { Link } from "react-router-dom";
const Header = () => {
    const [menu, setMenu] = useState("-left-full");

    return (
        <header className="demo">
            <div
                className={`py-3 fixed
        montserrat-medium w-full bg-[#0e0f15e7] top-0 border-b-2 backdrop-blur-xl z-50`}
            >
                <div className="containerb flex items-center justify-between h-14">
                    <Link to="/" className="flex items-center justify-between w-1/2">
                        <h1 className="text-2xl text-white w-full leading-5 furore">
                            Boburov.Dev
                        </h1>
                    </Link>
                    <div className="w-full flex items-center justify-end gap-x-20 max-md:justify-end max-md:mr-5">
                        <nav className="w-1/4 max-sm:hidden">
                            <ul className="flex items-center justify-end gap-x-10">
                                <li>
                                    <a
                                        className="cursor-pointer text-white font-medium"
                                        href="#home"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="cursor-pointer text-white font-medium"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="cursor-pointer text-white font-medium"
                                        href="#projects"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="cursor-pointer text-white font-medium"
                                        href="#contact"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <img
                        src={hamburgerBtn}
                        onClick={() => setMenu("left-0")}
                        className="transition-all hidden max-sm:block w-32 h-12"
                        alt="menu buton"
                    />
                </div>
            </div>
            <div
                className={`fixed z-50 w-full h-full bg-white transition-all  items-center justify-center ${menu}`}
            >
                <nav className="w-full px-10 myFont relative ">
                    <img
                        src={close}
                        className="w-5 absolute right-6 top-8 cursor-pointer"
                        onClick={() => setMenu("-left-full")}
                        alt="close"
                    />
                    <ul className="max-w-[500px] flex flex-col items-start justify-end gap-x-10 text-black font-bold gap-y-10 text-lg py-20">
                        <li
                            onClick={() => setMenu("-left-full")}
                            className="cursor-pointer"
                        >
                            <a href="#home">Home</a>
                        </li>
                        <li
                            onClick={() => setMenu("-left-full")}
                            className="cursor-pointer"
                        >
                            <a href="#about">About</a>
                        </li>
                        <li
                            onClick={() => setMenu("-left-full")}
                            className="cursor-pointer"
                        >
                            <a href="#projects">Projects</a>
                        </li>
                        <li
                            onClick={() => setMenu("-left-full")}
                            className="cursor-pointer"
                        >
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
