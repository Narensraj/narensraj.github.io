category: "Firmware Development",
    items: ["C/C++", "Rust", "Python", "Embedded C"]
        },
{
    category: "Platforms",
        items: ["ESP32", "STM32", "ARM Cortex", "PIC", "Arduino"]
},
{
    category: "RTOS",
        items: ["FreeRTOS", "Zephyr", "Bare Metal"]
},
{
    category: "Communication",
        items: ["I2C", "SPI", "UART", "CAN", "Modbus", "RS-485"]
},
{
    category: "Wireless & IoT",
        items: ["Wi-Fi", "BLE", "LoRa", "MQTT", "WebSockets"]
},
{
    category: "Tools & PCB",
        items: ["KiCad", "Altium", "Git", "VS Code", "PlatformIO"]
}
    ];

const experience = [
    {
        company: "Envirotech Ag Systems Ltd",
        role: "Embedded System Engineer",
        period: "Present",
        location: "Winnipeg, Manitoba, Canada",
        description: [
            "Leading the design and development of embedded control systems for agricultural automation.",
            "Implementing secure OTA updates and real-time monitoring solutions.",
            "Collaborating with cross-functional teams to deploy systems across North America."
        ]
    },
    {
        company: "Confidential Industrial Automation Firm",
        role: "Embedded Firmware Engineer",
        period: "Previous",
        location: "India",
        description: [
            "Developed firmware for industrial water-treatment controllers using CAN/Modbus.",
            "Designed multi-zone irrigation and fertigation systems with SCADA UI.",
            "Optimized low-power sensor networks for remote monitoring."
        ]
    }
];

const projects = [
    {
        title: "Real-Time Automation Controller",
        description: "Developed a real-time automation controller for commercial greenhouses using ESP32 and FreeRTOS. Implemented secure OTA updates and a robust fail-safe architecture.",
        tech: ["ESP32", "FreeRTOS", "OTA", "C++"],
        featured: true
    },
    {
        title: "Remote Sensor Dashboard",
        description: "Built a secure remote sensor dashboard with WebSocket integration for live data streaming and SD-based trend logging for historical analysis.",
        tech: ["IoT", "WebSockets", "Embedded Web Server"],
        featured: true
    },
    {
        title: "Modbus RTU Framework",
        description: "Designed a modular Modbus RTU framework for multi-sensor industrial networks, enabling seamless integration of various industrial sensors.",
        tech: ["Modbus", "RS-485", "Industrial Automation"],
        featured: false
    },
    {
        title: "Secure OTA System",
        description: "Delivered encrypted OTA updates via ZIP with AES-256-CBC on ESP32, ensuring firmware security and integrity during remote updates.",
        tech: ["Security", "AES-256", "Firmware"],
        featured: false
    }
];

// Populate Skills
const skillsGrid = document.getElementById('skills-grid');
if (skillsGrid) {
    console.log('Populating skills...');
    skills.forEach((skillGroup, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'glass-card p-6 rounded-2xl skill-card';

        const itemsHtml = skillGroup.items.map(item =>
            `<span class="inline-block px-3 py-1 bg-white/5 rounded-full text-sm text-tech-blue mr-2 mb-2 border border-white/5 hover:border-tech-blue/30 transition-colors">${item}</span>`
        ).join('');

        skillCard.innerHTML = `
                <h3 class="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">${skillGroup.category}</h3>
                <div class="flex flex-wrap">
                    ${itemsHtml}
                </div>
            `;
        skillsGrid.appendChild(skillCard);
    });
} else {
    console.error('Skills grid not found');
}

