"use client"

import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Boxes } from "@/components/ui/background-boxes";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cn } from "@/lib/utils";
import { myProjects } from "./data";

const Projects = () => {
    console.log("Projects");

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
          <div className="relative z-10 max-w-5xl mx-auto px-8 pb-20">
            <HoverEffect items={myProjects} />
          </div>
        </TracingBeam>
      </div>
    );
};


export default Projects;