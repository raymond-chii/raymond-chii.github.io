"use client"

import React, { useState, useEffect, useMemo } from "react";
import dynamic from 'next/dynamic';
import moment from "moment-timezone";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

// Define interfaces for type safety
interface Location {
  lat: number;
  lng: number;
  city: string;
}

interface MarkerData extends Location {
  size: number;
  color: string;
}

interface RingData extends Location {
  maxR: number;
  propagationSpeed: number;
  repeatPeriod: number;
  color: () => string;
}

interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
}

const Contact = () => {
  const [timeZone] = useState('America/New_York');
  const [currentTime, setCurrentTime] = useState('');
  const [globeReady, setGlobeReady] = useState(false);

  // Define NYC coordinates with proper typing
  const NYC_COORDINATES: Location = {
    lat: 40.7128,
    lng: -74.0060,
    city: 'New York City'
  };

  // Create markers data
  const markersData: MarkerData[] = useMemo(() => [{
    ...NYC_COORDINATES,
    size: 0.15,
    color: '#ff4444'
  }], [NYC_COORDINATES]);

  // Create rings data
  const ringsData: RingData[] = useMemo(() => [{
    ...NYC_COORDINATES,
    maxR: 3,
    propagationSpeed: 3,
    repeatPeriod: 1000,
    color: () => `rgba(255, 68, 68, ${Math.random() * 0.5 + 0.1})`
  }], [NYC_COORDINATES]);

  // Create arcs data
  const N = 20;
  const arcsData: ArcData[] = useMemo(() => {
    return Array.from(Array(N).keys()).map(() => ({
      startLat: NYC_COORDINATES.lat,
      startLng: NYC_COORDINATES.lng,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: `rgba(255, 68, 68, ${Math.random() * 0.5})`
    }));
  }, [NYC_COORDINATES]);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(moment().tz(timeZone).format('MMMM Do YYYY, h:mm:ss a'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [timeZone]);

  return (
    <div className="relative min-h-screen p-4 bg-black text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Boxes />
      </div>
      <TracingBeam>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center mb-8"
        >
          <div className="h-24 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-medium")}>My Contact Info</h1>
            <p className="text-lg text-gray-400">Feel free to reach out</p>
          </div>
          
          <div className="contact-info flex justify-center space-x-6 mt-6">
            <SocialButton href="https://www.linkedin.com/in/lei-chi/" icon={faLinkedin} color="blue" />
            <SocialButton href="https://github.com/raymond-chii" icon={faGithub} color="gray" />
            <SocialButton href="https://open.spotify.com/user/31behayvze3k4vryzl6uxkvynrvq" icon={faSpotify} color="green" />
            <SocialButton href="https://www.instagram.com/raycchii/" icon={faInstagram} color="pink" />
          </div>

          <div className="mt-6 space-y-2">
            <ContactInfo icon={faPhone} text="+1(646)628-4417" />
            <ContactInfo icon={faEnvelope} text="raymondchi56@gmail.com" />
            <ContactInfo icon={faLocationDot} text="New York City, NY" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative z-10"
        >
          <div className="timezone-info text-center mb-4">
            <div className="inline-block bg-gray-800/50 rounded-full px-6 py-2">
              <p className="text-lg">Current time in New York: {currentTime}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative z-10 mb-8"
        >
          <div className="globe-container w-full flex justify-center">
            <div className="relative w-full max-w-3xl aspect-square rounded-3xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <Globe
                width={800}
                height={800}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                pointsData={markersData}
                pointColor="color"
                pointAltitude={0}
                pointRadius="size"
                pointLabel={(d: MarkerData) => d.city}
                ringsData={ringsData}
                ringColor="color"
                ringMaxRadius="maxR"
                ringPropagationSpeed="propagationSpeed"
                ringRepeatPeriod="repeatPeriod"
                arcsData={arcsData}
                arcColor="color"
                arcDashLength={0.4}
                arcDashGap={0.2}
                arcDashAnimateTime={1500}
                atmosphereColor="rgba(255,255,255,0.5)"
                atmosphereAltitude={0.25}
                onGlobeReady={() => setGlobeReady(true)}
                autoRotate={true}
                autoRotateSpeed={0.5}
              />
            </div>
          </div>
        </motion.div>
      </TracingBeam>
    </div>
  );
};

interface SocialButtonProps {
  href: string;
  icon: any;
  color: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className={`text-${color}-500 hover:text-${color}-700 transition-colors`}
  >
    <FontAwesomeIcon icon={icon} size="2x" />
  </motion.a>
);

interface ContactInfoProps {
  icon: any;
  text: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text }) => (
  <motion.p 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center justify-center space-x-2"
  >
    <FontAwesomeIcon icon={icon} className="text-blue-400" />
    <span>{text}</span>
  </motion.p>
);

export default Contact;