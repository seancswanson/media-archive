"use client";

import './header.scss';
import { useState } from "react";
import HomepageRouterLink from "../homepage-router-link/homepage-router-link";
import Image from "next/image";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const isLoggedIn = () => false;

    return (

        <header className="pt-1">
            <div className="relative min-h-42 mb-2">
                <Image
                    src="/dithered-dorfic-clouds.png"
                    alt="Background image"
                    fill={true}
                    sizes="100vw"
                    style={{ objectFit: 'cover', imageRendering: 'pixelated' }}
                    className="antialiased big-tr-bl-bevel"
                />
            </div>
            <div className="flex flex-col justify-between border-white border small-tr-bevel title-bar-container">
                <div className="flex  border-white justify-between items-start">
                    <h1 className="text-6xl font-bold mild-text-shadow pl-1">Media Archive</h1>
                    <div className="flex gap-2 items-center small-bl-bevel user-container basis-16 hover:basis-48 hover:pl-6 min-h-[25px]">
                        <div className="h-5 w-5 bg-white rounded-full user-info-container"></div>
                        <div className="username" >{isLoggedIn ? "Username1337" : "Login"}</div>
                    </div>

                </div>
                <div className="flex border-white justify-between">
                    <h2 className="text-3xl mild-text-shadow tracking-[.22rem] pl-1">games.television.film</h2>
                    <div className="flex gap-5 items-center">
                        <button
                            onClick={toggleNav}
                            className={`text-3xl font-bold cursor-pointer hover:opacity-80 transition-opacity hamburger ${isNavOpen ? "hamburger-active" : ""}`}
                            aria-label={isNavOpen ? "Close navigation" : "Open navigation"}
                            type="button"
                        >
                            {isNavOpen ? "×" : "="}
                        </button>
                    </div>

                </div>
            </div>

            <nav className={`${isNavOpen ? "nav-container-expanded" : ""} nav-container`}>
                <div className="flex-1 bottom-left-bevel router-link-container">
                    <HomepageRouterLink text="Your Collections" hint="Create, browse, & organize your media" path="/collections/" />
                    <HomepageRouterLink text="Import Tools" hint="Bring a collection from elsewhere" path="/import" />
                    <HomepageRouterLink text="Export Tools" hint="Take your collections to-go" path="/export/" />
                </div>
                <div className="flex place-self-center flex-1 items-center border-white px-2">
                    <a href="/" className="text-xl border px-2 rounded-4xl hover:bg-white hover:text-[#ff7f00] transition text-shadow-gray-950 tracking-wide">Log In</a>
                </div>
            </nav>
        </header >

    );
}

