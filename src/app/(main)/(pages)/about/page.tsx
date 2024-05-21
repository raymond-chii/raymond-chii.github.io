import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

const About = () => {
  return (
    <div className="min-h-screen p-4">
      <TracingBeam>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-lg text-gray-600">Raymond (Lei) Chi</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <img
            src="/profile.jpg" // Replace this with your actual profile image
            alt="Raymond (Lei) Chi"
            className="w-48 h-48 rounded-full mb-4 md:mb-0"
          />
          <div className="md:ml-8">
            <p>
              Hello, I'm Raymond (Lei) Chi. I'm an Electrical Engineering major
              with a minor in Computer Science at The Cooper Union in NYC. I
              have a passion for coding, specializing in circuits, web
              development, and software-driven solutions. I also enjoy playing
              soccer, engaging in fashion, and working out.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>The Cooper Union</strong> - Electrical Engineering
                (Major), Computer Science (Minor)
              </li>
              <li>
                <strong>High School</strong> - School of Science and Technology
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Intern</strong> at XYZ Company - Worked on software
                development projects and gained hands-on experience in web
                development.
              </li>
              <li>
                <strong>Freelance Developer</strong> - Built and maintained
                several websites and applications for small businesses.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>JavaScript, Python, Java</li>
              <li>React, Next.js, Tailwind CSS</li>
              <li>Node.js, Express</li>
              <li>Docker, Kubernetes</li>
              <li>HTML, CSS, SASS</li>
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
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p>
                A web application that allows users to track their fitness
                progress and set goals.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p>
                An e-commerce platform that provides a seamless shopping
                experience for users.
              </p>
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default About;