// Populate Experience
const experienceContainer = document.getElementById('experience-container');
if (experienceContainer) {
    console.log('Populating experience...');
    experience.forEach((job, index) => {
        const jobEl = document.createElement('div');
        jobEl.className = 'relative pl-8 border-l border-white/10 experience-card';

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
                        ${job.description.map(desc => `
                            <li class="flex items-start text-gray-400">
                                <span class="text-tech-blue mr-2 mt-1.5">▹</span>
                                <span>${desc}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        experienceContainer.appendChild(jobEl);
    });
} else {
    console.error('Experience container not found');
}

// Populate Projects
const projectsContainer = document.getElementById('projects-container');
if (projectsContainer) {
    console.log('Populating projects...');
    projects.forEach((project, index) => {
        const projectEl = document.createElement('div');
        projectEl.className = `grid md:grid-cols-12 gap-8 items-center project-card ${index % 2 === 1 ? 'md:text-right' : ''}`;

        const contentClass = index % 2 === 1 ? 'md:col-start-6 md:col-end-13 order-2 md:order-2' : 'md:col-start-1 md:col-end-8 order-2 md:order-1';
        const imageClass = index % 2 === 1 ? 'md:col-start-1 md:col-end-6 order-1 md:order-1' : 'md:col-start-8 md:col-end-13 order-1 md:order-2';

        // Placeholder image generation (abstract tech pattern)
        const bgGradient = index % 2 === 0 ? 'from-tech-blue/20 to-purple-500/20' : 'from-purple-500/20 to-tech-blue/20';

        projectEl.innerHTML = `
                <div class="${contentClass} relative z-10">
                    <p class="text-tech-blue font-mono text-sm mb-2">Featured Project</p>
                    <h3 class="text-3xl font-bold text-white mb-4 hover:text-tech-blue transition-colors cursor-pointer">${project.title}</h3>
                    <div class="glass p-6 rounded-xl text-gray-400 mb-6 shadow-xl">
                        ${project.description}
                    </div>
                    <ul class="flex flex-wrap gap-4 text-sm text-gray-400 font-mono mb-8 ${index % 2 === 1 ? 'md:justify-end' : ''}">
                        ${project.tech.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                    <div class="flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}">
                        <a href="#" class="text-gray-300 hover:text-tech-blue transition-colors"><i data-lucide="github" class="w-6 h-6"></i></a>
                        <a href="#" class="text-gray-300 hover:text-tech-blue transition-colors"><i data-lucide="external-link" class="w-6 h-6"></i></a>
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
} else {
    console.error('Projects container not found');
}

if (typeof lucide !== 'undefined') {
    lucide.createIcons(); // Re-run for injected content
}

// Animations (GSAP)
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });
    }

    // Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                gsap.fromTo(mobileMenu, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.3 });
            } else {
                gsap.to(mobileMenu, { height: 0, opacity: 0, duration: 0.3, onComplete: () => mobileMenu.classList.add('hidden') });
            }
        });
    }

    // Hero Animation
    gsap.from('.hero-content', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
    });

    // Section Headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // About Section
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2
    });

    gsap.from('.about-stats', {
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4
    });

    // Skills Animation
    gsap.utils.toArray('.skill-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
            },
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: i * 0.1
        });
    });

    // Experience Animation
    gsap.utils.toArray('.experience-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2
        });
    });

    // Projects Animation
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2
        });
    });

    // Contact Animation
    gsap.from('.contact-content', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8
    });
}
});
const skills = [
    {
        category: "Firmware Development",
        items: ["C/C++", "Rust", "Python", "Embedded C"]
    },
    {
        category: "Platforms",
        items: ["ESP32", "STM32", "ARM Cortex", "PIC", "Arduino"]
    },
    {
        category: "RTOS",
        items: ["FreeRTOS", "Zephyr", "Bare Metal"]
    },
    {
        category: "Communication",
        items: ["I2C", "SPI", "UART", "CAN", "Modbus", "RS-485"]
    },
    {
        category: "Wireless & IoT",
        items: ["Wi-Fi", "BLE", "LoRa", "MQTT", "WebSockets"]
    },
    {
        category: "Tools & PCB",
        items: ["KiCad", "Altium", "Git", "VS Code", "PlatformIO"]
    }
];

const experience = [
    {
        company: "Envirotech Ag Systems Ltd",
        role: "Embedded System Engineer",
        period: "Present",
        location: "Winnipeg, Manitoba, Canada",
        description: [
            "Leading the design and development of embedded control systems for agricultural automation.",
            "Implementing secure OTA updates and real-time monitoring solutions.",
            "Collaborating with cross-functional teams to deploy systems across North America."
        ]
    },
    {
        company: "Confidential Industrial Automation Firm",
        role: "Embedded Firmware Engineer",
        period: "Previous",
        location: "India",
        description: [
            "Developed firmware for industrial water-treatment controllers using CAN/Modbus.",
            "Designed multi-zone irrigation and fertigation systems with SCADA UI.",
            "Optimized low-power sensor networks for remote monitoring."
        ]
    }
];

