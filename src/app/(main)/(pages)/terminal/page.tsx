"use client";

import React from 'react';
import Terminal from '@/components/global/terminal';
import './terminal.css';
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const TerminalPage = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="desktop-background">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Terminal <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Welcome to Raymond&apos;s profile
                </span>
              </h1>
            </>
          }
        >
          <div className="terminal-container">
            <Terminal />
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
};

export default TerminalPage;
