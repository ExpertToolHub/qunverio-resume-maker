/* ==========================================================================
   QUNVERIO PRO RESUME MAKER - COMPLETE JAVASCRIPT ENGINE
   Includes: 52 Templates Registry, State Management, Local Storage Autosave,
   Live Preview Engine, Dynamic Forms, QR Code, Image Handling, Export to PDF/PNG/Print.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. TEMPLATE REGISTRY (52 DISTINCT TEMPLATES)
    const TEMPLATES = [
        // Category: ATS-Friendly Classic (1-10)
        { id: 1, name: "Classic Professional", cat: "ats", desc: "Clean single-column standard ATS layout." },
        { id: 2, name: "Clean ATS Resume", cat: "ats", desc: "Centered header with subtle section borders." },
        { id: 3, name: "Modern ATS Resume", cat: "ats", desc: "Left accent bar on section headers." },
        { id: 4, name: "Traditional Corporate", cat: "ats", desc: "Formal serif typography for conservative fields." },
        { id: 5, name: "Executive Classic", cat: "ats", desc: "Strong typography hierarchy for senior roles." },
        { id: 6, name: "Minimal Black & White", cat: "ats", desc: "Pure black and white high-readability design." },
        { id: 7, name: "Academic Simple", cat: "ats", desc: "Expanded section spacing for research & CVs." },
        { id: 8, name: "Compact One-Page", cat: "ats", desc: "Tight margins designed to fit rich data on 1 page." },
        { id: 9, name: "Professional Chronological", cat: "ats", desc: "Focuses heavily on work timeline." },
        { id: 10, name: "Simple Fresher Resume", cat: "ats", desc: "Highlights education and skills first." },

        // Category: Modern Professional (11-20)
        { id: 11, name: "Modern Two-Column", cat: "modern", desc: "Clean 2-column sidebar layout." },
        { id: 12, name: "Header Banner Blue", cat: "modern", desc: "Full-width colored header block." },
        { id: 13, name: "Corporate Gray", cat: "modern", desc: "Subtle gray accents and elegant dividers." },
        { id: 14, name: "Professional Sidebar", cat: "modern", desc: "Left sidebar with contact and skills." },
        { id: 15, name: "Clean Teal Modern", cat: "modern", desc: "Fresh teal accents with bold section headings." },
        { id: 16, name: "Minimalist Premium", cat: "modern", desc: "Spacious layout with sophisticated typography." },
        { id: 17, name: "Contemporary Executive", cat: "modern", desc: "Balanced two-column structure for managers." },
        { id: 18, name: "Refined Grid Layout", cat: "modern", desc: "Structured grid alignment for project highlights." },
        { id: 19, name: "Urban Professional", cat: "modern", desc: "Sleek dark accent headers." },
        { id: 20, name: "Metro Modern", cat: "modern", desc: "Compact modern sidebar layout." },

        // Category: Executive (21-27)
        { id: 21, name: "Executive Elite", cat: "executive", desc: "Gold/Dark accents for C-level leadership." },
        { id: 22, name: "Luxury Minimal", cat: "executive", desc: "Elegant serif typography with generous line height." },
        { id: 23, name: "Director Profile", cat: "executive", desc: "Prominent summary callout box." },
        { id: 24, name: "Senior Leadership", cat: "executive", desc: "Structured metrics and achievements layout." },
        { id: 25, name: "Corporate Vice President", cat: "executive", desc: "High impact header banner." },
        { id: 26, name: "Board Member CV", cat: "executive", desc: "Multi-page formal executive format." },
        { id: 27, name: "Strategic Manager", cat: "executive", desc: "Clean timeline presentation." },

        // Category: Fresher & Student (28-34)
        { id: 28, name: "Student Starter", cat: "fresher", desc: "Prominent education and academic projects." },
        { id: 29, name: "Campus Placement", cat: "fresher", desc: "Structured layout for university recruiters." },
        { id: 30, name: "College Graduate", cat: "fresher", desc: "Highlights coursework, awards and skills." },
        { id: 31, name: "Internship Applicant", cat: "fresher", desc: "Compact entry-level profile." },
        { id: 32, name: "Engineering Graduate", cat: "fresher", desc: "Detailed technical project showcase." },
        { id: 33, name: "Academic Scholar", cat: "fresher", desc: "Clean academic honors & research focus." },
        { id: 34, name: "Entry-Level Associate", cat: "fresher", desc: "Balanced education and internship layout." },

        // Category: Technical & IT (35-40)
        { id: 35, name: "Software Developer", cat: "tech", desc: "Prominent skills badge and project links." },
        { id: 36, name: "Data Scientist / Analyst", cat: "tech", desc: "Clean metrics, tools, and research layout." },
        { id: 37, name: "Cybersecurity Specialist", cat: "tech", desc: "Monospace font accents with certs highlight." },
        { id: 38, name: "DevOps & Cloud Engineer", cat: "tech", desc: "Structured technical stack layout." },
        { id: 39, name: "Full-Stack Engineer", cat: "tech", desc: "Balanced GitHub/Portfolio showcase." },
        { id: 40, name: "IT Project Manager", cat: "tech", desc: "Technical skills and methodology focus." },

        // Category: Creative (41-45)
        { id: 41, name: "Creative Designer", cat: "creative", desc: "Bold header with expressive layout." },
        { id: 42, name: "UI/UX Portfolio Resume", cat: "creative", desc: "Prominent QR code and project highlights." },
        { id: 43, name: "Bold Typography", cat: "creative", desc: "High contrast header with sleek dividers." },
        { id: 44, name: "Minimal Creative", cat: "creative", desc: "Asymmetric layout for visual artists." },
        { id: 45, name: "Content & Marketing", cat: "creative", desc: "Highlights campaign results and portfolio." },

        // Category: International & Specialized (46-52)
        { id: 46, name: "Europass Inspired CV", cat: "specialized", desc: "Standard European photo & contact structure." },
        { id: 47, name: "Global Consultant", cat: "specialized", desc: "Multi-country work authorization format." },
        { id: 48, name: "Medical & Healthcare", cat: "specialized", desc: "Licenses and clinical rotations focus." },
        { id: 49, name: "Sales Executive", cat: "specialized", desc: "Quota achievements & revenue growth highlight." },
        { id: 50, name: "Finance & Banking", cat: "specialized", desc: "Clean corporate numbers & certs layout." },
        { id: 51, name: "Legal & Attorney CV", cat: "specialized", desc: "Bar admissions & publication focus." },
        { id: 52, name: "Research Fellow", cat: "specialized", desc: "Publications, citations, and grant awards." }
    ];

    // 2. STATE MANAGEMENT
    let state = {
        templateId: 1,
        accentColor: "#2563eb",
        pageSize: "a4",
        fontFamily: "Inter, sans-serif",
        lineHeight: "1.5",
        zoom: 100,
        personal: {
            name: "John Doe",
            headline: "Senior Full-Stack Engineer",
            email: "john.doe@example.com",
            phone: "+1 (555) 019-2834",
            city: "San Francisco",
            country: "CA, USA",
            linkedin: "linkedin.com/in/johndoe",
            github: "github.com/johndoe",
            website: "johndoe.dev"
        },
        summary: "Results-driven Senior Software Engineer with 6+ years of experience building scalable web applications, distributed systems, and modern front-end architectures. Proven track record of leading cross-functional teams and optimizing cloud infrastructure.",
        experience: [
            { id: 1, title: "Senior Software Engineer", company: "TechCorp Systems", period: "2022 - Present", desc: "Architected microservices using Node.js and AWS. Improved system throughput by 40% and mentored 5 junior engineers." },
            { id: 2, title: "Full-Stack Developer", company: "WebFlow Media", period: "2020 - 2022", desc: "Built responsive Web applications using React, TypeScript, and PostgreSQL. Reduced initial page load time by 50%." }
        ],
        education: [
            { id: 1, degree: "B.S. in Computer Science", school: "University of California, Berkeley", period: "2016 - 2020", gpa: "3.8/4.0" }
        ],
        skills: "JavaScript, TypeScript, React.js, Node.js, Python, PostgreSQL, Docker, AWS, System Design, REST APIs, Git, CI/CD",
        projects: [
            { id: 1, title: "E-Commerce Microservices Platform", tech: "React, Node.js, Docker, Kubernetes", desc: "Built end-to-end multi-tenant marketplace platform handling 10k daily active users." }
        ],
        certs: "AWS Certified Solutions Architect - Associate
Google Cloud Professional Data Engineer",
        languages: "English (Native), Spanish (Fluent)",
        achievements: "1st Place Winner - National Hackathon 2024
Employee of the Quarter Q2 2025",
        customTitle: "Publications & Research",
        customContent: "Co-authored 'Scalable Microservices in Cloud Environments' published in Tech Journal 2024.",
        media: {
            showPhoto: false,
            photoShape: "circle",
            photoData: null,
            showSig: false,
            sigPlace: "San Francisco, CA | October 2026",
            sigData: null,
            showQr: false
        }
    };

    // Load state from localStorage if exists
    const saved = localStorage.getItem('qunverio_resume_data');
    if (saved) {
        try { state = JSON.parse(saved); } catch(e){}
    }

    function saveState() {
        localStorage.setItem('qunverio_resume_data', JSON.stringify(state));
        renderResume();
    }

    // 3. UI INITIALIZATION & BINDINGS
    const templateGrid = document.getElementById('template-grid');
    const templateModal = document.getElementById('template-modal');
    const resumePaper = document.getElementById('resume-paper');

    // Populate Template Gallery
    function populateGallery(filter = 'all') {
        templateGrid.innerHTML = '';
        TEMPLATES.forEach(t => {
            if (filter !== 'all' && t.cat !== filter) return;
            
            const card = document.createElement('div');
            card.className = `template-card ${state.templateId === t.id ? 'active' : ''}`;
            card.onclick = () => {
                state.templateId = t.id;
                saveState();
                populateGallery(filter);
                templateModal.classList.remove('show');
            };
            card.innerHTML = `
                <div class="preview-thumb">
                    <div>
                        <i class="fa-solid fa-file-lines fa-2x" style="color:var(--qvr-primary); margin-bottom:8px;"></i>
                        <p><strong>${t.name}</strong></p>
                    </div>
                </div>
                <div class="card-info">
                    <h5>${t.name}</h5>
                    <span>Category: ${t.cat.toUpperCase()}</span>
                </div>
            `;
            templateGrid.appendChild(card);
        });
    }

    populateGallery();

    // Gallery Modal Controls
    document.getElementById('btn-gallery-toggle').onclick = () => { populateGallery(); templateModal.classList.add('show'); };
    document.getElementById('btn-close-gallery').onclick = () => templateModal.classList.remove('show');
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            populateGallery(btn.dataset.cat);
        };
    });

    // Navigation Tabs
    document.querySelectorAll('.qvr-nav-list li').forEach(tab => {
        tab.onclick = () => {
            document.querySelectorAll('.qvr-nav-list li').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.qvr-section').forEach(s => s.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`sec-${tab.dataset.sec}`).classList.add('active');
        };
    });

    // Inputs Binding
    const bindVal = (id, obj, key) => {
        const el = document.getElementById(id);
        if(!el) return;
        el.value = obj[key] || '';
        el.oninput = (e) => { obj[key] = e.target.value; saveState(); };
    };

    bindVal('inp-name', state.personal, 'name');
    bindVal('inp-headline', state.personal, 'headline');
    bindVal('inp-email', state.personal, 'email');
    bindVal('inp-phone', state.personal, 'phone');
    bindVal('inp-city', state.personal, 'city');
    bindVal('inp-country', state.personal, 'country');
    bindVal('inp-linkedin', state.personal, 'linkedin');
    bindVal('inp-github', state.personal, 'github');
    bindVal('inp-website', state.personal, 'website');
    bindVal('inp-summary', state, 'summary');
    bindVal('inp-skills', state, 'skills');
    bindVal('inp-certs', state, 'certs');
    bindVal('inp-languages', state, 'languages');
    bindVal('inp-achievements', state, 'achievements');
    bindVal('inp-custom-title', state, 'customTitle');
    bindVal('inp-custom-content', state, 'customContent');
    bindVal('inp-accent-color', state, 'accentColor');
    bindVal('inp-sig-place', state.media, 'sigPlace');

    // Dynamic Lists (Experience, Education, Projects)
    function renderDynamicLists() {
        // Experience List
        const expContainer = document.getElementById('experience-list');
        expContainer.innerHTML = '';
        state.experience.forEach((exp, idx) => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <span class="remove-btn" onclick="removeExp(${idx})"><i class="fa-solid fa-trash"></i></span>
                <div class="qvr-form-grid">
                    <div class="field"><label>Job Title</label><input type="text" value="${exp.title}" onchange="updateExp(${idx}, 'title', this.value)"></div>
                    <div class="field"><label>Company Name</label><input type="text" value="${exp.company}" onchange="updateExp(${idx}, 'company', this.value)"></div>
                    <div class="field"><label>Period</label><input type="text" value="${exp.period}" onchange="updateExp(${idx}, 'period', this.value)"></div>
                </div>
                <div class="field"><label>Responsibilities & Key Achievements</label><textarea rows="3" onchange="updateExp(${idx}, 'desc', this.value)">${exp.desc}</textarea></div>
            `;
            expContainer.appendChild(card);
        });

        // Education List
        const eduContainer = document.getElementById('education-list');
        eduContainer.innerHTML = '';
        state.education.forEach((edu, idx) => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <span class="remove-btn" onclick="removeEdu(${idx})"><i class="fa-solid fa-trash"></i></span>
                <div class="qvr-form-grid">
                    <div class="field"><label>Degree / Specialization</label><input type="text" value="${edu.degree}" onchange="updateEdu(${idx}, 'degree', this.value)"></div>
                    <div class="field"><label>Institution Name</label><input type="text" value="${edu.school}" onchange="updateEdu(${idx}, 'school', this.value)"></div>
                    <div class="field"><label>Graduation Year / Period</label><input type="text" value="${edu.period}" onchange="updateEdu(${idx}, 'period', this.value)"></div>
                </div>
            `;
            eduContainer.appendChild(card);
        });

        // Projects List
        const projContainer = document.getElementById('projects-list');
        projContainer.innerHTML = '';
        state.projects.forEach((proj, idx) => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <span class="remove-btn" onclick="removeProj(${idx})"><i class="fa-solid fa-trash"></i></span>
                <div class="qvr-form-grid">
                    <div class="field"><label>Project Title</label><input type="text" value="${proj.title}" onchange="updateProj(${idx}, 'title', this.value)"></div>
                    <div class="field"><label>Technologies Used</label><input type="text" value="${proj.tech}" onchange="updateProj(${idx}, 'tech', this.value)"></div>
                </div>
                <div class="field"><label>Description</label><textarea rows="2" onchange="updateProj(${idx}, 'desc', this.value)">${proj.desc}</textarea></div>
            `;
            projContainer.appendChild(card);
        });
    }

    window.updateExp = (i, k, v) => { state.experience[i][k] = v; saveState(); };
    window.removeExp = (i) => { state.experience.splice(i, 1); saveState(); renderDynamicLists(); };
    document.getElementById('add-exp-btn').onclick = () => { state.experience.push({ id: Date.now(), title: "", company: "", period: "", desc: "" }); saveState(); renderDynamicLists(); };

    window.updateEdu = (i, k, v) => { state.education[i][k] = v; saveState(); };
    window.removeEdu = (i) => { state.education.splice(i, 1); saveState(); renderDynamicLists(); };
    document.getElementById('add-edu-btn').onclick = () => { state.education.push({ id: Date.now(), degree: "", school: "", period: "" }); saveState(); renderDynamicLists(); };

    window.updateProj = (i, k, v) => { state.projects[i][k] = v; saveState(); };
    window.removeProj = (i) => { state.projects.splice(i, 1); saveState(); renderDynamicLists(); };
    document.getElementById('add-proj-btn').onclick = () => { state.projects.push({ id: Date.now(), title: "", tech: "", desc: "" }); saveState(); renderDynamicLists(); };

    renderDynamicLists();

    // Media & Checkbox Controls
    const chkPhoto = document.getElementById('chk-show-photo');
    chkPhoto.checked = state.media.showPhoto;
    chkPhoto.onchange = (e) => { state.media.showPhoto = e.target.checked; saveState(); };

    const selShape = document.getElementById('sel-photo-shape');
    selShape.value = state.media.photoShape;
    selShape.onchange = (e) => { state.media.photoShape = e.target.value; saveState(); };

    document.getElementById('inp-photo-file').onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (evt) => { state.media.photoData = evt.target.result; state.media.showPhoto = true; chkPhoto.checked = true; saveState(); };
            reader.readAsDataURL(file);
        }
    };

    const chkSig = document.getElementById('chk-show-sig');
    chkSig.checked = state.media.showSig;
    chkSig.onchange = (e) => { state.media.showSig = e.target.checked; saveState(); };

    document.getElementById('inp-sig-file').onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (evt) => { state.media.sigData = evt.target.result; state.media.showSig = true; chkSig.checked = true; saveState(); };
            reader.readAsDataURL(file);
        }
    };

    const chkQr = document.getElementById('chk-show-qr');
    chkQr.checked = state.media.showQr;
    chkQr.onchange = (e) => { state.media.showQr = e.target.checked; saveState(); };

    // Layout Controls
    document.getElementById('sel-page-size').onchange = (e) => { state.pageSize = e.target.value; saveState(); };
    document.getElementById('sel-font-family').onchange = (e) => { state.fontFamily = e.target.value; saveState(); };
    document.getElementById('sel-line-height').onchange = (e) => { state.lineHeight = e.target.value; saveState(); };

    // Zoom Controls
    document.getElementById('btn-zoom-in').onclick = () => { state.zoom = Math.min(state.zoom + 10, 150); applyZoom(); };
    document.getElementById('btn-zoom-out').onclick = () => { state.zoom = Math.max(state.zoom - 10, 60); applyZoom(); };
    function applyZoom() {
        document.getElementById('zoom-level').innerText = `${state.zoom}%`;
        resumePaper.style.transform = `scale(${state.zoom / 100})`;
    }

    // JSON Data Export/Import
    document.getElementById('btn-json-export').onclick = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const dl = document.createElement('a');
        dl.setAttribute("href", dataStr);
        dl.setAttribute("download", `${state.personal.name.replace(/\s+/g, '_')}_Resume_Data.json`);
        dl.click();
    };

    document.getElementById('json-import-input').onchange = (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = (evt) => {
                try {
                    state = JSON.parse(evt.target.result);
                    saveState();
                    location.reload();
                } catch(err) { alert("Invalid JSON file format!"); }
            };
            reader.readAsDataURL(file);
        }
    };

    document.getElementById('btn-reset').onclick = () => {
        if(confirm("Are you sure you want to reset all resume data?")) {
            localStorage.removeItem('qunverio_resume_data');
            location.reload();
        }
    };

    // 4. MAIN RENDER ENGINE
    function renderResume() {
        const t = TEMPLATES.find(tpl => tpl.id === state.templateId) || TEMPLATES[0];
        document.getElementById('current-template-tag').innerText = `Template: ${t.name}`;
        
        resumePaper.className = `qvr-paper t-${state.templateId} size-${state.pageSize}`;
        resumePaper.style.fontFamily = state.fontFamily;
        resumePaper.style.lineHeight = state.lineHeight;
        document.documentElement.style.setProperty('--qvr-primary', state.accentColor);

        // Render QR Code if enabled
        let qrDataUrl = '';
        if (state.media.showQr && state.personal.website) {
            const qrDiv = document.getElementById('qrcode-hidden');
            qrDiv.innerHTML = '';
            new QRCode(qrDiv, { text: "https://" + state.personal.website.replace(/^https?:\/\//, ''), width: 80, height: 80 });
            const canvas = qrDiv.querySelector('canvas');
            if(canvas) qrDataUrl = canvas.toDataURL();
        }

        // Build HTML Layout based on Two-Column vs One-Column
        const isTwoCol = [11, 14, 17, 20, 35, 41, 42].includes(state.templateId);

        let html = '';

        // HEADER SECTION
        html += `<div class="r-header">`;
        if (state.media.showPhoto && state.media.photoData) {
            html += `<img src="${state.media.photoData}" class="r-photo ${state.media.photoShape}" alt="Profile Photo">`;
        }
        html += `
            <div class="r-name" style="color: ${state.accentColor};">${state.personal.name || 'Your Full Name'}</div>
            <div class="r-title">${state.personal.headline || 'Professional Headline'}</div>
            <div class="r-contact">
                ${state.personal.email ? `<span><i class="fa-solid fa-envelope"></i> ${state.personal.email}</span>` : ''}
                ${state.personal.phone ? `<span><i class="fa-solid fa-phone"></i> ${state.personal.phone}</span>` : ''}
                ${state.personal.city ? `<span><i class="fa-solid fa-location-dot"></i> ${state.personal.city}, ${state.personal.country}</span>` : ''}
                ${state.personal.linkedin ? `<span><i class="fa-brands fa-linkedin"></i> ${state.personal.linkedin}</span>` : ''}
                ${state.personal.github ? `<span><i class="fa-brands fa-github"></i> ${state.personal.github}</span>` : ''}
                ${state.personal.website ? `<span><i class="fa-solid fa-globe"></i> ${state.personal.website}</span>` : ''}
            </div>
            ${qrDataUrl ? `<div style="margin-top:8px;"><img src="${qrDataUrl}" class="r-qr" alt="QR Code"></div>` : ''}
        </div>`;

        // SUMMARY SECTION
        if (state.summary) {
            html += `
                <div class="r-sec">
                    <div class="r-sec-title">Professional Summary</div>
                    <div class="r-desc">${state.summary}</div>
                </div>
            `;
        }

        // WORK EXPERIENCE
        if (state.experience.length > 0) {
            html += `<div class="r-sec"><div class="r-sec-title">Work Experience</div>`;
            state.experience.forEach(exp => {
                html += `
                    <div class="r-item">
                        <div class="r-item-head"><span>${exp.title}</span> <span>${exp.period}</span></div>
                        <div class="r-item-sub">${exp.company}</div>
                        <div class="r-desc">${exp.desc}</div>
                    </div>
                `;
            });
            html += `</div>`;
        }

        // EDUCATION
        if (state.education.length > 0) {
            html += `<div class="r-sec"><div class="r-sec-title">Education</div>`;
            state.education.forEach(edu => {
                html += `
                    <div class="r-item">
                        <div class="r-item-head"><span>${edu.degree}</span> <span>${edu.period}</span></div>
                        <div class="r-item-sub">${edu.school} ${edu.gpa ? `| GPA: ${edu.gpa}` : ''}</div>
                    </div>
                `;
            });
            html += `</div>`;
        }

        // SKILLS
        if (state.skills) {
            html += `
                <div class="r-sec">
                    <div class="r-sec-title">Skills & Expertise</div>
                    <div class="r-desc">${state.skills}</div>
                </div>
            `;
        }

        // PROJECTS
        if (state.projects.length > 0) {
            html += `<div class="r-sec"><div class="r-sec-title">Key Projects</div>`;
            state.projects.forEach(proj => {
                html += `
                    <div class="r-item">
                        <div class="r-item-head"><span>${proj.title}</span></div>
                        <div class="r-item-sub">Tech: ${proj.tech}</div>
                        <div class="r-desc">${proj.desc}</div>
                    </div>
                `;
            });
            html += `</div>`;
        }

        // CERTIFICATIONS & LANGUAGES
        if (state.certs) {
            html += `<div class="r-sec"><div class="r-sec-title">Certifications</div><div class="r-desc" style="white-space:pre-line;">${state.certs}</div></div>`;
        }
        if (state.languages) {
            html += `<div class="r-sec"><div class="r-sec-title">Languages</div><div class="r-desc">${state.languages}</div></div>`;
        }
        if (state.achievements) {
            html += `<div class="r-sec"><div class="r-sec-title">Achievements</div><div class="r-desc" style="white-space:pre-line;">${state.achievements}</div></div>`;
        }

        // SIGNATURE SECTION
        if (state.media.showSig && state.media.sigData) {
            html += `
                <div style="margin-top:30px; border-top:1px dashed #cbd5e1; padding-top:10px; display:flex; justify-content:space-between; align-items:flex-end;">
                    <div style="font-size:8pt; color:#64748b;">${state.media.sigPlace}</div>
                    <div>
                        <img src="${state.media.sigData}" class="r-sig" alt="Signature">
                        <div style="font-size:7.5pt; color:#94a3b8; text-align:center;">Authorized Signature</div>
                    </div>
                </div>
            `;
        }

        resumePaper.innerHTML = html;
    }

    renderResume();

    // EXPORT HANDLERS
    document.getElementById('btn-print').onclick = () => window.print();

    document.getElementById('btn-download-pdf').onclick = () => {
        const opt = {
            margin:       0,
            filename:     `${state.personal.name.replace(/\s+/g, '_')}_Resume.pdf`,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'mm', format: state.pageSize, orientation: 'portrait' }
        };
        html2pdf().set(opt).from(resumePaper).save();
    };

    document.getElementById('btn-download-png').onclick = () => {
        html2pdf().from(resumePaper).toImg().outputImg('dataurl').then(imgUrl => {
            const link = document.createElement('a');
            link.download = `${state.personal.name.replace(/\s+/g, '_')}_Resume.png`;
            link.href = imgUrl;
            link.click();
        });
    };
});
