import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";


const Contact = () => {

    return (
      <div className="min-h-screen p-4">
        <TracingBeam>
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">Contacts</h1>
            </div>
            <p>
            Hello, I'm Raymond (Lei) Chi. I'm an Electrical Engineering major with a minor in Computer Science at The Cooper Union in NYC. I have a passion for coding, specializing in circuits, web development, and software-driven solutions. I also enjoy playing soccer, engaging in fashion, and working out.
            </p>
        </TracingBeam>
      </div>
    );
  };
  
export default Contact;