const projects = [
    {
        title: "Real-Time Automation Controller",
        description: "Developed a real-time automation controller for commercial greenhouses using ESP32 and FreeRTOS. Implemented secure OTA updates and a robust fail-safe architecture.",
        tech: ["ESP32", "FreeRTOS", "OTA", "C++"],
        featured: true
    },
    {
        title: "Remote Sensor Dashboard",
        description: "Built a secure remote sensor dashboard with WebSocket integration for live data streaming and SD-based trend logging for historical analysis.",
        tech: ["IoT", "WebSockets", "Embedded Web Server"],
        featured: true
    },
    {
        title: "Modbus RTU Framework",
        description: "Designed a modular Modbus RTU framework for multi-sensor industrial networks, enabling seamless integration of various industrial sensors.",
        tech: ["Modbus", "RS-485", "Industrial Automation"],
        featured: false
    },
    {
        title: "Secure OTA System",
        description: "Delivered encrypted OTA updates via ZIP with AES-256-CBC on ESP32, ensuring firmware security and integrity during remote updates.",
        tech: ["Security", "AES-256", "Firmware"],
        featured: false
    }
];

// Populate Skills
const skillsGrid = document.getElementById('skills-grid');
if (skillsGrid) {
    skills.forEach((skillGroup, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'glass-card p-6 rounded-2xl skill-card';

        const itemsHtml = skillGroup.items.map(item =>
            `<span class="inline-block px-3 py-1 bg-white/5 rounded-full text-sm text-tech-blue mr-2 mb-2 border border-white/5 hover:border-tech-blue/30 transition-colors">${item}</span>`
        ).join('');

        skillCard.innerHTML = `
            <h3 class="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">${skillGroup.category}</h3>
            <div class="flex flex-wrap">
                ${itemsHtml}
            </div>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// Populate Experience
const experienceContainer = document.getElementById('experience-container');
if (experienceContainer) {
    experience.forEach((job, index) => {
        const jobEl = document.createElement('div');
        jobEl.className = 'relative pl-8 border-l border-white/10 experience-card';

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
                    ${job.description.map(desc => `
                        <li class="flex items-start text-gray-400">
                            <span class="text-tech-blue mr-2 mt-1.5">▹</span>
                            <span>${desc}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        experienceContainer.appendChild(jobEl);
    });
}

// Populate Projects
const projectsContainer = document.getElementById('projects-container');
if (projectsContainer) {
    projects.forEach((project, index) => {
        const projectEl = document.createElement('div');
        projectEl.className = `grid md:grid-cols-12 gap-8 items-center project-card ${index % 2 === 1 ? 'md:text-right' : ''}`;

        const contentClass = index % 2 === 1 ? 'md:col-start-6 md:col-end-13 order-2 md:order-2' : 'md:col-start-1 md:col-end-8 order-2 md:order-1';
        const imageClass = index % 2 === 1 ? 'md:col-start-1 md:col-end-6 order-1 md:order-1' : 'md:col-start-8 md:col-end-13 order-1 md:order-2';

        // Placeholder image generation (abstract tech pattern)
        const bgGradient = index % 2 === 0 ? 'from-tech-blue/20 to-purple-500/20' : 'from-purple-500/20 to-tech-blue/20';

        projectEl.innerHTML = `
            <div class="${contentClass} relative z-10">
                <p class="text-tech-blue font-mono text-sm mb-2">Featured Project</p>
                <h3 class="text-3xl font-bold text-white mb-4 hover:text-tech-blue transition-colors cursor-pointer">${project.title}</h3>
                <div class="glass p-6 rounded-xl text-gray-400 mb-6 shadow-xl">
                    ${project.description}
                </div>
                <ul class="flex flex-wrap gap-4 text-sm text-gray-400 font-mono mb-8 ${index % 2 === 1 ? 'md:justify-end' : ''}">
                    ${project.tech.map(t => `<li>${t}</li>`).join('')}
                </ul>
                <div class="flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}">
                    <a href="#" class="text-gray-300 hover:text-tech-blue transition-colors"><i data-lucide="github" class="w-6 h-6"></i></a>
                    <a href="#" class="text-gray-300 hover:text-tech-blue transition-colors"><i data-lucide="external-link" class="w-6 h-6"></i></a>
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

lucide.createIcons(); // Re-run for injected content

// Animations (GSAP)
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });
}

// Mobile Menu
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            gsap.fromTo(mobileMenu, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.3 });
        } else {
            gsap.to(mobileMenu, { height: 0, opacity: 0, duration: 0.3, onComplete: () => mobileMenu.classList.add('hidden') });
        }
    });
}

// Hero Animation
gsap.from('.hero-content', {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2
});

// Section Headers
gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// About Section
gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about-text',
        start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2
});

gsap.from('.about-stats', {
    scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.4
});

// Skills Animation
gsap.utils.toArray('.skill-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: i * 0.1
    });
});

// Experience Animation
gsap.utils.toArray('.experience-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2
    });
});

// Projects Animation
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2
    });
});

// Contact Animation
gsap.from('.contact-content', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 70%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8
});
