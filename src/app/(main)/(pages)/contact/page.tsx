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

const Contact = () => {
  const [timeZone] = useState('America/New_York');
  const [currentTime, setCurrentTime] = useState('');
  const [globeReady, setGlobeReady] = useState(false);
  const [coordinates] = useState({
    latitude: 40.7128,
    longitude: -74.0060
  });

  const NYC_COORDINATES = {
    lat: 40.7128,
    lng: -74.0060,
    city: 'New York City'
  };

  // Create markers data
  const markersData = useMemo(() => [{
    ...NYC_COORDINATES,
    size: 0.15,
    color: '#ff4444'
  }], []);

  // Create rings data for pulsing effect
  const ringsData = useMemo(() => [{
    ...NYC_COORDINATES,
    maxR: 3,
    propagationSpeed: 3,
    repeatPeriod: 1000,
    color: () => `rgba(255, 68, 68, ${Math.random() * 0.5 + 0.1})` // Dynamic opacity
  }], []);

  // Create arcs data if you want to show connections
  const arcsData = useMemo(() => [{
    startLat: NYC_COORDINATES.lat,
    startLng: NYC_COORDINATES.lng,
    endLat: NYC_COORDINATES.lat,
    endLng: NYC_COORDINATES.lng,
    color: 'rgba(255,68,68,0.3)'
  }], []);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(moment().tz(timeZone).format('MMMM Do YYYY, h:mm:ss a'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [timeZone]);

  // Globe configuration and animation settings
  const globeConfig = {
    pointsData: [{
      lat: coordinates.latitude,
      lng: coordinates.longitude,
      size: 0.1,
      color: '#FF4444',
      label: 'New York City'
    }],
    ringsData: [{
      lat: coordinates.latitude,
      lng: coordinates.longitude,
      maxR: 2,
      propagationSpeed: 2,
      repeatPeriod: 1000,
      color: 'rgba(255,68,68,0.5)'
    }],
    globalConfig: {
      pointRadius: 0.5,
      pointColor: '#FF4444',
      pointAltitude: 0.1,
      ringsAltitude: 0.05,
      ringColor: () => 'rgba(255,68,68,0.5)',
      ringMaxRadius: 2,
      ringPropagationSpeed: 2,
      ringRepeatPeriod: 1000,
      backgroundColor: 'rgba(0,0,0,0)',
      atmosphereColor: 'rgba(255,255,255,0.5)',
      atmosphereAltitude: 0.25,
      showAtmosphere: true,
      enablePointerInteraction: true
    }
  };

  // Additional label data for the marker
  const labelData = useMemo(() => [{
    ...NYC_COORDINATES,
    text: 'New York City',
    color: '#ffffff',
    size: 0.5
  }], []);

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
            <SocialLink href="https://www.linkedin.com/in/lei-chi/" icon={faLinkedin} color="blue" />
            <SocialLink href="https://github.com/raymond-chii" icon={faGithub} color="gray" />
            <SocialLink href="https://open.spotify.com/user/31behayvze3k4vryzl6uxkvynrvq?si=b99156dd880f459c" icon={faSpotify} color="green" />
            <SocialLink href="https://www.instagram.com/raycchii/" icon={faInstagram} color="pink" />
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
                pointLabel={({ city }) => `
                  <div style="
                    color: white;
                    background: rgba(0, 0, 0, 0.8);
                    padding: 5px 10px;
                    border-radius: 5px;
                  ">
                    ${city}
                  </div>
                `}
                
                // Rings configuration
                ringsData={ringsData}
                ringColor="color"
                ringMaxRadius="maxR"
                ringPropagationSpeed="propagationSpeed"
                ringRepeatPeriod="repeatPeriod"
                
                // Labels configuration
                labelsData={labelData}
                labelLat="lat"
                labelLng="lng"
                labelText="text"
                labelSize="size"
                labelDotRadius={0.5}
                labelColor="color"
                labelResolution={2}
                
                // Globe configuration
                atmosphereColor="rgba(255,255,255,0.5)"
                atmosphereAltitude={0.25}
                enablePointerInteraction={true}
                autoRotate={true}
                autoRotateSpeed={0.5}
                
                // Initial position to focus on New York
                onGlobeReady={() => {
                  setGlobeReady(true);
                }}
                initialCoordinates={[NYC_COORDINATES.lng, NYC_COORDINATES.lat]}
                center={[NYC_COORDINATES.lng, NYC_COORDINATES.lat]}
              />
            </div>
          </div>
        </motion.div>
      </TracingBeam>
    </div>
  );
};

const SocialLink = ({ href, icon, color }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className={`text-${color}-500 hover:text-${color}-700 transition-colors`}
  >
    <FontAwesomeIcon icon={icon} size="2x" />
  </motion.a>
);

const ContactInfo = ({ icon, text }) => (
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