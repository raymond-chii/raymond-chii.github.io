"use client"

import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Boxes } from "@/components/ui/background-boxes";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cn } from "@/lib/utils";



const Projects = () => {
    console.log("Projects")
    return (
      <div className="relative min-h-screen p-4 bg-black text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Boxes />
        </div>
        <TracingBeam>
        <div className="relative z-10 text-center mb-8">
          <div className="h-24 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-medium")}>My Projects</h1>
            <p className="text-lg text-gray-400">Raymond (Lei) Chi</p>
          </div>
        </div>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={myProjects} />
          </div>
        </TracingBeam>
    </div>
    );
  };

export const myProjects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
export default Projects;