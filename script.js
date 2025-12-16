// script.js
document.addEventListener("DOMContentLoaded", () => {
  // ---------- DATA ----------

  const skills = [
    {
      category: "Programming Languages",
      items: [
        "C",
        "C++",
        "Embedded C",
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "OptoScript",
        "Verilog",
        "VHDL",
        "MATLAB",
        "Assembly",
        "C#",
      ],
    },
    {
      category: "Embedded & Hardware",
      items: [
        "STM32",
        "ESP32",
        "ESP8266",
        "Atmel AVR",
        "Raspberry Pi",
        "Microcontrollers",
        "PCB Design (Altium, KiCad, EasyEDA)",
        "NI Multisim",
        "Xilinx/FPGA",
        "Control Panels",
        "HMI/SCADA",
      ],
    },
    {
      category: "Protocols & Industrial",
      items: [
        "TCP/IP",
        "UDP",
        "Modbus (RTU/TCP)",
        "OPC",
        "MQTT",
        "I2C",
        "SPI",
        "UART",
        "RS-485",
        "Industrial Automation",
        "Precision Agriculture",
      ],
    },
    {
      category: "Web, Database & Cloud",
      items: ["React.js", "Node.js", "Node-RED", "Grafana", "MySQL", "MariaDB", "DBeaver", "REST APIs", "WebSockets"],
    },
    {
      category: "Tools & Software",
      items: ["Git", "Docker", "VS Code", "Keil uVision", "STM32CubeMX", "Unity 3D", "Vuforia AR", "Packet Tracer", "Linux", "Windows"],
    },
    {
      category: "Core Competencies",
      items: ["Embedded Systems", "SDLC", "Debugging", "Troubleshooting", "System Architecture", "Test Procedures", "Problem Solving", "Leadership"],
    },
  ];

  const experience = [
    {
      group: "Nebula Group",
      roles: [
        {
          company: "Envirotech Ag Systems Limited",
          role: "Embedded System Engineer",
          period: "Oct 2025 - Present",
          location: "Winnipeg, Manitoba, Canada",
          description: [
            "Developing frontend and backend features for sow feeding dashboards and device monitoring tools.",
            "Building and optimizing REST APIs, WebSocket services, and real-time communication layers.",
            "Analyzing embedded device traffic (UDP, TCP/IP, Modbus) to improve stability and troubleshooting.",
            "Designing databases (MariaDB, MySQL, MSSQL) and managing schema updates and migration plans.",
            "Reverse-engineering legacy Windows apps to modernize production logic and feeding algorithms.",
            "Collaborating with firmware and hardware teams to integrate feeders, water systems, and sensors.",
          ],
        },
        {
          company: "Climate Control Systems Inc",
          role: "Controls / Software Developer",
          period: "Jan 2024 - Oct 2025",
          location: "Leamington, Ontario, Canada",
          description: [
            "Oversaw advanced controls software projects, including the ClimateEpic product line deployment.",
            "Enhanced Modbus TCP functionality in Groov Epic for seamless SCADA integration.",
            "Developed sensor data acquisition systems using Node-RED and visualized data in Grafana.",
            "Managed the full SDLC: analysis, design, coding, testing, deployment, and maintenance.",
            "Provided international customer support (Canada, USA, Singapore, Sweden, Mexico, Australia).",
          ],
        },
        {
          company: "Climate Control Systems Inc",
          role: "Junior Electronics and Controls Programmer",
          period: "Jan 2023 - Jan 2024",
          location: "Leamington, Ontario, Canada",
          description: [
            "Designed HMI/SCADA interfaces for Windows and web platforms using Opto 22 controllers.",
            "Collaborated on software development for Fertigation Manager and Ozone Pro.",
            "Implemented Modbus TCP/RTU and OPC UA protocols for sensor integration.",
            "Built a custom library to convert wireless weather station data into serial communication.",
          ],
        },
      ],
    },
    {
      group: "Promech Industries Pvt Ltd",
      roles: [
        {
          company: "Promech Industries Pvt Ltd",
          role: "Embedded Systems Intern",
          period: "Mar 2020 - Mar 2021",
          location: "Coimbatore, Tamil Nadu, India",
          description: [
            "Designed custom board layouts based on project specifications.",
            "Developed sensor/device drivers using bare-metal Embedded C.",
            "Implemented I2C, UART, and SPI protocols for inter-device communication.",
            "Debugged circuits using logic analyzers and digital oscilloscopes.",
          ],
        },
      ],
    },
    {
      group: "Big Data Labs",
      roles: [
        {
          company: "Big Data Labs",
          role: "Mobile Application Development Intern",
          period: "Feb 2019",
          location: "India",
          description: [
            "Learned application development for mobile, desktop, and web platforms.",
          ],
        },
      ],
    },
  ];

  const projects = [
    {
      title: "ESP32 Relay Board",
      period: "PCB Design & IoT",
      association: "Independent / Home Automation",
      description: "A custom ESP32-S3 relay board designed with EasyEDA. Features onboard HLK-PM01 AC-DC converter, 4x ALQ105 relays, CP2102-GMR USB-UART, and WS2812B RGB LED. Includes isolated GPIO control and robust power management.",
      tech: ["ESP32-S3", "EasyEDA", "PCB Design", "Home Automation", "AC/DC Power"],
      githubUrl: "",
      liveUrl: "",
      featured: true,
      image: "assets/esp32_relay.jpg",
    },
    {
      title: "GController: ESP32-S3 System",
      period: "PCB Design & Embedded System",
      association: "Independent / Industrial",
      description: "A feature-rich industrial controller based on ESP32-S3. Includes 4-20mA inputs, 0-10V outputs, RS485/LoRa comms, and 7-inch touch support. Multi-layer PCB design with dedicated power planes and industrial-grade protection.",
      tech: ["ESP32-S3", "PCB Design", "Industrial Automation", "LoRa", "RS485"],
      githubUrl: "https://github.com/Narensraj/pcb_designing/tree/main/Project_G",
      liveUrl: "",
      featured: true,
      image: "assets/gcontroller.jpg",
    },
    {
      title: "Ingenious UOI based Augmented Reality using SIFT for ATM",
      period: "Aug 2020 - Mar 2021",
      association: "Associated with SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY",
      description:
        "This project uses Augmented Reality which imposes virtual keypad on digital image at real time. There is no need for any additional hardware or camera to be installed. The operation is powered by AR phone application.",
      tech: ["Vuforia SDK", "Unity 3D", "Arduino IDE", "ESP8266"],
      githubUrl: "",
      liveUrl: "https://www.hackster.io/Narensraj/diy-touchless-atm-using-augmented-reality-iotar-e621e0",
      featured: true,
    },
    {
      title: "Pet Feeder using Google assistant v1.1",
      period: "Oct 2019 - Apr 2020",
      association: "Associated with SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY",
      description:
        "The Pet Feeder can be coded to complete a variety of tasks, for instance, you could program it to fill the food bowl at certain intervals or by saying 'Ok Google feed my pet' to fill up the bowl.",
      tech: ["Arduino IDE", "ESP8266"],
      githubUrl: "",
      liveUrl: "https://www.hackster.io/Narensraj/diy-pet-feeder-using-google-assistant-d54765",
      featured: true,
    },
    {
      title: "Voice controlled home automation using MQTT",
      period: "Aug 2019 - Nov 2019",
      association: "Associated with SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY",
      description:
        "In this home automation, as the user gives commands to the Google assistant, Home appliances like Bulb, Fan and Motor etc., can be controlled accordingly. The commands decoded and sent to the microcontroller to control connected relays.",
      tech: ["Arduino IDE", "ESP8266"],
      githubUrl: "",
      liveUrl: "",
      featured: false,
    },
    {
      title: "Automatic Pet care v1.0",
      period: "Aug 2017 - Mar 2018",
      association: "Associated with PSG College of Technology",
      description:
        "An Arduino based Automatic Pet Feeder which can automatically serve food to your pet timely. It has a DS3231 RTC Module for scheduled feeding.",
      tech: ["Arduino IDE"],
      githubUrl: "",
      liveUrl: "",
      featured: false,
      award: "Best Project of the Year",
    },
    {
      title: "Magnetic Drum separator",
      period: "Sep 2014 - Oct 2014",
      association: "",
      description:
        "Magnetic Drum Separators are of self-cleaning type and provide continuous removal of ferrous/Iron contamination from a wide range of free-flowing bulk and granular materials.",
      tech: [],
      githubUrl: "",
      liveUrl: "",
      featured: false,
    },
    {
      title: "Light representation of Intestine",
      period: "Jul 2012 - Aug 2012",
      association: "",
      description: "LED light representation of human body organs to identify organ and food flow.",
      tech: [],
      githubUrl: "",
      liveUrl: "",
      featured: false,
    },
  ];

  const certifications = [
    {
      category: "A. Academic Courses & Certifications",
      items: [
        { name: "Aircraft Maintenance", issuer: "NPTEL (SWAYAM) | IIT Kanpur", date: "Jan–Feb 2020" },
      ],
    },
    {
      category: "B. Coursera Certifications",
      items: [
        { name: "Technical Support Fundamentals", issuer: "Google", date: "Apr 2020" },
        { name: "Oil & Gas Industry Operations and Markets", issuer: "Duke University", date: "May 2020" },
        { name: "Introduction to Augmented Reality and ARCore", issuer: "Google AR & VR", date: "Apr 2020" },
        { name: "Google Cloud Platform Fundamentals: Core Infrastructure", issuer: "Google Cloud", date: "Apr 2020" },
        { name: "Digital Footprint", issuer: "University of Edinburgh", date: "Apr 2020" },
        { name: "Wireless Communications for Everybody", issuer: "Yonsei University", date: "Apr 2020" },
        { name: "Introduction to GIS Mapping", issuer: "University of Toronto", date: "May 2020" },
        { name: "Converting Challenges into Opportunities", issuer: "UC San Diego", date: "Apr 2020" },
        { name: "Big Data Modeling and Management Systems", issuer: "UC San Diego", date: "Apr 2020" },
        { name: "Embedded Hardware and Operating Systems", issuer: "EIT Digital | University of Turku", date: "Jul 2020" },
        { name: "AWS Fundamentals: Going Cloud-Native", issuer: "Amazon Web Services", date: "Apr 2020" },
        { name: "Open Source Software Development Methods", issuer: "The Linux Foundation", date: "Apr 2020" },
        { name: "AI For Everyone", issuer: "deeplearning.ai", date: "Apr 2020" },
        { name: "Introduction to the Internet of Things and Embedded Systems", issuer: "UC Irvine", date: "Apr 2020" },
      ],
    },
    {
      category: "C. Coursera Specialization",
      items: [
        { name: "Open Source Software Development, Linux and Git", issuer: "The Linux Foundation", date: "Jul 2020" },
      ],
    },
    {
      category: "D. Google / Industry Certifications",
      items: [
        { name: "Fundamentals of Digital Marketing", issuer: "Google Digital Unlocked", date: "Jun 2020" },
      ],
    },
    {
      category: "E. GUVI / RPA Certification",
      items: [
        { name: "Step into Robotic Process Automation", issuer: "GUVI | UiPath Academic Alliance", date: "Jun 2020" },
      ],
    },
    {
      category: "F. MathWorks Certifications",
      items: [
        { name: "Deep Learning Onramp", issuer: "MathWorks Training Services", date: "May 2020" },
        { name: "Machine Learning Onramp", issuer: "MathWorks Training Services", date: "May 2020" },
      ],
    },
    {
      category: "G. Cisco Networking Academy",
      items: [
        { name: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", date: "May 2020" },
        { name: "Entrepreneurship", issuer: "Cisco Networking Academy", date: "May 2020" },
        { name: "Introduction to Packet Tracer", issuer: "Cisco Networking Academy", date: "May 2020" },
        { name: "Introduction to Packet Tracer – Mobile", issuer: "Cisco Networking Academy", date: "May 2020" },
        { name: "Introduction to IoT", issuer: "Cisco Networking Academy", date: "May 2020" },
      ],
    },
    {
      category: "H. Conferences, Presentations & Publications",
      items: [
        { name: "Intuitive and Impulsive PET (IIP) Feeder System", issuer: "ICSES 2020 (Springer)", date: "Sep 2020" },
        { name: "A Systematic AR-based ATM Model", issuer: "ICCCEBS 2021 (IEEE Xplore)", date: "2021" },
      ],
    },
  ];

  const awards = ["Best project of the year"];

  const publications = [
    {
      title: "Intuitive and Impulsive Pet (IIP) Feeder System for Monitoring the Farm Using WoT",
      conference: "International Conference on Sustainable Expert Systems (ICSES 2020)",
      date: "Sep 1, 2020",
      url: "https://www.springerprofessional.de/en/intuitive-and-impulsive-pet-iip-feeder-system-for-monitoring-the/19021924",
      thumbnail: "assets/publication_1.jpg"
    },
    {
      title: "A Systematic AR based ATM model to Enhance Security and Safety",
      conference: "International Conference on Computing, Communication, Electrical and Biomedical System (ICCCEBS 2021)",
      date: "Mar 18, 2021",
      url: "https://ieeexplore.ieee.org/document/9532897",
      thumbnail: "assets/publication_2.jpg"
    },
  ];

  const languages = [
    { name: "English", level: "Full Professional" },
    { name: "Kannada", level: "Native or Bilingual" },
    { name: "Tamil", level: "Native or Bilingual" },
    { name: "Telugu", level: "Elementary" },
  ];

  // ---------- DOM ELEMENTS ----------

  const skillsGrid = document.getElementById("skills-grid");
  const experienceContainer = document.getElementById("experience-container");
  const projectsContainer = document.getElementById("projects-container");
  const certificationsList = document.getElementById("certifications-list");
  const awardsList = document.getElementById("awards-list");
  const publicationsContainer = document.getElementById("publications-container");
  const languagesGrid = document.getElementById("languages-grid");

  const navbar = document.getElementById("navbar");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // ---------- POPULATE SKILLS ----------

  if (skillsGrid) {
    skills.forEach((group) => {
      const card = document.createElement("div");
      card.className = "glass-card p-6 rounded-2xl skill-card h-full";

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

  // ---------- POPULATE LANGUAGES ----------

  if (languagesGrid) {
    languages.forEach((lang) => {
      const item = document.createElement("div");
      item.className = "glass p-4 rounded-xl text-center hover:border-tech-blue/30 transition-colors";
      item.innerHTML = `
        <h4 class="text-white font-bold mb-1">${lang.name}</h4>
        <p class="text-xs text-gray-400">${lang.level}</p>
      `;
      languagesGrid.appendChild(item);
    });
  }

  // ---------- POPULATE EXPERIENCE ----------

  if (experienceContainer) {
    experience.forEach((group) => {
      // Group header (Nebula Group)
      const groupEl = document.createElement("div");
      groupEl.className = "mb-12";

      groupEl.innerHTML = `
        <h2 class="text-2xl font-bold text-tech-blue mb-6">
          ${group.group}
        </h2>
      `;

      const rolesWrapper = document.createElement("div");
      rolesWrapper.className = "space-y-8 border-l border-white/10 pl-8";

      group.roles.forEach((job) => {
        const jobEl = document.createElement("div");
        jobEl.className = "relative experience-card";

        jobEl.innerHTML = `
          <div class="absolute -left-[13px] top-1 w-2.5 h-2.5 rounded-full bg-tech-blue"></div>
          <div class="glass p-8 rounded-2xl hover:border-tech-blue/30 transition-colors">
            <div class="flex flex-col md:flex-row md:justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white">${job.role}</h3>
                <p class="text-tech-blue font-medium">${job.company}</p>
              </div>
              <div class="text-left md:text-right mt-2 md:mt-0">
                <p class="text-gray-400 text-sm font-mono">${job.period}</p>
                <p class="text-gray-500 text-sm">${job.location}</p>
              </div>
            </div>
            <ul class="space-y-2">
              ${job.description
            .map(
              (line) => `
                  <li class="flex text-gray-400">
                    <span class="text-tech-blue mr-2">▹</span>${line}
                  </li>`
            )
            .join("")}
            </ul>
          </div>
        `;
        rolesWrapper.appendChild(jobEl);
      });

      groupEl.appendChild(rolesWrapper);
      experienceContainer.appendChild(groupEl);
    });
  }

  // ---------- POPULATE PROJECTS ----------

  if (projectsContainer) {
    projects.forEach((project, index) => {
      const projectEl = document.createElement("div");
      // Added grid-cols-1 for explicit mobile stacking
      projectEl.className = "grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center project-card";

      const contentClass =
        index % 2 === 1
          ? "md:col-start-6 md:col-end-13 order-2 md:order-2"
          : "md:col-start-1 md:col-end-8 order-2 md:order-1";

      const imageClass =
        index % 2 === 1
          ? "md:col-start-1 md:col-end-6 order-1 md:order-1"
          : "md:col-start-8 md:col-end-13 order-1 md:order-2";

      const bgGradient = index % 2 === 0 ? "from-tech-blue/20 to-tech-purple/40" : "from-tech-purple/40 to-tech-blue/20";

      const projectUrl = project.liveUrl || project.githubUrl;
      const titleLink = projectUrl
        ? `<a href="${projectUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-tech-blue transition-colors flex items-center gap-2 group-hover:text-tech-blue">${project.title}</a>`
        : project.title;

      const showProjectBtn = projectUrl
        ? `<a href="${projectUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-full hover:bg-tech-blue/20 transition-colors text-sm font-medium border border-tech-blue/20">
             Show Project
             <i data-lucide="external-link" class="w-4 h-4"></i>
           </a>`
        : "";

      const awardBadge = project.award
        ? `<div class="mb-3 inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30 text-xs font-bold uppercase tracking-wider">
             <i data-lucide="trophy" class="w-3 h-3"></i> ${project.award}
           </div>`
        : "";

      projectEl.innerHTML = `
        <div class="${contentClass} relative z-10">
          <div class="flex flex-col items-start mb-2">
            <div class="flex justify-between w-full mb-1">
               <p class="text-tech-blue font-mono text-sm">
                 ${project.featured ? "Featured Project" : "Project"}
               </p>
               <p class="text-gray-500 text-xs font-mono text-right">
                 ${project.period || ""}
               </p>
            </div>
            ${awardBadge}
          </div>

          <h3 class="text-3xl font-bold text-white mb-2 cursor-pointer">
            ${titleLink}
          </h3>

          ${project.association ? `<p class="text-gray-400 text-sm mb-4 italic">${project.association}</p>` : ""}

          <div class="glass p-6 rounded-xl text-gray-400 mb-6 shadow-xl">
            ${project.description || ""}
          </div>

          <ul class="flex flex-wrap gap-4 text-sm text-gray-400 font-mono mb-8 ${index % 2 === 1 ? "md:justify-end" : ""}">
            ${(project.tech || []).map((t) => `<li>${t}</li>`).join("")}
          </ul>

          <div class="flex gap-4 items-center ${index % 2 === 1 ? "md:justify-end" : ""}">
            ${showProjectBtn}
          </div>
        </div>

        <div class="${imageClass} relative group">
          <div class="absolute inset-0 bg-tech-blue/10 rounded-xl group-hover:bg-transparent transition-colors duration-300 z-10"></div>
          <div class="w-full h-64 md:h-80 bg-gradient-to-br ${bgGradient} rounded-xl border border-white/10 group-hover:border-tech-blue/50 transition-all duration-300 overflow-hidden flex items-center justify-center relative">
            ${project.image
          ? `<img src="${project.image}" alt="${project.title}" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105">`
          : `<i data-lucide="cpu" class="w-24 h-24 text-white/20 group-hover:text-tech-blue/50 transition-colors duration-300 transform group-hover:scale-110"></i>`
        }
          </div>
        </div>
      `;

      projectsContainer.appendChild(projectEl);
    });
  }

  // ---------- POPULATE CERTIFICATIONS & AWARDS ----------

  if (certificationsList) {
    // Clear existing content if any (though typically empty)
    certificationsList.innerHTML = "";

    certifications.forEach((group, index) => {
      // Create Accordion Item
      const accordionItem = document.createElement("div");
      accordionItem.className = "glass rounded-2xl overflow-hidden transition-all duration-300";

      // Header
      const header = document.createElement("button");
      header.className = "w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none";
      // Added flex-1 and pr-4 to span to ensure text wrapping doesn't push chevron or overlap
      header.innerHTML = `
        <span class="text-lg font-bold text-white flex-1 pr-4">${group.category}</span>
        <i data-lucide="chevron-down" class="w-5 h-5 text-tech-blue transition-transform duration-300 flex-shrink-0" id="chevron-${index}"></i>
      `;

      // Content
      const content = document.createElement("div");
      content.id = `content-${index}`;
      content.className = "max-h-0 overflow-hidden transition-all duration-500 ease-in-out bg-black/20";

      const contentInner = document.createElement("div");
      contentInner.className = "p-6 pt-0 grid gap-4";

      group.items.forEach((cert) => {
        const certEl = document.createElement("div");
        certEl.className = "flex items-start text-gray-300 border-l-2 border-white/10 pl-4 py-1 hover:border-tech-blue transition-colors";
        certEl.innerHTML = `
          <div>
            <span class="block text-white font-medium">${cert.name}</span>
            <div class="flex flex-wrap gap-2 text-sm text-gray-500 mt-1">
              <span>${cert.issuer}</span>
              <span class="hidden sm:inline text-gray-700">•</span>
              <span class="font-mono text-xs pt-0.5">${cert.date}</span>
            </div>
          </div>
        `;
        contentInner.appendChild(certEl);
      });

      content.appendChild(contentInner);

      // Toggle Logic
      header.addEventListener("click", () => {
        const chevron = header.querySelector("i");
        const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

        if (isOpen) {
          content.style.maxHeight = "0px";
          chevron.style.transform = "rotate(0deg)";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          chevron.style.transform = "rotate(180deg)";
        }
      });

      accordionItem.appendChild(header);
      accordionItem.appendChild(content);
      certificationsList.appendChild(accordionItem);
    });
  }

  if (awardsList) {
    awards.forEach((award) => {
      const item = document.createElement("div");
      item.className = "glass p-4 rounded-xl border-l-4 border-tech-blue";
      item.innerHTML = `<span class="text-white font-medium">${award}</span>`;
      awardsList.appendChild(item);
    });
  }

  // ---------- POPULATE PUBLICATIONS ----------

  if (publicationsContainer) {
    publications.forEach((pub) => {
      const item = document.createElement("div");
      item.className = "glass p-6 rounded-2xl hover:border-tech-blue/50 transition-colors flex flex-col sm:flex-row items-start gap-4"; // added gap-4
      item.innerHTML = `
        <div class="flex-shrink-0">
            ${pub.thumbnail ?
          `<img src="${pub.thumbnail}" alt="${pub.title}" class="w-24 h-16 object-cover rounded-lg border border-white/10" />` :
          `<div class="bg-tech-blue/10 p-3 rounded-full text-tech-blue"><i data-lucide="book-open" class="w-6 h-6"></i></div>`
        }
        </div>
        <div>
          <h3 class="text-xl font-bold text-white mb-2">
            <a href="${pub.url}" target="_blank" rel="noopener noreferrer" class="hover:text-tech-blue transition-colors flex items-center gap-2">
              ${pub.title}
              <i data-lucide="external-link" class="w-4 h-4 text-gray-500"></i>
            </a>
          </h3>
          <p class="text-gray-400 text-sm mb-1">${pub.conference}</p>
          <p class="text-gray-500 text-xs font-mono">${pub.date}</p>
        </div>
      `;
      publicationsContainer.appendChild(item);
    });
  }

  // ---------- ICONS ----------

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // ---------- NAVBAR SCROLL EFFECT ----------

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) navbar.classList.add("nav-scrolled");
      else navbar.classList.remove("nav-scrolled");
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
          gsap.fromTo(mobileMenu, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.3 });
        }
      } else {
        closeMobileMenu();
      }
    });

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
        scrollTrigger: { trigger: header, start: "top 85%" },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    // About
    gsap.from(".about-text", {
      scrollTrigger: { trigger: ".about-text", start: "top 80%" },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
    });

    gsap.from(".about-stats", {
      scrollTrigger: { trigger: ".about-stats", start: "top 80%" },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.4,
    });

    // Skills
    gsap.utils.toArray(".skill-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: (i % 3) * 0.1, // Simple stagger based on 3-column grid
      });
    });

    // Experience
    gsap.utils.toArray(".experience-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.1,
      });
    });

    // Projects
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
    });

    // Certifications & Awards
    gsap.from("#certifications-list", {
      scrollTrigger: { trigger: "#certifications", start: "top 80%" },
      opacity: 0,
      x: -30,
      duration: 0.8,
    });

    gsap.from("#awards-list", {
      scrollTrigger: { trigger: "#certifications", start: "top 80%" },
      opacity: 0,
      x: 30,
      duration: 0.8,
      delay: 0.2,
    });

    // Publications
    gsap.from("#publications-container > div", {
      scrollTrigger: {
        trigger: "#publications",
        start: "top 85%",
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
    });

    // Contact
    gsap.from(".contact-content", {
      scrollTrigger: { trigger: "#contact", start: "top 75%" },
      opacity: 0,
      y: 30,
      duration: 0.8,
    });
  }
});
