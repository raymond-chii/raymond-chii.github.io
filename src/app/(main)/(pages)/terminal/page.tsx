"use client";

import React from 'react';
import Terminal from '@/components/global/terminal';
import './terminal.css';
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const TerminalPage = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="desktop-background">
        <ContainerScroll
          titleComponent={
            <div className="text-center mb-4">
              <h1 className="text-4xl font-semibold text-white">
                Terminal <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Welcome to Raymond&apos;s profile
                </span>
              </h1>
            </div>
          }
        >
          <div className="terminal-outer-container">
            <Terminal />
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
};

export default TerminalPage;
