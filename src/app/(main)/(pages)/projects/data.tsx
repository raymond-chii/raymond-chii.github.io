// data.tsx
export const projectCategories = {
  current: {
    title: "Current",
    description: "Full-stack development, web applications, and system architecture",
    projects: [
      {
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features interactive UI components, terminal emulation, and dynamic content rendering.",
        link: "https://github.com/your-username/portfolio",
        tags: ["React", "Next.js", "Tailwind", "TypeScript"]
      },
      {
        title: "LangChain Chatbot",
        description: "Developed an intelligent chatbot using LangChain, implementing RAG architecture and SQL/PGQ for automated data retrieval and processing.",
        link: "https://github.com/your-username/langchain-chatbot",
        tags: ["Python", "LangChain", "SQL", "API"]
      },
      {
        title: "Web Scraping Pipeline",
        description: "Automated data collection system using Beautiful Soup and Selenium, processing and updating over 3,000 database entries.",
        link: "https://github.com/your-username/web-scraper",
        tags: ["Python", "Beautiful Soup", "Selenium", "PostgreSQL"]
      }
    ]
  },
  software: {
    title: "Software Projects",
    description: "Full-stack development, web applications, and system architecture",
    projects: [
      {
        title: "Pfizer Digital Hackathon, 2nd Place Winner, CUCU - Mental Health Platform",
        description: "Developed a mood-classification algorithm and journaling tool for NYC public high school students, connecting them to licensed social workers to address mental health inequities in underserved communities.",
        link: "https://github.com/raymond-chii/hackathon/tree/main",
        tags: ["Pfizer", "Hackathon", "Python", "NLP", "ML", "Frontend Design"],
        github: {
          username: "raymond-chii",
          repo: "hackathon"
        }
      },
      {
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features interactive UI components, terminal emulation, and dynamic content rendering.",
        link: "https://github.com/your-username/portfolio",
        tags: ["React", "Next.js", "Tailwind", "TypeScript"]
      },
      {
        title: "LangChain Chatbot",
        description: "Developed an intelligent chatbot using LangChain, implementing RAG architecture and SQL/PGQ for automated data retrieval and processing.",
        link: "https://github.com/your-username/langchain-chatbot",
        tags: ["Python", "LangChain", "SQL", "API"]
      },
      {
        title: "Web Scraping Pipeline",
        description: "Automated data collection system using Beautiful Soup and Selenium, processing and updating over 3,000 database entries.",
        link: "https://github.com/your-username/web-scraper",
        tags: ["Python", "Beautiful Soup", "Selenium", "PostgreSQL"]
      }
    ]
  },
  ml: {
    title: "Machine Learning & AI",
    description: "AI, machine learning models, and data science projects",
    projects: [
      {
        title: "Object Detection System",
        description: "Computer vision project implementing OpenCV for real-time object detection and tracking in robotics applications.",
        link: "https://github.com/your-username/opencv-detection",
        tags: ["Python", "OpenCV", "TensorFlow", "Computer Vision"]
      },
      {
        title: "NLP Text Analysis",
        description: "Natural language processing system for analyzing and categorizing text data using NLTK and advanced ML techniques.",
        link: "https://github.com/your-username/nlp-analysis",
        tags: ["Python", "NLTK", "Machine Learning", "NLP"]
      }
    ]
  },
  signals: {
    title: "Signal Processing",
    description: "Digital signal processing and communications projects",
    projects: [
      {
        title: "Digital Signal Analyzer",
        description: "MATLAB-based system for analyzing and processing digital signals, implementing various filtering and transformation techniques.",
        link: "https://github.com/your-username/signal-analyzer",
        tags: ["MATLAB", "DSP", "Signal Processing", "Analysis"]
      },
      {
        title: "Network Latency Optimization",
        description: "Improved Ceph storage cluster performance through network parameter optimization and latency analysis.",
        link: "https://github.com/your-username/network-optimization",
        tags: ["Linux", "Networks", "Performance", "Analysis"]
      }
    ]
  },
  hardware: {
    title: "Hardware Projects",
    description: "FPGA, embedded systems, and hardware design",
    projects: [
      {
        title: "Urban Microclimate Monitoring",
        description: "Deployed network of 40+ Arduino and Raspberry Pi units for environmental monitoring with real-time data processing.",
        link: "https://github.com/your-username/climate-monitor",
        tags: ["Arduino", "Raspberry Pi", "IoT", "Sensors"]
      },
      {
        title: "FPGA-based System",
        description: "Digital design project implementing custom hardware architecture on Xilinx FPGA using Verilog.",
        link: "https://github.com/your-username/fpga-project",
        tags: ["Verilog", "FPGA", "Digital Design", "Hardware"]
      }
    ]
  }
};