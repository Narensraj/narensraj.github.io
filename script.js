// script.js

document.addEventListener("DOMContentLoaded", () => {
  // ---------- DATA ----------

  const skills = [
    {
      category: "Firmware & Embedded",
      items: ["C/C++", "Embedded C", "Rust (beginner)", "Python (tooling)"],
    },
    {
      category: "MCUs & Platforms",
      items: ["ESP32 / ESP-IDF", "STM32 (HAL/LL)", "ARM Cortex-M", "PIC", "Arduino"],
    },
    {
      category: "RTOS & OS",
      items: ["FreeRTOS", "Bare Metal", "Zephyr (exploring)", "Embedded Linux"],
    },
    {
      category: "Industrial Communication",
      items: ["RS-485", "Modbus RTU/TCP", "CAN", "I2C", "SPI", "UART"],
    },
    {
      category: "Wireless & IoT",
      items: ["Wi-Fi", "BLE", "MQTT", "WebSockets", "REST APIs"],
    },
    {
      category: "Tools, PCB & DevOps",
      items: ["KiCad", "Altium (basic)", "Git", "VS Code", "PlatformIO", "Node-RED", "Docker (basic)"],
    },
  ];

  const experience = [
    {
      company: "Envirotech Ag Systems Ltd",
      role: "Embedded Systems Engineer",
      period: "2024 – Present",
      location: "Winnipeg, Manitoba, Canada",
      description: [
        "Designing and maintaining embedded controllers for livestock barns and agricultural automation.",
        "Building ESP32/FreeRTOS-based controllers with RS-485 gateways, WebSocket monitoring, and SD logging.",
        "Implementing secure OTA update paths and fault-tolerant restart strategies for 24/7 uptime.",
        "Collaborating with controls, software, and operations teams to roll out systems across North America.",
      ],
    },
    {
      company: "Climate Control / Greenhouse Automation (Confidential)",
      role: "Embedded & Automation Developer",
      period: "Previous",
      location: "Leamington, Ontario, Canada",
      description: [
        "Developed firmware and logic for commercial greenhouse controllers for fertigation and climate systems.",
        "Integrated pH/EC dosing, nanobubble injection, dissolved oxygen, and hydrostatic level sensing.",
        "Worked with Opto22, Node-RED, and custom dashboards for real-time monitoring and alarm management.",
        "Optimized multi-zone irrigation scheduling and fail-safe routines for critical agricultural processes.",
      ],
    },
    {
      company: "Industrial Automation & Water Treatment (Confidential)",
      role: "Embedded Firmware Engineer",
      period: "Earlier",
      location: "India",
      description: [
        "Developed firmware for industrial water-treatment controllers using Modbus and CAN networks.",
        "Designed multi-zone irrigation and fertigation systems with SCADA-style UIs and data logging.",
        "Implemented low-power sensor networks and remote monitoring for distributed field installations.",
      ],
    },
  ];

  const projects = [
    {
      title: "Nebula Dashboard – Livestock Analytics Platform",
      description:
        "A full-stack analytics dashboard for electronic sow feeders and barn management. Provides health, feeding, and behavior analytics with advanced filtering, barn visualizations, and event timelines.",
      tech: ["React", "Node.js", "MySQL", "Material UI", "REST APIs"],
      githubUrl: "https://github.com/Narensraj",
      liveUrl: "",
      featured: true,
    },
    {
      title: "Real-Time Automation Controller for Greenhouses",
      description:
        "ESP32 + FreeRTOS-based controller for commercial greenhouses handling irrigation, fertigation, and environmental control. Features watchdog-driven fail-safe, SD card data logging, and RS-485 sensor networks.",
      tech: ["ESP32", "FreeRTOS", "RS-485", "C++"],
      githubUrl: "",
      liveUrl: "",
      featured: true,
    },
    {
      title: "Secure OTA & Firmware Update Pipeline",
      description:
        "Encrypted OTA update system for ESP32 devices using ZIP packaging and AES-256-CBC. Includes versioning, rollback support, and integrity checks for safe remote updates over Wi-Fi.",
      tech: ["ESP32", "AES-256", "OTA", "C++"],
      githubUrl: "",
      liveUrl: "",
      featured: false,
    },
    {
      title: "Modbus RTU Framework for Industrial Sensors",
      description:
        "A modular Modbus RTU master/slave framework that simplifies integration of multiple industrial sensors on RS-485 networks with robust timeout handling and diagnostics.",
      tech: ["Modbus", "RS-485", "Industrial Automation"],
      githubUrl: "",
      liveUrl: "",
      featured: false,
    },
    {
      title: "Personal Portfolio & Branding",
      description:
        "A minimal, tech-inspired personal site and brand system showcasing embedded projects, field photos, and a concise story across GitHub, LinkedIn, and Wix.",
      tech: ["HTML", "Tailwind CSS", "GSAP"],
      githubUrl: "https://github.com/Narensraj/narensraj.github.io",
      liveUrl: "https://narensraj21.wixsite.com/myself",
      featured: false,
    },
  ];

  // ---------- DOM ELEMENTS ----------

  const skillsGrid = document.getElementById("skills-grid");
  const experienceContainer = document.getElementById("experience-container");
  const projectsContainer = document.getElementById("projects-container");
  const navbar = document.getElementById("navbar");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // ---------- POPULATE SKILLS ----------

  if (skillsGrid) {
    skills.forEach((group) => {
      const card = document.createElement("div");
      card.className = "glass-card p-6 rounded-2xl skill-card";

      const itemsHtml = group.items
        .map(
          (item) =>
            `<span class="inline-block px-3 py-1 bg-white/5 rounded-full text-sm text-tech-blue mr-2 mb-2 border border-white/5 hover:border-tech-blue/30 transition-colors">${item}</span>`
        )
        .join("");

      card.innerHTML = `
        <h3 class="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
          ${group.category}
        </h3>
        <div class="flex flex-wrap">
          ${itemsHtml}
        </div>
      `;
      skillsGrid.appendChild(card);
    });
  }

  // ---------- POPULATE EXPERIENCE ----------

  if (experienceContainer) {
    experience.forEach((job) => {
      const jobEl = document.createElement("div");
      jobEl.className = "relative pl-8 border-l border-white/10 experience-card";

      jobEl.innerHTML = `
        <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-tech-blue shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        <div class="glass p-8 rounded-2xl hover:border-tech-blue/30 transition-colors">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 class="text-2xl font-bold text-white mb-1">${job.role}</h3>
              <h4 class="text-tech-blue font-medium text-lg">${job.company}</h4>
            </div>
            <div class="text-right mt-2 md:mt-0">
              <p class="text-gray-400 font-mono text-sm">${job.period}</p>
              <p class="text-gray-500 text-sm">${job.location}</p>
            </div>
          </div>
          <ul class="space-y-2">
            ${job.description
          .map(
            (line) => `
              <li class="flex items-start text-gray-400">
                <span class="text-tech-blue mr-2 mt-1.5">▹</span>
                <span>${line}</span>
              </li>`
          )
          .join("")}
          </ul>
        </div>
      `;
      experienceContainer.appendChild(jobEl);
    });
  }

  // ---------- POPULATE PROJECTS ----------

  if (projectsContainer) {
    projects.forEach((project, index) => {
      const projectEl = document.createElement("div");
      projectEl.className = `grid md:grid-cols-12 gap-8 items-center project-card`;

      const contentClass =
        index % 2 === 1
          ? "md:col-start-6 md:col-end-13 order-2 md:order-2"
          : "md:col-start-1 md:col-end-8 order-2 md:order-1";

      const imageClass =
        index % 2 === 1
          ? "md:col-start-1 md:col-end-6 order-1 md:order-1"
          : "md:col-start-8 md:col-end-13 order-1 md:order-2";

      const bgGradient =
        index % 2 === 0
          ? "from-tech-blue/20 to-purple-500/20"
          : "from-purple-500/20 to-tech-blue/20";

      const githubIcon = project.githubUrl
        ? `<a href="${project.githubUrl}" target="_blank" class="text-gray-300 hover:text-tech-blue transition-colors" aria-label="GitHub link">
             <i data-lucide="github" class="w-6 h-6"></i>
           </a>`
        : "";

      const liveIcon = project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" class="text-gray-300 hover:text-tech-blue transition-colors" aria-label="Live link">
             <i data-lucide="external-link" class="w-6 h-6"></i>
           </a>`
        : "";

      projectEl.innerHTML = `
        <div class="${contentClass} relative z-10">
          <p class="text-tech-blue font-mono text-sm mb-2">
            ${project.featured ? "Featured Project" : "Project"}
          </p>
          <h3 class="text-3xl font-bold text-white mb-4 hover:text-tech-blue transition-colors cursor-default">
            ${project.title}
          </h3>
          <div class="glass p-6 rounded-xl text-gray-400 mb-6 shadow-xl">
            ${project.description}
          </div>
          <ul class="flex flex-wrap gap-4 text-sm text-gray-400 font-mono mb-8 ${index % 2 === 1 ? "md:justify-end" : ""
        }">
            ${project.tech.map((t) => `<li>${t}</li>`).join("")}
          </ul>
          <div class="flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""
        }">
            ${githubIcon}
            ${liveIcon}
          </div>
        </div>

        <div class="${imageClass} relative group">
          <div class="absolute inset-0 bg-tech-blue/20 rounded-xl group-hover:bg-transparent transition-colors duration-300 z-10"></div>
          <div class="w-full h-64 md:h-80 bg-gradient-to-br ${bgGradient} rounded-xl border border-white/10 group-hover:border-tech-blue/50 transition-all duration-300 overflow-hidden flex items-center justify-center">
            <i data-lucide="cpu" class="w-24 h-24 text-white/20 group-hover:text-tech-blue/50 transition-colors duration-300 transform group-hover:scale-110"></i>
          </div>
        </div>
      `;
      projectsContainer.appendChild(projectEl);
    });
  }

  // ---------- ICONS ----------

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // ---------- NAVBAR SCROLL EFFECT ----------

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("nav-scrolled");
      } else {
        navbar.classList.remove("nav-scrolled");
      }
    });
  }

  // ---------- MOBILE MENU ----------

  let isMenuOpen = false;

  const closeMobileMenu = () => {
    if (!mobileMenu || !isMenuOpen) return;
    isMenuOpen = false;
    if (typeof gsap !== "undefined") {
      gsap.to(mobileMenu, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => mobileMenu.classList.add("hidden"),
      });
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        mobileMenu.classList.remove("hidden");
        if (typeof gsap !== "undefined") {
          gsap.fromTo(
            mobileMenu,
            { height: 0, opacity: 0 },
            { height: "auto", opacity: 1, duration: 0.3 }
          );
        }
      } else {
        closeMobileMenu();
      }
    });

    // Close on menu link click
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  // ---------- GSAP ANIMATIONS ----------

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hero
    gsap.from(".hero-content", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    // Section headers
    gsap.utils.toArray(".section-header").forEach((header) => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    // About
    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
    });

    gsap.from(".about-stats", {
      scrollTrigger: {
        trigger: ".about-stats",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.4,
    });

    // Skills
    gsap.utils.toArray(".skill-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: i * 0.05,
      });
    });

    // Experience
    gsap.utils.toArray(".experience-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.1,
      });
    });

    // Projects
    gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.1,
      });
    });

    // Contact
    gsap.from(".contact-content", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
    });
  }
});
