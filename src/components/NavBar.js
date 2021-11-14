import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-orange-800 text-4xl font-bold cursive tracking-widest"
                        style={({ isActive }) => ({
                            color: isActive ? "maroon" : "",
                        })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-orange-800"
                        style={({ isActive }) => ({
                            color: isActive ? "maroon" : "",
                            backgroundColor: isActive ? "white" : "",
                        })}
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-orange-800"
                        style={({ isActive }) => ({
                            color: isActive ? "maroon" : "",
                            backgroundColor: isActive ? "white" : "",
                        })}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-orange-800"
                        style={({ isActive }) => ({
                            color: isActive ? "maroon" : "",
                            backgroundColor: isActive ? "white" : "",
                        })}
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.facebook.com/shannon.treadway.7/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://github.com/shannontreadway"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/shannon-treadway/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
