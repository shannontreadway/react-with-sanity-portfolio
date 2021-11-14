import React from "react";
import image from "../pexels-dana-tentis-370799.jpg";

const Home = () => {
    return (
        <main>
            <img
                src={image}
                alt=""
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 px-8 lg:pt-64">
                <h1 className="text-6xl text-blue-100 font-bold cursive leading-none home-name lg:leading-snug">
                    Hey, I'm Shannon!
                </h1>
            </section>
        </main>
    );
};

export default Home;
