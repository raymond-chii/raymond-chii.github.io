"use client"

import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import moment from "moment-timezone";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// Dynamically import Globe component with SSR disabled
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const Contact = () => {
  const [timeZone] = useState('America/New_York');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setCurrentTime(moment().tz(timeZone).format('MMMM Do YYYY, h:mm:ss a'));
  }, [timeZone]);

  return (
    <div className="relative min-h-screen p-4 bg-black text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Boxes />
      </div>
      <TracingBeam>
        <div className="relative z-10 text-center mb-8">
          <div className="h-24 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-medium")}>My Contact Info</h1>
            <p className="text-lg text-gray-400">Feel free to reach out</p>
          </div>
          <div className="contact-info flex justify-center space-x-6 mt-6">
            <a href="https://www.linkedin.com/in/lei-chi/" className="text-blue-500 hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/raymond-chii" className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://open.spotify.com/user/31behayvze3k4vryzl6uxkvynrvq?si=b99156dd880f459c" className="text-green-500 hover:text-green-700">
              <FontAwesomeIcon icon={faSpotify} size="2x" />
            </a>
            <a href="https://www.instagram.com/raycchii/" className="text-pink-500 hover:text-pink-700">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <p className="mt-4 flex items-center justify-center"><FontAwesomeIcon icon={faPhone} className="mr-2" />+1(646)628-4417</p>
          <p className="flex items-center justify-center"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />raymondchi56@gmail.com</p>
        </div>
        
        <div className="relative z-10">
          <div className="timezone-info text-center">
            <p>Current time in New York: {currentTime}</p>
          </div>
        </div>

        <div className="relative z-10 mb-8">
          <div className="globe-container flex justify-center">
            <Globe
              width={600}
              height={600}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              pointsData={[{
                lat: 40.7128,
                lng: -74.0060,
                size: 10,
                color: 'red'
              }]}
              pointAltitude={0.05}
              pointColor={() => 'red'}
              atmosphereColor="rgba(255, 255, 255, 0.5)"
              atmosphereAltitude={0.25}
            />
          </div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default Contact;