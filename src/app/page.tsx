import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Link from 'next/link';

const About = () => {
  return (
    <div className="relative min-h-screen p-4 bg-black text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Boxes />
      </div>
      <TracingBeam>
        <div className="relative z-10 text-center mb-8">
          <div className="h-24 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-medium")}>About Me</h1>
            <p className="text-lg text-gray-400">Raymond (Lei) Chi</p>
          </div>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mb-8">
          <img
            src="/profile.png" 
            alt="Raymond (Lei) Chi"
            className="w-48 h-48 rounded-full mb-4 md:mb-0"
          />
          <div className="md:ml-8">
            <p>
              Hello, I&apos;m Raymond (Lei) Chi. I&apos;m an Electrical Engineering major
              with a minor in Computer Science at The Cooper Union in NYC. I
              have a passion for coding, specializing in circuits, web
              development, and software-driven solutions. I also enjoy playing
              soccer, engaging in fashion, and working out.
            </p>
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>The Cooper Union</strong> - Electrical Engineering
                (Major), Computer Science (Minor) 2021 - 2025
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hobbies & Interests</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Playing Soccer</li>
              <li>Fashion and Styling</li>
              <li>Working Out</li>
              <li>Exploring AI and NLP</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Software Skills</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Language: </strong>JavaScript, Python, Java, C/C++, Matlab, Typescript, Shell Script</li>
              <li><strong>Database: </strong>PostgreSQL, MySQL, MongoDB, DBeaver</li>
              <li><strong>Web Development: </strong>React, React-native, Next.js, Flask, Django, SpringBoot, RestAPI</li>
              <li><strong>DevOps & Cloud: </strong>Docker, GCP, Git, Linux, Azure, Kubernetes</li>
              <li><strong>Library: </strong>LangChain, Tensorflow, Pandas, Scikit-learn, NLTK, BeautifulSoup, Selenium</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Hardware Skills</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Hardware Programing:</strong> Verilog, VHDL, RTL coding, Assembly</li>
              <li><strong>Digital Design: </strong>Xilinx FPGA, AMD Vivado, Digital Logic Design </li>
              <li><strong>Analog Design:</strong> Cadence, Layout, TSMC 65 nm PDK, LTspice</li>
              <li><strong>Lab equipment: </strong>Signal Generator, Oscilloscope, Power Meter </li>
              <li><strong>Microcontroller: </strong>Arduino, Raspberry Pi, Linux</li>
            </ul>
          </div>
        </div>
        <div className="relative z-10 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="https://www.linkedin.com/school/the-cooper-union/" passHref legacyBehavior>
              <a className="block hover:opacity-80 transition-opacity">
                <div className="bg-gray-800 p-4 rounded-lg h-full">
                  <h3 className="text-xl font-semibold mb-2">Undergraduate Researcher at Cooper Union</h3>
                  <ul className="list-disc pl-5">
                    <li>Built ML pipeline analyzing 3 cognitive tasks across 157 subjects, implementing GCP GPU infrastructure for accelerated model training.</li>
                    <li>Engineered multi-modal feature extraction combining acoustic (eGeMAPS), prosodic (DisVoice), and linguistic (NLTK) features, fixing deprecation issues in DisVoice and LFTK.</li>
                    <li>Developed NLP pipeline using Whisper-timestamped for speech transcription, resolving deprecation conflicts for PyTorch compatibility.</li>
                    <li>Implemented SMOTE oversampling and feature standardization while handling demographic factors and missing data.</li>
                    <li>Created scalable Python system for processing audio datasets with comprehensive error handling and time-aligned feature extraction.</li>
                  </ul>
                </div>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/globalkeysolutions/" passHref legacyBehavior>
              <a className="block hover:opacity-80 transition-opacity">
                <div className="bg-gray-800 p-4 rounded-lg h-full">
                  <h3 className="text-xl font-semibold mb-2">Software Engineer Intern at Global Key Solutions</h3>
                  <ul className="list-disc pl-5">
                    <li>Developed a LangChain-powered chatbot using RAG and SQL/PGQ, automating data retrieval and enhancing reliability.</li>
                    <li>Designed MySQL tables and APIs, integrating automated pipelines for production deployment.</li>
                    <li>Automated OCR text extraction from PDFs and streamlined data processing workflows.</li>
                    <li>Built a periodic web scraper with Beautiful Soup and Selenium, updating 3,000 entries in the production database.</li>
                    <li>Contributed to Agile weekly sprints with Jira, ensuring continuous delivery and team collaboration.</li>
                  </ul>
                </div>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/bluestamp-engineering/" passHref legacyBehavior>
              <a className="block hover:opacity-80 transition-opacity">
                <div className="bg-gray-800 p-4 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-2">Robotics Instructor at BlueStamp Engineering</h3>
                  <ul className="list-disc pl-5">
                    <li>Led students in IoT and embedded systems projects using Arduino and Raspberry Pi, driving hands-on expertise.</li>
                    <li>Guided autonomous robotics projects, focusing on OpenCV-based object detection.</li>
                    <li>Directed Flask-controlled robotics projects, emphasizing the integration of web interfaces in IoT solutions.</li>
                    <li>Mentored students on sensors, microcontrollers, and communication protocols, equipped IoT and embedded systems skills.</li>
                  </ul>
                  </div>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/ambedded-technology-co-ltd-/" passHref legacyBehavior>
              <a className="block hover:opacity-80 transition-opacity">
                <div className="bg-gray-800 p-4 rounded-lg h-full">
                  <h3 className="text-xl font-semibold mb-2">Software Engineer Intern at Ambedded Technology Co., Ltd.</h3>
                    <ul className="list-disc pl-5">
                    <li>Conducted FIO test on Jenkins, to find optimal throughput of cores-to-driver ratio for Ceph storage ARM-based cluster.</li>
                    <li>Enhanced FIO script for multiple test runs; Developed Linux network latency tests for cluster assessment.</li>
                    <li>Improved Ceph storage read/write latency by 10% through tuning Linux network's sysctl parameters.</li>
                    <li>Analyzed latency and runtime data to fine-tune system parameters, optimizing performance and creating visual reports.</li>
                    <li>Explored DPDK, an open-source solution, to elevate network latency performance.</li>
                    </ul>
                </div>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/loisaida-inc/" passHref legacyBehavior>
              <a className="block hover:opacity-80 transition-opacity">
                <div className="bg-gray-800 p-4 rounded-lg h-full">
                  
                  <h3 className="text-xl font-semibold mb-2">IoT Engineer Intern at Loisiada Inc.</h3>
                    <ul className="list-disc pl-5">
                    <li>Deployed over 40 Arduino and Raspberry Pi remote sensing units to monitor urban microclimates.</li>
                    <li>Implemented Raspberry Pi Edge Gateways for real-time data aggregation and processing.</li>
                    <li>Developed a Dockerized PostgreSQL database for efficient sensor data storage and visualization.</li>
                    <li>Engineered a Linux-based mini-PC hub for reliable data collection and seamless system integration.</li>
                    </ul>
                  
                </div>
              </a>
            </Link>
            <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Webmaster at The Cooper Union</h3>
              <li>Webmaster (front-end) for the School of Engineering's Capstone Senior Project Showcase website.</li>
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default About;
