import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import image from "../pexels-pixabay-268415.jpg";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

const About = () => {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
            )
            .then((data) => {
                setAuthor(data[0]);
            })
            .catch(console.error);
    }, []);

    if (!author) return <div>Loading . . .</div>;

    return (
        <main className="relative">
            <img src={image} alt="" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img
                        src={urlFor(author.authorImage).url()}
                        className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                        alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-300 mb-4">
                            Hey, there! I'm{" "}
                            <span className="text-blue-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent
                                blocks={author.bio}
                                projectId="4w7k1ph6"
                                dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
