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
          logo: "https://nebulagroup.ca/app/uploads/2021/04/nebula-group-logo-dark.png",
          logoLocal: "assets/logo_envirotech.png",
          role: "Embedded System Engineer",
          period: "Oct 2025 - Present",
          location: "Winnipeg, Manitoba, Canada",
          description: [
            "Architecting full-stack barn automation dashboards for feed management and real-time device diagnostics.",
            "Engineering optimized REST APIs and WebSocket services for seamless cloud-to-sensor communication.",
            "Validating embedded network reliability via deep-packet analysis (UDP/TCP, Custom Protocols) to ensure 99.9% uptime.",
            "Deploying distributed data-logging and system-health monitoring pipelines across multi-building farms.",
            "Co-engineering integration strategies with firmware teams for feeders, environmental sensors, and HVAC systems.",
            "Driving R&D initiatives for next-gen controller prototypes, including field testing and logic modernization.",
          ],
          projects: [
            {
              title: "Nucleus Swine Management System",
              description: "Comprehensive dashboard for swine management monitoring daily insights, feed consumption, and pen analytics.",
              tech: ["React.js", "Embedded Systems", "REST API", "MariaDB"],
              images: ["assets/nucleus_dashboard.png"],
            },
          ]
        },
        {
          company: "Climate Control Systems Inc",
          logo: "https://climatecontrol.com/wp-content/uploads/2020/02/Climate-Control-Systems-Logo.png",
          logoLocal: "assets/logo_ccs.png",
          role: "Controls / Software Developer",
          period: "Jan 2024 - Oct 2025",
          location: "Leamington, Ontario, Canada",
          description: [
            "Designed comprehensive HMI/SCADA interfaces (PAC Display, Groov View) on Opto 22 platforms (Groov Epic/RIO).",
            "Led software R&D for core product lines including 'Fertigation Manager' and 'Ozone Pro' using PAC Control.",
            "Managed the complete SDLC: from system requirements and coding to validation, release, and documentation.",
            "Executed onsite commissioning and technical training for clients across Canada and the USA.",
            "Integrated complex sensor arrays (pH, ORP, Flow, Ozone) via Modbus RTU/TCP protocols.",
            "Created detailed electrical wiring diagrams and assembled industrial control panels from scratch.",
            "Architected site-specific data solutions using Node-RED and MSSQL for secure, reliable storage.",
            "Provided tier-3 technical support and troubleshooting for deployed automation systems in North America.",
          ],
          projects: [
            {
              title: "Epic Climate Manager",
              description: "Advanced climate management dashboard for greenhouse automation. Real-time monitoring.",
              tech: ["React.js", "Modbus TCP", "WebSocket"],
              images: ["assets/climate_manager_work.jpg", "assets/climate_manager_panel.jpg", "assets/climate_manager.png"],
            },
            {
              title: "Ozone Pro (HMI)",
              description: "HMI interface for water treatment systems. Real-time monitoring of ORP, Pressure, Flow Rate.",
              tech: ["HMI/SCADA", "C#", "Modbus RTU"],
              images: ["assets/ozone_pro_panel.jpg", "assets/ozone_pro.png"],
            },
            {
              title: "Epic Fertigation Manager",
              description: "Precision fertigation management interface. Controls irrigation recipes and valve sequencing.",
              tech: ["Industrial Controls", "UI/UX"],
              images: ["assets/fertigation_panel.jpg", "assets/fertigation_manager.png"],
            },
            {
              title: "Multi-Chamber Dashboard",
              description: "Centralized tracking of environmental status across multiple isolated experimental chambers.",
              tech: ["Web Dashboard", "IoT"],
              images: ["assets/nft_rnd_1.jpg", "assets/nft_rnd_2.jpg", "assets/chamber_dashboard.png"],
            },
            {
              title: "Customer Data Analytics",
              description: "Aggregated agronomic data visualization using Grafana to drive crop yield optimization.",
              tech: ["Grafana", "SQL", "Data Vis"],
              images: ["assets/grafana_analysis.png"],
            },
            {
              title: "Industrial IoT Data Pipeline",
              description: "Node-RED pipeline capturing real-time I/O metrics (Flow, pH, EC) to MSSQL.",
              tech: ["Node-RED", "MSSQL"],
              images: ["assets/nodered_pipeline.png"],
            },
            {
              title: "Dynamic I/O Mapping Engine",
              description: "Customizable I/O mapping system for Opto22 EPIC controllers.",
              tech: ["Pascal", "Structured Text"],
              images: ["assets/io_config.png"],
            },
            {
              title: "Epic Scratchpad Modbus Bridge",
              description: "High-speed memory map bridge exposing internal controller variables.",
              tech: ["Modbus TCP", "Opto22 MMP"],
              images: ["assets/modbus_scratchpad.png"],
            },
          ]
        },
        {
          company: "Climate Control Systems Inc",
          logo: "https://climatecontrol.com/wp-content/uploads/2020/02/Climate-Control-Systems-Logo.png",
          logoLocal: "assets/logo_ccs.png",
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
      group: "Kryx Controls",
      roles: [
        {
          company: "Kryx Controls",
          role: "Co-Founder",
          period: "Feb 2024 - Aug 2024",
          location: "Leamington, Ontario, Canada",
          description: [
            "Co-founded Kryx Controls, delivering product- and service-based embedded systems solutions.",
            "Led end-to-end system architecture design for embedded controllers, covering hardware–software integration.",
            "Designed and implemented embedded software stacks tailored to custom controller requirements.",
            "Diagnosed and rectified critical issues in existing embedded products, improving system stability and reliability.",
            "Took ownership of product bring-up, debugging, and commissioning from prototype to deployment.",
            "Successfully delivered fully functional, production-ready systems to clients within defined timelines."
          ],
        },
      ],
    },
    {
      group: "Promech Industries Pvt Ltd",
      roles: [
        {
          company: "Promech Industries Pvt Ltd",
          logo: "https://marksortermachine.com/wp-content/uploads/2024/09/mark-color-sorter-logo.png",
          logoLocal: "assets/logo_promech.png",
          role: "Embedded Systems Intern",
          period: "Mar 2020 - Mar 2021",
          location: "Coimbatore, Tamil Nadu, India",
          description: [
            "Developed bare-metal firmware (Embedded C / Assembly) adhering to strict SDLC phases.",
            "Managed end-to-end PCB design using KiCad and EasyEDA, from electrical schematics to final fabrication.",
            "Written optimized sensor/device drivers and libraries for low-level peripheral control.",
            "Implemented robust communication protocols (I2C, UART, SPI) for inter-module data exchange.",
            "Conducted hardware validation and debugging using Logic Analyzers and Digital Oscilloscopes.",
            "Collaborated on touchscreen UI/UX improvements for embedded control panels.",
          ],
        },
      ],
    },
    {
      group: "Big Data Labs",
      roles: [
        {
          company: "Big Data Labs",
          logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHkEwU5N_nC_w/company-logo_200_200/company-logo_200_200/0/1630640698944?e=2147483647&v=beta&t=M8-9gqwbC9Gqg_gqgqgqgqgqgqgqgqgqgqgqgqgqgq",
          logoLocal: "assets/logo_bigdatalabs.png",
          role: "Mobile Application Development Intern",
          period: "Feb 2019",
          location: "India",
          description: ["Learned application development for mobile, desktop, and web platforms."],
        },
      ],
    },
  ];



  const education = [
    {
      institution: "Amity University, Noida",
      logo: "assets/logo_amity.png",
      logoLocal: "assets/logo_amity.png",
      degree: "Master of Business Administration - MBA, Human Resources Management",
      period: "Jan 2024 - Jan 2026",
      grade: "Pursuing",
      skills: ["Human Resources Management", "Business Administration", "Leadership", "Organizational Behavior"]
    },
    {
      institution: "Conestoga College",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Conestoga_College_Logo.png",
      logoLocal: "assets/logo_conestoga.png",
      degree: "Postgraduate Diploma, Embedded systems development",
      period: "Sep 2021 - Dec 2022",
      grade: "3.66 / 91.5%",
      skills: ["Wireless Technologies", "Electronic Circuit Design", "STM32", "Microcontrollers", "Windows", "Troubleshooting", "VHDL", "Embedded C", "Altium Designer", "Verilog", "Schematic", "Embedded Software Programming", "PCB Design"]
    },
    {
      institution: "SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/e6/Sri_Krishna_College_of_Engineering_and_Technology_logo.png",
      logoLocal: "assets/logo_skcet.png",
      degree: "Bachelor of Engineering - BE, Electronics and Communications Engineering",
      period: "2018 - 2021",
      grade: "83.4%",
      skills: ["Wireless Technologies", "Unity 3D", "Electronic Circuit Design", "Vuforia AR SDK", "MATLAB", "Microcontrollers", "Windows", "VHDL", "Verilog", "Schematic", "Embedded Software Programming"]
    },
    {
      institution: "PSG College of Technology",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/36/PSG_College_of_Technology_logo.png",
      logoLocal: "assets/logo_psg.png",
      degree: "Diploma, Electronic and Communications Engineering",
      period: "2015 - 2018",
      grade: "80%",
      skills: ["Wireless Technologies", "Electronic Circuit Design", "MATLAB", "Microcontrollers", "Windows", "Xilinx", "VHDL", "Packet Tracer", "Linux", "Verilog", "Schematic", "NI Multisim", "Embedded Software Programming"]
    }
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
      images: ["assets/gcontroller_pcb.jpg", "assets/gcontroller.jpg"],
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
    }
  ];


  const certifications = [
    {
      issuer: "Opto 22",
      items: [
        {
          title: "Fundamentals of the groov EPIC System",
          date: "Nov 2024",
          credentialUrl: "",
          certificateImage: "assets/opto22_certificate.png",
          description: "Premium Factory Training on the groov EPIC System (Edge Programmable Industrial Controller)."
        }
      ]
    },
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
  const educationContainer = document.getElementById("education-container");
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
      groupEl.className = "mb-20"; // Increased spacing
      groupEl.innerHTML = `
          <div class="flex items-center gap-4 mb-8 border-b border-ctos-cyan/30 pb-2">
            ${group.logo ? `<div class="w-10 h-10 bg-white p-1 rounded-sm flex items-center justify-center"><img src="${group.logo}" alt="${group.group}" class="max-w-full max-h-full object-contain"></div>` : ''}
            <h2 class="text-2xl font-bold text-ctos-cyan tracking-wider uppercase flex items-center justify-start">
              ${!group.logo ? '<span class="w-3 h-3 bg-ctos-cyan mr-3 animate-pulse"></span>' : ''}
              ${group.group}<span class="blink-cursor">_</span>
            </h2>
          </div>
        `;
      const rolesWrapper = document.createElement("div");
      rolesWrapper.className = "space-y-8 border-l border-ctos-cyan/30 pl-8 ml-3";

      group.roles.forEach((job) => {
        const jobEl = document.createElement("div");
        jobEl.className = "relative experience-card";
        jobEl.innerHTML = `
            <div class="absolute -left-[37px] top-1 w-4 h-4 bg-black border-2 border-ctos-cyan rounded-none"></div>
            <div class="ctos-card p-8 bg-white/5 hover:bg-white/10 transition-colors">
              <div class="flex flex-col md:flex-row md:justify-between mb-4 gap-4">
                <div class="flex items-start gap-4">
                   ${job.logo ? `<div class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-white p-1 rounded-sm flex items-center justify-center"><img src="${job.logo}" onerror="this.onerror=null; this.src='${job.logoLocal}'" alt="${job.company}" class="max-w-full max-h-full object-contain"></div>` : ''}
                   <div>
                     <h3 class="text-lg md:text-xl font-bold text-white uppercase">${job.role}</h3>
                     <p class="text-ctos-cyan font-mono tracking-wide">${job.company}</p>
                   </div>
                </div>
                <div class="text-left md:text-right mt-2 md:mt-0">
                  <p class="text-gray-400 text-sm font-mono">[ ${job.period} ]</p>
                  <p class="text-gray-500 text-sm uppercase">${job.location}</p>
                </div>
              </div>
              <ul class="space-y-2 font-mono text-sm leading-relaxed">
                ${job.description.map((line) => `<li class="flex text-gray-400"><span class="text-ctos-cyan mr-3">></span>${line}</li>`).join("")}
              </ul>
              
              ${job.projects ? `
              <div class="mt-8 pt-6 border-t border-ctos-cyan/10">
                 <h4 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center"><i data-lucide="folder" class="w-3 h-3 mr-2 text-ctos-cyan"></i> Key Projects</h4>
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                   ${job.projects.map(p => `
                     <div class="p-4 border border-white/5 rounded-sm hover:border-ctos-cyan/30 transition-colors">
                       <p class="text-ctos-cyan text-xs font-bold uppercase mb-1 flex items-center gap-2">
                         <span class="w-1 h-1 bg-ctos-cyan rounded-full"></span>
                         ${p.title}
                       </p>
                       <p class="text-gray-500 text-[10px] sm:text-xs mb-2 line-clamp-2">${p.description}</p>
                       
                       ${p.images && p.images.length > 0 ? `
                         <div class="mb-3 flex overflow-x-auto gap-2 pb-1 scrollbar-hide relative z-20">
                           ${p.images.map(img => `
                             <img src="${img}" onclick="if(window.openLightbox){window.openLightbox('${img}')}else{window.open('${img}','_blank')} event.stopPropagation();" class="w-16 h-12 flex-shrink-0 object-cover border border-gray-700 hover:border-ctos-cyan transition-colors cursor-pointer bg-black" loading="lazy" />
                           `).join('')}
                         </div>
                       ` : ''}

                       <div class="flex flex-wrap gap-1">
                         ${p.tech.map(t => `<span class="bg-ctos-cyan/5 text-[10px] px-1 text-gray-400">${t}</span>`).join('')}
                       </div>
                     </div>
                   `).join('')}
                 </div>
              </div>
              ` : ''}

            </div>
          `;
        rolesWrapper.appendChild(jobEl);
      });
      groupEl.appendChild(rolesWrapper);
      experienceContainer.appendChild(groupEl);
    });
  }

  // Education
  if (educationContainer) {
    education.forEach(edu => {
      const el = document.createElement("div");
      el.className = "ctos-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start";
      el.innerHTML = `
         <div class="flex-shrink-0">
            <div class="w-16 h-16 md:w-20 md:h-20 bg-white p-2 border border-white/10 flex items-center justify-center">
               ${edu.logo
          ? `<img src="${edu.logo}" onerror="this.onerror=null; this.src='${edu.logoLocal}'" alt="${edu.institution}" class="w-full h-full object-contain">`
          : `<i data-lucide="graduation-cap" class="w-8 h-8 md:w-10 md:h-10 text-ctos-cyan/50"></i>`
        }
            </div>
         </div>
         <div class="flex-grow">
            <div class="flex flex-col md:flex-row md:justify-between mb-2">
               <h3 class="text-xl font-bold text-white uppercase">${edu.institution}</h3>
               <span class="text-ctos-cyan font-mono text-sm">[ ${edu.period} ]</span>
            </div>
            <p class="text-ctos-cyan text-base md:text-lg mb-1">${edu.degree}</p>
            <p class="text-gray-400 text-sm font-mono mb-4">Grade: <span class="text-white">${edu.grade}</span></p>
            
            <div class="border-t border-white/5 pt-4">
              <p class="text-xs text-gray-600 uppercase tracking-widest mb-2">Acquired Skills</p>
              <div class="flex flex-wrap gap-2">
                 ${edu.skills.map(s => `<span class="px-2 py-1 bg-ctos-cyan/5 text-ctos-cyan text-xs border border-ctos-cyan/10">${s}</span>`).join('')}
              </div>
            </div>
         </div>
      `;
      educationContainer.appendChild(el);
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
        ? `<a href="${projectUrl}" target="_blank" rel="noopener noreferrer" class="ctos-button ctos-button-outline text-xs py-2 px-4 gap-2">INIT_VIEW <i data-lucide="external-link" class="w-3 h-3"></i></a>`
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
              ${project.images && project.images.length > 0 ? `<img src="${project.images[0]}" alt="${project.title}" data-project-index="${index}" onclick="if(window.openLightbox){window.openLightbox(this.src)}else{window.open(this.src,'_blank')} event.stopPropagation();" class="project-img-${index} absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-300 cursor-pointer">` : `<i data-lucide="cpu" class="w-24 h-24 text-gray-800 group-hover:text-ctos-cyan transition-colors duration-300"></i>`}

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
          <span class="text-ctos-cyan transition-transform duration-300 transform origin-center text-xs chevron-arrow">▼</span>
        `;

      const content = document.createElement("div");
      content.className = "overflow-hidden transition-all duration-300 ease-out bg-black/50 border-t border-transparent";
      content.style.maxHeight = "0px"; // Explicit initial state
      content.style.borderColor = "rgba(0, 240, 255, 0.1)";

      const contentInner = document.createElement("div");
      contentInner.className = "p-6 grid gap-4";

      group.items.forEach((cert) => {
        const certEl = document.createElement("div");
        certEl.className = "flex flex-col sm:flex-row items-start text-gray-400 border-l border-gray-700 pl-4 py-2 hover:border-ctos-cyan hover:text-white transition-colors cursor-default gap-4";

        let imageHtml = '';
        if (cert.certificateImage) {
          imageHtml = `
            <div class="flex-shrink-0 w-full sm:w-32 mt-2 sm:mt-0 cursor-pointer group/img" onclick="if(window.openLightbox){window.openLightbox('${cert.certificateImage}')}else{window.open('${cert.certificateImage}','_blank')} event.stopPropagation();">
                <img src="${cert.certificateImage}" alt="${cert.title || cert.name}" class="w-full h-auto border border-gray-700 group-hover/img:border-ctos-cyan transition-colors shadow-sm">
                <div class="text-[10px] text-center mt-1 text-ctos-cyan opacity-0 group-hover/img:opacity-100 transition-opacity">[VIEW CERT]</div>
            </div>`;
        }

        certEl.innerHTML = `
            <div class="flex-grow">
              <span class="block text-gray-200 font-bold uppercase text-sm mb-1">${cert.title || cert.name}</span>
              <div class="flex flex-wrap gap-2 text-xs text-gray-500 font-mono mb-2">
                <span class="text-ctos-cyan">${cert.issuer}</span><span class="hidden sm:inline text-gray-700">|</span><span>${cert.date}</span>
              </div>
              ${cert.description ? `<p class="text-sm text-gray-400 mb-2 leading-relaxed">${cert.description}</p>` : ''}
              ${cert.credentialUrl ? `<a href="${cert.credentialUrl}" target="_blank" class="text-xs text-ctos-cyan hover:underline decoration-1 underline-offset-2 flex items-center gap-1"><span class="w-1 h-1 bg-ctos-cyan rounded-full"></span> Validate Credential</a>` : ''}
            </div>
            ${imageHtml}
          `;
        contentInner.appendChild(certEl);
      });
      content.appendChild(contentInner);

      header.addEventListener("click", () => {
        const isOpen = content.style.maxHeight !== "0px";
        if (isOpen) {
          content.style.maxHeight = "0px";
          content.classList.remove("border-t", "border-ctos-cyan/30");
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.classList.add("border-t", "border-ctos-cyan/30");
        }

        // Icon rotation
        const chevron = header.querySelector(".chevron-arrow");
        if (chevron) {
          chevron.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
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

    gsap.from("#education", { scrollTrigger: { trigger: "#education", start: "top 80%" }, opacity: 0, y: 30 });

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

  // Initialize Icons at the VERY END to catch all dynamic elements
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // ---------- MAP INTEGRATION ----------
  const locations = [
    { name: "Envirotech Ag Systems", role: "Embedded System Engineer", lat: 49.8951, lng: -97.1384, type: "work" },
    { name: "Climate Control Systems", role: "Controls / Software Developer", lat: 42.0532, lng: -82.6012, type: "work" },
    { name: "Kryx Controls", role: "Co-Founder", lat: 42.0532, lng: -82.5900, type: "work" }, // Slight offset
    { name: "Amity University", role: "MBA", lat: 28.5355, lng: 77.3910, type: "edu" },
    { name: "Conestoga College", role: "PG Diploma", lat: 43.3915, lng: -80.4072, type: "edu" },
    { name: "Promech Industries", role: "Embedded Intern", lat: 11.0168, lng: 76.9558, type: "work" },
    { name: "Big Data Labs", role: "App Dev Intern", lat: 13.0827, lng: 80.2707, type: "work" },
    { name: "SKCET", role: "Bachelor of Engineering", lat: 10.9363, lng: 76.9567, type: "edu" },
    { name: "PSG College", role: "Diploma ECE", lat: 11.0247, lng: 77.0099, type: "edu" },
    { name: "Opto 22 Training", role: "Professional Training", lat: 33.4936, lng: -117.1484, type: "edu" }
  ];

  function initGlobe() {
    const mapContainer = document.getElementById("locations-map");
    if (!mapContainer || typeof Globe === 'undefined') return;

    // Clear previous if any (though unlikely on fresh load)
    mapContainer.innerHTML = '';

    const globe = Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .pointsData(locations)
      .pointLat('lat')
      .pointLng('lng')
      .pointColor(d => d.type === 'work' ? '#00f0ff' : '#ff003c')
      .pointAltitude(0.02)
      .pointRadius(0.5)
      .pointsMerge(true)
      .pointLabel(d => `
        <div style="background: rgba(0,0,0,0.9); border: 1px solid ${d.type === 'work' ? '#00f0ff' : '#ff003c'}; padding: 8px; border-radius: 4px; font-family: 'Share Tech Mono', monospace;">
          <b style="color: ${d.type === 'work' ? '#00f0ff' : '#ff003c'}">${d.name}</b><br/>
          <span style="color: #ccc; font-size: 12px;">${d.role}</span>
        </div>
      `)
      (mapContainer);

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

    // PC Controls
    globe.controls().enableZoom = true;
    globe.controls().enablePan = false;
    globe.controls().minDistance = 120; // Allow closer zoom (Earth radius is ~100)
    globe.controls().maxDistance = 600;

    // --- UI INTERACTION LOGIC ---
    const zoomInBtn = document.getElementById("globe-zoom-in");
    const zoomOutBtn = document.getElementById("globe-zoom-out");

    // Info Card Elements
    const infoCard = document.getElementById("globe-info-card");
    const closeInfoBtn = document.getElementById("close-globe-info");
    const infoTitle = document.getElementById("globe-location-title");
    const infoRole = document.getElementById("globe-location-role");

    // Zoom Button Logic
    if (zoomInBtn && zoomOutBtn) {
      zoomInBtn.addEventListener("click", () => {
        const currentDist = globe.camera().position.length();
        const newDist = Math.max(120, currentDist - 50);
        globe.camera().position.setLength(newDist);
        globe.controls().update();
      });
      zoomOutBtn.addEventListener("click", () => {
        const currentDist = globe.camera().position.length();
        const newDist = Math.min(600, currentDist + 50);
        globe.camera().position.setLength(newDist);
        globe.controls().update();
      });
    }

    // Handle Closing Card
    if (closeInfoBtn) {
      closeInfoBtn.addEventListener("click", () => {
        infoCard.classList.add("hidden", "translate-y-4", "opacity-0");
        infoCard.classList.remove("flex", "translate-y-0", "opacity-100");
        // Resume Rotation
        globe.controls().autoRotate = true;
      });
    }

    // Update Globe to handle click
    globe.onPointClick(d => {
      globe.controls().autoRotate = false;
      globe.pointOfView({ lat: d.lat, lng: d.lng, altitude: 1.5 }, 1500);

      // Show Info
      if (infoCard) {
        infoTitle.textContent = d.name;
        infoRole.textContent = d.role;

        infoCard.classList.remove("hidden", "translate-y-4", "opacity-0");
        infoCard.classList.add("flex", "flex-col", "translate-y-0", "opacity-100");
      }
    });

    // Fix height/width to match container
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        globe.width(width);
        globe.height(height);
      }
    });

    resizeObserver.observe(mapContainer);
  }

  // Initialize Globe
  initGlobe();

});
