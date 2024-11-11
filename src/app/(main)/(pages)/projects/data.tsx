// data.tsx
export const projectCategories = {
  current: {
    title: "Current",
    description: "Full-stack development, web applications, and system architecture",
    projects: [
      {
        title: "Alzheimer’s Early Detection via Audio Processing, CUSAP",
        description: "Developing an automated cognitive decline detection system using multi-modal analysis of spontaneous speech for ICASSP 2025's PROGRESS Challenge.",
        link: "",
        tags: ["Speech and Audio Processing", "NLP", "Machine Learning", "Python", "Pytorch"]
      },
      {
        title: "Intelligent Beamforming",
        description: "This project investigates beamforming techniques for wireless networks using an extended Kalman filter, reinforcement learning (RL), and deep learning (DL) models. We will simulate and compare each method to identify the most effective approach, which will then be tested on the COSMOS testbed at Columbia University. Building on previous COSMOS research in RL-based beamforming, this project aims to enhance real-world wireless performance through adaptive algorithms.",
        link: "",
        tags: ["Communication Systems", "Signal Processing", "Adaptive Filtering", "Machine Learning"]
      },
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
        title: "Full stack Web/iOS mobile application, Nexus",
        description: "Developed a networking application using React Native, featuring advanced discovery filtering with API integration, seamless match making system, and real-time chat functionality utilizing WebSockets.",
        link: "https://github.com/orgs/NexusNetworkingApp/repositories",
        tags: ["React", "React Native", "MySQL", "Spring Boot", "API", "WebSockets", "Real-time Chat"],
        github: {
          username: "NexusNetworkingApp",
          repo: "Web-Frontend"
        }
      },
      {
        title: "Full stack school newsletter website, The Pioneer",
        description: "Spearheaded the redesign of The Cooper Union's newspaper website using Docker, Firebase, PostgreSQL, React, and Spring Boot enhancing user interaction with article submissions, comments, and editorial workflows.",
        link: "https://github.com/The-Pioneer-Cooper-Union/The-Pioneer",
        tags: ["Web Development", "Docker", "Firebase", "PostgreSQL", "React", "Spring Boot"],
        github: {
          username: "The-Pioneer-Cooper-Union",
          repo: "The-Pioneer"
        }
      },
      {
        title: "Operating System Projects",
        description: "A suite of Unix system utilities including a custom shell, filesystem analyzer, and file concatenation tool. Built in C using system calls, demonstrating low-level systems programming and process management in Unix environments.",
        link: "https://github.com/raymond-chii/Operating-System",
        tags: ["C", "Unix System Calls", "Process Management", "File Systems", "Shell Scripting"],
        github: {
          username: "raymond-chii",
          repo: "Operating-System"
        }
      },
    ]
  },
  ml: {
    title: "Machine Learning & AI",
    description: "AI, machine learning models, and data science projects",
    projects: [
      {
        title: "NLP Project Developer, Language Detection and Sentiment Analysis",
        description: "Developed and compared FNN and CNN models using TensorFlow and Keras for language detection, achieving up to 97.2% accuracy with TF-IDF embeddings, and implemented sentiment analysis using CardiffNLP's Twitter models.",
        link: "https://github.com/raymond-chii/Language-Detection",
        tags: ["NLTK", "Doc2Vec", "TensorFlow", "Transformers"],
        github: {
          username: "raymond-chii",
          repo: "Language-Detection"
        }
      },
      {
        title: "Text Categorization using Naïve Bayes",
        description: "In this project, I've implemented a text categorization system using the Naïve Bayes algorithm. The system processes articles, tokenizes the text, removes stopwords, and applies stemming before calculating the likelihood and prior probabilities. These probabilities are then used to classify the text into predefined categories.",
        link: "https://github.com/raymond-chii/NLP-Text-Categorization",
        tags: ["Naive Bayes", "Tokenization", "Stopword Removal", "Stemming", "Smoothing"],
        github: {
          username: "raymond-chii",
          repo: "NLP-Text-Categorization"
        }
      },
      {
        title: "Frequentist Machine Learning Projects",
        description: "This is were I put my frequentist machine learning projects.",
        link: "https://github.com/raymond-chii/Frequentist-ML",
        tags: ["Linear Regression", "Logistic Regression", "XGBoost", "Cross Validation"],
        github: {
          username: "raymond-chii",
          repo: "Frequentist-ML"
        }
      }
    ]
  },
  signals: {
    title: "Signal Processing",
    description: "Digital signal processing and communications projects",
    projects: [
      {
        title: "Digital Signal Processing Projects",
        description: "Discrete Fourier Transform (DFT) and Image Processing, Filter Design, Multirate Systems, Quantization, Spectral Analysis and Sampling",
        link: "https://github.com/raymond-chii/Digital-Signal-Processing",
        tags: ["MATLAB", "DSP", "Signal Processing", "Analysis"],
        github: {
          username: "raymond-chii",
          repo: "Digital-Signal-Processing"
        }
      },
      {
        title: "Communication Systems Projects",
        description: "Analog Communication, Decision Theory, Digital Communications, Fourier Transform Analysis, Information Theory, Intersymbol Interference Simulation",
        link: "https://github.com/raymond-chii/Communication-Theory",
        tags: ["Matlab", "Digital Communications", "Analog Communication", "Information Theory"],
        github: {
          username: "raymond-chii",
          repo: "Communication-Theory"
        }
      }
    ]
  },
  hardware: {
    title: "Hardware Projects",
    description: "FPGA, embedded systems, and hardware design",
    projects: [
      {
        title: "Hardware Design Projects",
        description: "This is where I put my hardware design projects. There are various projects in this category. Projects include mips 64 bit cpu on FPGA and oled display controller, etc.",
        link: "https://github.com/raymond-chii/Hardware-Design",
        tags: ["FPGA", "AMD Xilinx", "Hardware Design", "Verilog"],
        github: {
          username: "raymond-chii",
          repo: "Hardware-Design"
        }
      },
      {
        title: "Image display (VGA) on FPGA",
        description: "Engineered an image display system on FPGA using SystemVerilog and AMD Vivado Design Suite, involving signal processing techniques to fine-tune resolution through dynamic image downsizing and upsizing.",
        link: "https://github.com/your-username/fpga-project",
        tags: ["Verilog", "FPGA", "Digital Design", "Hardware", "Matlab"],
      },
      {
        title: "Theremin",
        description: "Built a Theremin with envelop detector, op amps, high/low pass filters, and coupling capacitors to play musical notes via hand gestures.",
        link: "https://www.youtube.com/watch?v=dI7TFS5GAgQ&t=5s",
        tags: ["Circuit Design", "Signal Processing", "Electronic Design"],
      }
    ]
  }
};