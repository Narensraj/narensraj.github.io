// script.js
document.addEventListener("DOMContentLoaded", () => {
  // ---------- DATA ----------

  const skills = [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Embedded C", "Python", "JavaScript", "TypeScript", "SQL", "OptoScript", "Verilog", "VHDL", "MATLAB", "Assembly", "C#"],
    },
    {
      category: "Embedded & Hardware",
      items: ["STM32", "ESP32", "ESP8266", "Atmel AVR", "Raspberry Pi", "Microcontrollers", "PCB Design (Altium, KiCad, EasyEDA)", "NI Multisim", "Xilinx/FPGA", "Control Panels", "HMI/SCADA"],
    },
    {
      category: "Protocols & Industrial",
      items: ["TCP/IP", "UDP", "Modbus (RTU/TCP)", "OPC", "MQTT", "I2C", "SPI", "UART", "RS-485", "Industrial Automation", "Precision Agriculture"],
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
            "Spearheaded the 'Epic Climate Manager' (v1.7) dashboard using React & WebSocket for real-time zone monitoring.",
            "Modernized 'Epic Fertigation Manager' (v4.2) interface for precision irrigation and recipe management.",
            "Designed 'Ozone Pro' HMI (v2.1) for water treatment system monitoring and control.",
            "Developed 'Multi-Chamber Dashboard' for centralized environmental tracking across isolated zones.",
            "Implemented 'Customer Data Analysis' visualization tools using Grafana for agronomic insights.",
            "Enhanced Modbus TCP/RTU integrations for seamless SCADA communication.",
            "Provided international customer support for these deployed systems (Canada, USA, Singapore, Sweden).",
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
          description: ["Learned application development for mobile, desktop, and web platforms."],
        },
      ],
    },
  ];

  const projects = [
    {
      title: "GController: ESP32-S3 System",
      period: "PCB Design & Embedded System",
      association: "Independent / Industrial",
      description: "A feature-rich industrial controller based on ESP32-S3. Includes 4-20mA inputs, 0-10V outputs, RS485/LoRa comms, and 7-inch touch support. Multi-layer PCB design with dedicated power planes and industrial-grade protection.",
      tech: ["ESP32-S3", "PCB Design", "Industrial Automation", "LoRa", "RS485"],
      githubUrl: "https://github.com/Narensraj/pcb_designing/tree/main/Project_G",
      featured: true,
      images: ["assets/gcontroller.jpg"],
    },
    {
      title: "ESP32 Relay Board",
      period: "PCB Design & IoT",
      association: "Independent / Home Automation",
      description: "A custom ESP32-S3 relay board designed with EasyEDA. Features onboard HLK-PM01 AC-DC converter, 4x ALQ105 relays, CP2102-GMR USB-UART, and WS2812B RGB LED. Includes isolated GPIO control and robust power management.",
      tech: ["ESP32-S3", "EasyEDA", "PCB Design", "Home Automation", "AC/DC Power"],
      githubUrl: "https://github.com/Narensraj/pcb_designing/tree/main/ESP32_RelayBoard",
      featured: true,
      images: ["assets/esp32_relay.jpg"],
    },
    {
      title: "Ingenious UOI based Augmented Reality using SIFT for ATM",
      period: "Aug 2020 - Mar 2021",
      association: "Associated with SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY",
      description: "This project uses Augmented Reality which imposes virtual keypad on digital image at real time. No additional hardware needed.",
      tech: ["Vuforia SDK", "Unity 3D", "Arduino IDE", "ESP8266"],
      liveUrl: "https://www.hackster.io/Narensraj/diy-touchless-atm-using-augmented-reality-iotar-e621e0",
      featured: true,
      images: ["assets/ar_atm.png"],
    },
    {
      title: "Pet Feeder using Google assistant v1.1",
      period: "Oct 2019 - Apr 2020",
      association: "Associated with SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY",
      description: "Pet Feeder programmable to fill the bowl at intervals or via 'Ok Google feed my pet'.",
      tech: ["Arduino IDE", "ESP8266"],
      liveUrl: "https://www.hackster.io/Narensraj/diy-pet-feeder-using-google-assistant-d54765",
      featured: true,
      images: ["assets/pet_feeder.png"],
    },
    {
      title: "Voice controlled home automation using MQTT",
      period: "Aug 2019 - Nov 2019",
      association: "Associated with SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY",
      description: "Home automation controlling appliances via Google Assistant and microcontroller relays.",
      tech: ["Arduino IDE", "ESP8266"],
      featured: false,
      images: [],
    },
    {
      title: "Automatic Pet care v1.0",
      period: "Aug 2017 - Mar 2018",
      association: "Associated with PSG College of Technology",
      description: "Arduino based Automatic Pet Feeder with DS3231 RTC Module for scheduled feeding.",
      tech: ["Arduino IDE"],
      featured: false,
      award: "Best Project of the Year",
      images: [],
    },
    {
      title: "Magnetic Drum separator",
      period: "Sep 2014 - Oct 2014",
      description: "Self-cleaning Magnetic Drum Separators for removal of ferrous contamination.",
      tech: [],
      featured: false,
      images: [],
    },
    {
      title: "Light representation of Intestine",
      period: "Jul 2012 - Aug 2012",
      description: "LED light representation of human body organs to identify organ and food flow.",
      tech: [],
      featured: false,
      images: [],
    },
    {
      title: "Epic Climate Manager",
      period: "2024 - 2025",
      association: "Climate Control Systems Inc",
      description: "Advanced climate management dashboard for greenhouse automation. Features real-time zone monitoring (Temperature, Humidity, VPD, CO2), equipment status visualization, and comprehensive control settings.",
      tech: ["React.js", "Modbus TCP", "WebSocket", "SCADA"],
      featured: true,
      images: ["assets/climate_manager.png"],
    },
    {
      title: "Ozone Pro (HMI)",
      period: "2024",
      association: "Climate Control Systems Inc",
      description: "HMI interface for Ozone water treatment systems. Provides real-time monitoring of ORP, Pressure, Flow Rate, and system status (Tank Levels, O2 Generator, Pumps).",
      tech: ["HMI/SCADA", "C#", "Modbus RTU", "Industrial Automation"],
      featured: true,
      images: ["assets/ozone_pro.png"],
    },
    {
      title: "Epic Fertigation Manager",
      period: "2025",
      association: "Climate Control Systems Inc",
      description: "Modernized interface for precision fertigation management. Controls irrigation recipes, valve sequencing, bacterial injection, and EC/pH monitoring with high-precision flow control.",
      tech: ["Industrial Controls", "Embedded Systems", "UI/UX Design"],
      featured: true,
      images: ["assets/fertigation_manager.png"],
    },
    {
      title: "Multi-Chamber Dashboard",
      period: "2024",
      association: "Climate Control Systems Inc",
      description: "Web-based multi-chamber monitoring system. Allows centralized tracking of Temperature, Humidity, and Light status across multiple isolated experimental chambers.",
      tech: ["Web Dashboard", "IoT", "Remote Monitoring"],
      featured: false,
      images: ["assets/chamber_dashboard.png"],
    },
    {
      title: "Customer Data Analysis",
      period: "2024",
      association: "Climate Control Systems Inc",
      description: "Grafana-based analytics dashboard for visualizing customer data trends. Includes time-series analysis of critical metrics like pH, EC, and sensor inputs for agronomic insights.",
      tech: ["Grafana", "Time-Series DB", "Data Visualization"],
      featured: false,
      images: ["assets/grafana_analysis.png"],
    },
    {
      title: "Industrial IoT Data Pipeline",
      period: "2024 - 2025",
      association: "Climate Control Systems Inc",
      description: "Automated data ingestion pipeline using Node-RED. Captures real-time I/O metrics (Flow, pH, EC, Pressure) from industrial controllers and efficiently routes them to MSSQL for archival and analysis.",
      tech: ["Node-RED", "MSSQL", "IIoT", "Data Engineering"],
      featured: false,
      images: ["assets/nodered_pipeline.png"],
    },
    {
      title: "Dynamic I/O Mapping Engine",
      period: "2024 - 2025",
      association: "Climate Control Systems Inc",
      description: "Engineered a fully customizable I/O mapping system for Opto22 EPIC controllers using Pascal STL and Function Blocks. Allows users to configure channel types, scalings, and offsets directly via HMI without firmware recompilation.",
      tech: ["Pascal", "Structured Text", "Opto22", "Groov EPIC"],
      featured: false,
      images: ["assets/io_config.png", "assets/io_config_details.png"],
    },
    {
      title: "Epic Scratchpad Modbus Bridge",
      period: "2024",
      association: "Climate Control Systems Inc",
      description: "Implemented a high-speed data bridge using the Opto22 EPIC Scratchpad memory map. Configured custom Modbus maps to expose internal controller variables (floating point & integers) to third-party SCADA systems, ensuring universal compatibility.",
      tech: ["Modbus TCP", "Opto22 MMP", "System Integration", "SCADA"],
      featured: false,
      images: ["assets/modbus_scratchpad.png", "assets/modbus_settings.png", "assets/modbus_values.png", "assets/modbus_calc.png"],
    },
  ];


  const certifications = [
    {
      category: "A. Academic Courses & Certifications",
      items: [{ name: "Aircraft Maintenance", issuer: "NPTEL (SWAYAM) | IIT Kanpur", date: "Jan–Feb 2020" }],
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
      items: [{ name: "Open Source Software Development, Linux and Git", issuer: "The Linux Foundation", date: "Jul 2020" }],
    },
    {
      category: "D. Google / Industry Certifications",
      items: [{ name: "Fundamentals of Digital Marketing", issuer: "Google Digital Unlocked", date: "Jun 2020" }],
    },
    {
      category: "E. GUVI / RPA Certification",
      items: [{ name: "Step into Robotic Process Automation", issuer: "GUVI | UiPath Academic Alliance", date: "Jun 2020" }],
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
      thumbnail: "assets/publication_1.jpg",
    },
    {
      title: "A Systematic AR based ATM model to Enhance Security and Safety",
      conference: "International Conference on Computing, Communication, Electrical and Biomedical System (ICCCEBS 2021)",
      date: "Mar 18, 2021",
      url: "https://ieeexplore.ieee.org/document/9532897",
      thumbnail: "assets/publication_2.jpg",
    },
  ];

  // ---------- DOM ELEMENTS ----------

  const skillsGrid = document.getElementById("skills-grid");
  const experienceContainer = document.getElementById("experience-container");
  const projectsContainer = document.getElementById("projects-container");
  const certificationsList = document.getElementById("certifications-list");
  const awardsList = document.getElementById("awards-list");
  const publicationsContainer = document.getElementById("publications-container");
  const navbar = document.getElementById("navbar");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // ---------- POPULATE CONTENT ----------

  // Skills
  if (skillsGrid) {
    skills.forEach((group) => {
      const card = document.createElement("div");
      card.className = "ctos-card p-6 skill-card h-full bg-white/5";
      const itemsHtml = group.items
        .map(
          (item) =>
            `<span class="inline-block px-3 py-1 bg-ctos-cyan/10 border border-ctos-cyan/30 text-sm text-ctos-cyan mr-2 mb-2 hover:bg-ctos-cyan hover:text-black transition-colors cursor-default">${item}</span>`
        )
        .join("");
      card.innerHTML = `
          <h3 class="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2 uppercase tracking-wide text-left">
            ${group.category}<span class="blink-cursor">_</span>
          </h3>
          <div class="flex flex-wrap justify-start">
            ${itemsHtml}
          </div>
        `;
      skillsGrid.appendChild(card);
    });
  }

  // Experience
  if (experienceContainer) {
    experience.forEach((group) => {
      const groupEl = document.createElement("div");
      groupEl.className = "mb-12";
      groupEl.innerHTML = `
          <h2 class="text-2xl font-bold text-ctos-cyan mb-6 tracking-wider uppercase flex items-center justify-start">
            <span class="w-3 h-3 bg-ctos-cyan mr-3 animate-pulse"></span>
            ${group.group}<span class="blink-cursor">_</span>
          </h2>
        `;
      const rolesWrapper = document.createElement("div");
      rolesWrapper.className = "space-y-8 border-l border-ctos-cyan/30 pl-8 ml-3";

      group.roles.forEach((job) => {
        const jobEl = document.createElement("div");
        jobEl.className = "relative experience-card";
        jobEl.innerHTML = `
            <div class="absolute -left-[37px] top-1 w-4 h-4 bg-black border-2 border-ctos-cyan rounded-none"></div>
            <div class="ctos-card p-8 bg-white/5 hover:bg-white/10 transition-colors">
              <div class="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-white uppercase">${job.role}</h3>
                  <p class="text-ctos-cyan font-mono tracking-wide">${job.company}</p>
                </div>
                <div class="text-left md:text-right mt-2 md:mt-0">
                  <p class="text-gray-400 text-sm font-mono">[ ${job.period} ]</p>
                  <p class="text-gray-500 text-sm uppercase">${job.location}</p>
                </div>
              </div>
              <ul class="space-y-2 font-mono text-sm leading-relaxed">
                ${job.description.map((line) => `<li class="flex text-gray-400"><span class="text-ctos-cyan mr-3">></span>${line}</li>`).join("")}
              </ul>
            </div>
          `;
        rolesWrapper.appendChild(jobEl);
      });
      groupEl.appendChild(rolesWrapper);
      experienceContainer.appendChild(groupEl);
    });
  }

  // Projects
  if (projectsContainer) {
    projects.forEach((project, index) => {
      const projectEl = document.createElement("div");
      projectEl.className = "grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center project-card mb-12 last:mb-0";
      const contentClass = index % 2 === 1 ? "md:col-start-6 md:col-end-13 order-2 md:order-2" : "md:col-start-1 md:col-end-8 order-2 md:order-1";
      const imageClass = index % 2 === 1 ? "md:col-start-1 md:col-end-6 order-1 md:order-1" : "md:col-start-8 md:col-end-13 order-1 md:order-2";
      const projectUrl = project.liveUrl || project.githubUrl;
      const titleLink = projectUrl
        ? `<a href="${projectUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-ctos-cyan transition-colors flex items-center gap-2 group-hover:text-ctos-cyan glitch-text" data-text="${project.title}">${project.title}</a>`
        : project.title;
      const showProjectBtn = projectUrl
        ? `<a href="${projectUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 border border-ctos-cyan text-ctos-cyan hover:bg-ctos-cyan hover:text-black transition-colors text-sm font-bold uppercase tracking-wider">INIT_VIEW <i data-lucide="external-link" class="w-4 h-4"></i></a>`
        : "";
      const awardBadge = project.award
        ? `<div class="mb-3 inline-flex items-center gap-2 px-3 py-1 bg-yellow-900/40 text-yellow-400 border border-yellow-500/50 text-xs font-bold uppercase tracking-wider"><i data-lucide="trophy" class="w-3 h-3"></i> ${project.award}</div>`
        : "";

      projectEl.innerHTML = `
          <div class="${contentClass} relative z-10 w-full">
            <div class="flex flex-col items-start mb-2">
              <div class="flex justify-between w-full mb-1">
                 <p class="text-ctos-cyan font-mono text-xs uppercase tracking-widest">${project.featured ? "FEATURED_DEPLOYMENT" : "DEPLOYMENT"}</p>
                 <p class="text-gray-500 text-xs font-mono text-right uppercase">[ ${project.period || "UNKNOWN_DATE"} ]</p>
              </div>
              ${awardBadge}
            </div>
            <h3 class="text-3xl font-bold text-white mb-4 cursor-pointer uppercase">${titleLink}</h3>
            ${project.association ? `<p class="text-gray-500 text-sm mb-4 font-mono uppercase border-l-2 border-gray-700 pl-3">${project.association}</p>` : ""}
            <div class="ctos-card p-6 text-gray-400 mb-6 bg-black/80 backdrop-blur-md">
              <p class="leading-relaxed font-light">${project.description || ""}</p>
            </div>
            <ul class="flex flex-wrap gap-3 text-xs text-gray-500 font-mono mb-8 uppercase ${index % 2 === 1 ? "md:justify-end" : ""}">
              ${(project.tech || []).map((t) => `<li><span class="text-ctos-cyan">#</span>${t}</li>`).join("")}
            </ul>
            <div class="flex gap-4 items-center ${index % 2 === 1 ? "md:justify-end" : ""}">
              ${showProjectBtn}
            </div>
          </div>
          <div class="${imageClass} relative group">
            <div class="absolute inset-0 bg-ctos-cyan/20 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-300"></div>
            <div class="absolute inset-0 border border-ctos-cyan/30 z-20 pointer-events-none"></div>
            <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ctos-cyan z-30"></div>
            <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ctos-cyan z-30"></div>
            <div class="w-full h-64 md:h-80 bg-black overflow-hidden relative flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              ${project.images && project.images.length > 0 ? `<img src="${project.images[0]}" alt="${project.title}" data-project-index="${index}" onclick="openLightbox(this.src)" class="project-img-${index} absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300 cursor-pointer">` : `<i data-lucide="cpu" class="w-24 h-24 text-gray-800 group-hover:text-ctos-cyan transition-colors duration-300"></i>`}
            </div>
          </div>
        `;
      projectsContainer.appendChild(projectEl);
    });
  }

  // Certifications
  if (certificationsList) {
    certificationsList.innerHTML = "";
    certifications.forEach((group, index) => {
      const accordionItem = document.createElement("div");
      accordionItem.className = "ctos-card mb-4 bg-white/5";
      const header = document.createElement("button");
      header.className = "w-full flex items-center justify-between p-4 text-left hover:bg-ctos-cyan/10 transition-colors focus:outline-none";
      header.innerHTML = `
          <span class="text-lg font-bold text-white flex-1 pr-4 uppercase tracking-wide flex items-center">
             <span class="text-ctos-cyan mr-2">></span> ${group.category}
          </span>
          <i data-lucide="chevron-down" class="w-5 h-5 text-ctos-cyan transition-transform duration-300 flex-shrink-0"></i>
        `;
      const content = document.createElement("div");
      content.className = "max-h-0 overflow-hidden transition-all duration-300 ease-out bg-black/50 border-t border-transparent";
      content.style.borderColor = "rgba(0, 240, 255, 0.1)";
      const contentInner = document.createElement("div");
      contentInner.className = "p-6 grid gap-4";

      group.items.forEach((cert) => {
        const certEl = document.createElement("div");
        certEl.className = "flex items-start text-gray-400 border-l border-gray-700 pl-4 py-1 hover:border-ctos-cyan hover:text-white transition-colors cursor-default";
        certEl.innerHTML = `
            <div>
              <span class="block text-gray-200 font-bold uppercase text-sm mb-1">${cert.name}</span>
              <div class="flex flex-wrap gap-2 text-xs text-gray-500 font-mono">
                <span class="text-ctos-cyan">${cert.issuer}</span><span class="hidden sm:inline text-gray-700">|</span><span>${cert.date}</span>
              </div>
            </div>
          `;
        contentInner.appendChild(certEl);
      });
      content.appendChild(contentInner);

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

  // Awards
  if (awardsList) {
    awards.forEach((award) => {
      const item = document.createElement("div");
      item.className = "ctos-card p-4 border-l-4 border-l-yellow-500 flex items-center gap-3";
      item.innerHTML = `<i data-lucide="trophy" class="w-5 h-5 text-yellow-500"></i><span class="text-white font-bold uppercase tracking-wider">${award}</span>`;
      awardsList.appendChild(item);
    });
  }

  // Publications
  if (publicationsContainer) {
    publications.forEach((pub) => {
      const item = document.createElement("div");
      item.className = "ctos-card p-6 flex flex-col sm:flex-row items-start gap-4 hover:border-ctos-cyan/50";
      item.innerHTML = `
          <div class="flex-shrink-0">
              ${pub.thumbnail
          ? `<img src="${pub.thumbnail}" alt="${pub.title}" class="w-24 h-16 object-cover border border-gray-700 grayscale hover:grayscale-0 transition-all" />`
          : `<div class="bg-ctos-cyan/10 p-3 text-ctos-cyan border border-ctos-cyan/30"><i data-lucide="book-open" class="w-6 h-6"></i></div>`
        }
          </div>
          <div>
            <h3 class="text-xl font-bold text-white mb-2 uppercase">
              <a href="${pub.url}" target="_blank" rel="noopener noreferrer" class="hover:text-ctos-cyan transition-colors flex items-center gap-2">
                ${pub.title}
                <i data-lucide="external-link" class="w-4 h-4 text-gray-500"></i>
              </a>
            </h3>
            <p class="text-ctos-cyan text-xs font-mono mb-1 uppercase tracking-wider">${pub.conference}</p>
            <p class="text-gray-500 text-xs font-mono">[ ${pub.date} ]</p>
          </div>
        `;
      publicationsContainer.appendChild(item);
    });
  }

  // Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Navbar
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) navbar.classList.add("nav-scrolled");
      else navbar.classList.remove("nav-scrolled");
    });
  }

  // Mobile Menu
  let isMenuOpen = false;
  const closeMobileMenu = () => {
    if (!mobileMenu) return;
    isMenuOpen = false;
    if (typeof gsap !== "undefined") {
      gsap.to(mobileMenu, { height: 0, opacity: 0, duration: 0.2, ease: "power2.in", onComplete: () => mobileMenu.classList.add("hidden") });
    } else {
      mobileMenu.classList.add("hidden");
    }
  };
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        mobileMenu.classList.remove("hidden");
        if (typeof gsap !== "undefined") gsap.fromTo(mobileMenu, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.2, ease: "power2.out" });
      } else {
        closeMobileMenu();
      }
    });
    mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));
  }

  // GSAP
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "power4.out", duration: 0.6 });

    gsap.from(".hero-content", { opacity: 0, y: 20, duration: 0.8, stagger: 0.1 });

    gsap.utils.toArray(".section-header").forEach((header) => {
      gsap.from(header, { scrollTrigger: { trigger: header, start: "top 90%" }, opacity: 0, x: -50, duration: 0.5 });
    });

    gsap.from(".about-text", { scrollTrigger: { trigger: ".about-text", start: "top 85%" }, opacity: 0, x: -30, delay: 0.1 });

    gsap.from(".about-stats .ctos-card", { scrollTrigger: { trigger: ".about-stats", start: "top 85%" }, opacity: 0, scale: 0.9, stagger: 0.1, duration: 0.4 });

    gsap.utils.toArray(".skill-card").forEach((card, i) => {
      gsap.from(card, { scrollTrigger: { trigger: card, start: "top 90%" }, opacity: 0, y: 20, duration: 0.4, delay: (i % 3) * 0.1 });
    });

    gsap.utils.toArray(".experience-card").forEach((card) => {
      gsap.from(card, { scrollTrigger: { trigger: card, start: "top 85%" }, opacity: 0, x: 20, duration: 0.5 });
    });

    gsap.from(".project-card", { scrollTrigger: { trigger: "#projects", start: "top 80%" }, opacity: 0, y: 30, stagger: 0.2 });

    gsap.from("#certifications-list", { scrollTrigger: { trigger: "#certifications", start: "top 85%" }, opacity: 0, x: -20 });
    gsap.from("#awards-list", { scrollTrigger: { trigger: "#certifications", start: "top 85%" }, opacity: 0, x: 20, delay: 0.2 });



    gsap.from(".contact-content", { scrollTrigger: { trigger: "#contact", start: "top 80%" }, opacity: 0, scale: 0.95, duration: 0.8 });
  }

  // ---------- HACKER TEXT SCRAMBLER ----------
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_!@#$%^&*";
  const scrambleText = (element) => {
    // Basic safety check
    if (!element) return;

    if (!element.dataset.originalText) {
      let text = element.innerText;
      // Clean up cursor from text
      if (element.querySelector('.blink-cursor')) {
        text = text.replace('_', '');
      }
      element.dataset.originalText = text.trim();
    }

    const simpleText = element.dataset.originalText;
    let iteration = 0;
    clearInterval(element.interval);

    element.interval = setInterval(() => {
      let newText = "";
      simpleText.split("").forEach((letter, index) => {
        if (index < iteration) newText += simpleText[index];
        else newText += chars[Math.floor(Math.random() * chars.length)];
      });

      // Re-append cursor
      if (element.querySelector('.blink-cursor') || element.dataset.hasCursor === 'true') {
        element.innerHTML = newText + '<span class="blink-cursor">_</span>';
        element.dataset.hasCursor = 'true';
      } else {
        element.innerText = newText;
      }

      if (iteration >= simpleText.length) {
        clearInterval(element.interval);
        if (element.dataset.hasCursor === 'true') {
          element.innerHTML = simpleText + '<span class="blink-cursor">_</span>';
        } else {
          element.innerText = simpleText;
        }
      }
      iteration += 1 / 2;
    }, 30);
  };

  // Target ONLY Main Name (H1)
  const targets = document.querySelectorAll("h1");

  targets.forEach(el => {
    el.addEventListener('mouseenter', () => scrambleText(el));
    // Initial trigger for H1 (Name)
    if (el.tagName === 'H1') setTimeout(() => scrambleText(el), 500);
  });

  // Re-trigger H1 when scrolling to top
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      targets.forEach(el => {
        scrambleText(el);
      });
    }
  });

  // ---------- NETWORK BACKGROUND ----------
  const initNetworkBackground = () => {
    const canvas = document.getElementById("network-bg");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const isMobile = width < 768;
    const particleCount = isMobile ? 35 : 100; // Reduced for mobile
    const connectionDistance = isMobile ? 100 : 150; // Shorter lines on mobile
    const mouseValues = { x: null, y: null, radius: isMobile ? 100 : 200 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    window.addEventListener("mousemove", (e) => {
      mouseValues.x = e.x;
      mouseValues.y = e.y;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        if (mouseValues.x != null) {
          let dx = mouseValues.x - this.x;
          let dy = mouseValues.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseValues.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseValues.radius - distance) / mouseValues.radius;
            const directionX = forceDirectionX * force * this.size;
            const directionY = forceDirectionY * force * this.size;
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }
      draw() {
        ctx.fillStyle = "rgba(0, 240, 255, 0.5)"; // ctos-cyan
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Optional: Draw square node for extra tech feel
        ctx.strokeStyle = "rgba(0, 240, 255, 0.3)";
        ctx.strokeRect(this.x - this.size * 2, this.y - this.size * 2, this.size * 4, this.size * 4);
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };
    animate();
  };

  // ---------- SLIDESHOW ----------
  const initSlideshows = () => {
    projects.forEach((project, index) => {
      if (project.images && project.images.length > 1) {
        let currentImageIndex = 0;
        const imgElement = document.querySelector(`.project-img-${index}`);

        if (imgElement) {
          setInterval(() => {
            // Fade out
            imgElement.style.opacity = '0';

            setTimeout(() => {
              // Swap Image
              currentImageIndex = (currentImageIndex + 1) % project.images.length;
              imgElement.src = project.images[currentImageIndex];

              // Fade in (revert to CSS control)
              imgElement.onload = () => {
                imgElement.style.opacity = '';
              };
            }, 300); // Match transition duration

          }, 4000); // 4 seconds per slide
        }
      }
    });
  };

  initSlideshows();

  initNetworkBackground();

  // ---------- LIGHTBOX ----------
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.className = "fixed inset-0 z-[100] hidden flex items-center justify-center bg-black/95 backdrop-blur-md opacity-0 transition-opacity duration-300";
  lightbox.innerHTML = `
    <div class="relative max-w-7xl max-h-[90vh] w-full p-4 flex items-center justify-center">
      <button id="lightbox-close" class="absolute top-4 right-4 text-white hover:text-ctos-cyan transition-colors z-50">
        <i data-lucide="x" class="w-10 h-10"></i>
      </button>
      <img id="lightbox-img" src="" alt="Full Project" class="max-w-full max-h-[85vh] object-contain border-2 border-ctos-cyan/50 shadow-[0_0_50px_rgba(0,240,255,0.3)] rounded-sm transform scale-95 transition-transform duration-300">
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  const openLightbox = (src) => {
    if (!src) return;
    lightboxImg.src = src;
    lightbox.classList.remove("hidden");
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
      lightbox.classList.remove("opacity-0");
      lightboxImg.classList.remove("scale-95");
      lightboxImg.classList.add("scale-100");
    }, 10);
    document.body.style.overflow = "hidden"; // Disable scroll
  };

  const closeLightbox = () => {
    lightbox.classList.add("opacity-0");
    lightboxImg.classList.remove("scale-100");
    lightboxImg.classList.add("scale-95");
    setTimeout(() => {
      lightbox.classList.add("hidden");
      lightboxImg.src = "";
    }, 300);
    document.body.style.overflow = ""; // Enable scroll
  };

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.closest(".relative") === lightbox.firstElementChild) {
      // Close if clicking outside the image (approximate)
      if (e.target === lightbox) closeLightbox();
    }
  });

  // Expose to global scope for inline onclicks if needed, or attach dynamically
  window.openLightbox = openLightbox;

  // Keydown to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      closeLightbox();
    }
  });

});
