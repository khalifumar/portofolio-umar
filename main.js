// ===== Tandai item navbar aktif berdasarkan halaman =====
(function setActiveNav(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-link').forEach(a=>{
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href.endsWith(path)) a.classList.add('active');
  });
})();

// ===== Helper opsional: pasang foto profil di Home =====
window.setProfileImage = function(src){
  const img = document.getElementById('profileImage');
  if (!img) return;
  img.src = src;
  img.onload = () => {
    img.style.display = 'block';
    if (img.previousElementSibling) img.previousElementSibling.style.display = 'none';
  };
};

// ====== CONTACT: simple mailto submit ======
(function contactFormHandler(){
  const form = document.getElementById('contactForm');
  if (!form) return;

  const info = document.getElementById('contactInfo');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    // TODO: ganti alamat email penerima di sini
    const to = 'hello@example.com';
    const subject = encodeURIComponent(`[Portfolio Contact] ${data.name}`);
    const bodyLines = [
      `Nama   : ${data.name}`,
      `Email  : ${data.email}`,
      '',
      data.message
    ].join('\n');
    const body = encodeURIComponent(bodyLines);

    // Buka mail client user
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    if (info) {
      info.textContent = 'Client email kamu akan terbuka. Jika tidak, salin teks di atas dan kirim manual.';
      setTimeout(()=> info.textContent = '', 6000);
    }

    form.reset();
  });
})();

// ===== Data 6 Proyek (untuk project.html) =====
const projects = [
  {
    title: 'Toyota Market Analysis — Engineering Data Pipeline',
    desc: [
      'This project is an end-to-end data engineering and analytics solution designed to analyze the used Toyota car market. The goal is to transform raw vehicle listing data into clean, analytical datasets, store them in a cloud database, and generate business-ready insights through an interactive dashboard.',
      'Metriks: ETL pipeline, Cloud Server Management, Dashboad Iteractive.',
    ],
    skills: 'Supabase, Looker Studio, Kaggle, Python.',
    caseUrl: 'https://github.com/khalifumar/toyota_market_analysis',
    image: 'assets/img/p_toyota.jpg'
  },
  {
    title: 'Diabetes Risk Screening — ML Deployment',
    desc: [
      'A diabetes risk-screening program designed with a strong emphasis on achieving high recall to minimize false negatives, supported by transparent threshold tuning. This project includes comprehensive data preprocessing, model training and testing, performance evaluation, and deployment through an interactive Streamlit application.',
      'Fitur: Model Evaluation, Explainability, Prediction, ',
    ],
    skills: 'Python, scikit-learn, Streamlit',
    caseUrl: 'https://pimaindiansdiabetes-h3gzepp83swgtbokftxz4y.streamlit.app/?',
    image: 'assets/img/p_diabetes.jpg'
  },
  {
    title: 'Hajj & Umrah Analysis — Dashboard Analyst',
    desc: [
      'A comprehensive data analysis project examining key trends, patterns, and demographic insights related to Hajj and Umrah activities. This project includes data cleaning, exploratory data analysis, statistical interpretation, and visualization of participant distributions, capacity growth, and historical changes.',
      'Metrik: pilgrim trends, country, body roll.',
    ],
    skills: 'Python, Power BI, Canva',
    caseUrl: 'https://app.powerbi.com/links/HGJ_qw2m9y?ctid=3485b963-82ba-4a6f-810f-b5cc226ff898&pbi_source=linkShare',
    image: 'assets/img/p_hajj.jpeg'
  },
  {
    title: 'Covid 19 Impact Analysis — Dashboard Deployment',
    desc: [
      'A comprehensive analytical project focused on comparing pre–Covid-19 and post–Covid-19 conditions across various industrial sectors to understand the pandemic’s structural and economic impact. The project involves extensive data preprocessing, exploratory data analysis, industry-level trend comparison, and statistical interpretation to identify significant shifts in productivity, demand patterns, workforce distribution, and operational dynamics.',
      'Metrik: Industry comparison, Time series, Shifts.',
    ],
    skills: 'Python, Poster, Streamlit',
    caseUrl: 'https://dampak-pandemi-terhadap-industri-2018-2021.streamlit.app/',
    image: 'assets/img/p_covid.jpeg'
  },
  {
    title: 'Weather Monitoring — Engineering Data Pipeline',
    desc: [
      'A streamlined data pipeline project developed as part of a data engineering challenge, designed to collect, clean, and store hourly weather data from a public API. The workflow includes automated data extraction, validation, and preprocessing to ensure consistent and reliable datasets for further analysis. The entire pipeline is orchestrated and scheduled using Apache Airflow, enabling fully automated hourly ingestion and processing.',
      'Metrik: ETL pipeline, Airflow DAG, Data quality.',
    ],
    skills: 'Python, Airflow, ETL, Docker',
    caseUrl: 'https://github.com/khalifumar/weather_monitoring',
    image: 'assets/img/p_weather.jpeg'
  },
  {
    title: 'Indonesian Independent Day — Project Management',
    desc: [
      'In celebration of Indonesia’s 79th Independence Day, our team from the Community Youth Development Association (Karang Taruna) organized a series of community-centered activities, including traditional competitions, neighborhood decorations, and public health check-ups. This initiative aimed to strengthen social engagement, foster collaboration among residents, and promote a healthy and festive environment that reflects the spirit of unity and national pride.',
      'Environment: Community event and Social impact.',
    ],
    skills: 'Leader, Project Management, Team Work, Event Organizer',
    caseUrl: 'https://www.linkedin.com/in/khalifumaralfaruq/details/projects/?locale=en_US',
    image: 'assets/img/p_independence.jpeg'
  },
  {
    title: 'The Povety Paradox in Sumatra — Dashboard Analysis',
    desc: [
      'This analytical dashboard explores the underlying dynamics behind Sumatra’s poverty levels and reveals that its so-called ‘paradox’ is not accidental, but the result of recurring structural patterns. The analysis shows that high unemployment, limited labor absorption, and uneven provincial development form a chain of conditions that perpetuate poverty across the region. Despite being rich in natural resources, Sumatra demonstrates that resource abundance does not automatically translate into welfare without sustainable job creation and balanced economic growth.',
      'Metrik: Poverty rate, Unemployment, Labor absorption, etc.',
    ],
    skills: 'Python, Looker Studio, Data Mining, Data Preprocessing, Data Visualization.',
    caseUrl: 'https://lookerstudio.google.com/reporting/6ccab171-1221-4362-9ec4-ff64758df286',
    image: 'assets/img/p_povety.jpeg'
  }
];

// Render project cards (hanya di project.html)
(function renderProjectsIfNeeded(){
  const grid = document.getElementById('projectGrid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `
    <article class="project-card">
      <div class="card-inner">
        <div class="card-left">
          <h3 class="project-title">${p.title}</h3>
          ${p.desc.map(d => `<p class="project-desc">${d}</p>`).join('')}
          <a class="cta" href="${p.caseUrl}" aria-label="Buka case study ${p.title}">
            View Case Study ->
          </a>
        </div>
        <div class="card-right">
          <div class="skill-chip">${p.skills}</div>
          <div class="logo-circle">
            <img src="${p.image}" alt="${p.title}">
          </div>
        </div>
      </div>
    </article>
  `).join('');
})();

// ===== Skills data (untuk Home) =====
const skillsData = [
  {
    title: 'Data Science',
    items: ['Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn','EDA', 'Model Tuning', 'Visualization', ]
  },
  {
    title: 'Data Analystics',
    items: ['Excel (advanced)', 'Pivot Table', 'Data Cleaning', 'Data Visualization', 'Statistical Analysis', 'Power BI', 'Tablue', 'Looker Studio']
  },
  {
    title: 'Data Engineering',
    items: ['SQL Server', 'ETL/ELT', 'Stored Procedure', 'Star Schema', 'Airflow (concepts)']
  },
  {
    title: 'IoT & Realtime',
    items: ['Arduino', 'MPU6050', 'MQTT', 'Ubidots', 'Sensor Fusion (basic)', 'Serial/MQTT Debugging']
  },
  {
    title: 'Programming',
    items: ['Python', 'Javascript', 'Streamlit', 'C', 'HTML/CSS']
  },
  {
    title: 'Tools & Cloud',
    items: ['Power BI', 'Git/GitHub', 'VS Code', 'CI/CD (basic)', 'Figma', 'Canva']
  }
];

// Render skills (hanya di Home)
(function renderSkillsIfNeeded(){
  const wrap = document.getElementById('skillsGrid');
  if (!wrap) return;

  wrap.innerHTML = skillsData.map(group => `
    <section class="skill-card" aria-label="${group.title}">
      <h3 class="skill-title">${group.title}</h3>
      <div class="badges">
        ${group.items.map(s => `<span class="skill-badge">${s}</span>`).join('')}
      </div>
    </section>
  `).join('');
})();

// ===== Data 5 Experience (untuk experience.html) =====
const experiences = [
  {
    org: 'GDGOC Binus Online',
    role: 'Media Kreatif Division',
    points: [
      'Designing social media content and posters for campus activities.',
      'Managing event publications and visual documentation.',
      'Coordinating between divisions in technology community events.',
      ' Increasing media engagement as much as possible.'
    ],
    duration: '2025 – 2026',
    total: '1 year +',
    image: 'assets/img/p_gdg.png'
  },
  {
    org: 'Student Association of Binus',
    role: 'Media Kreatif Division',
    points: [
      'Designing social media content and posters for campus activities.',
      'Creating unique and informative captions',
      'Coordinate with each other among teammates',
      'Maintaining social media stability regarding association activities'
    ],
    duration: '2024 - 2025',
    total: '1 year',
    image: 'assets/img/p_hmj.jpg'
  },
  {
    org: 'Youth Social Organization',
    role: 'Project Leader',
    points: [
      'Creating and planning major events such as national commemorations, community service events, and inter-neighborhood competitions.',
      'Leading a large team to run each event.',
      'Coordinating with external parties such as the sub-district, sponsors, and other communities.',
      'Managing the budget and funding for each activity.',
      'Increasing community participation in each activity.'
    ],
    duration: '2023 – 2025',
    total: '2 years',
    image: 'assets/img/p_kapas.jpg'
  },
  {
    org: 'Devfest Depok 2025',
    role: 'Volunteer',
    points: [
      'Managing the event of Devfest Depok 2025.',
      'Coordinating with other committee members to ensure the event runs smoothly.',
      'Providing technical assistance during the event.',
      'Assisting participants with their technical needs.'
    ],
    duration: '2025',
    total: '1 month',
    image: 'assets/img/p_gdg.png'
  },
  {
    org: 'Youth Generation of Mosque',
    role: 'President',
    points: [
      'Leading the team in designing and developing numerous religious and social events.',
      'Organizing various activities such as regular religious study groups, community service, and skills training for community members.',
      'Building networks with other organizations to expand the positive impact of activities.',
      'Increasing member participation through an inclusive and innovative approach.',
      'Successfully increasing the number of active members and community involvement.'
    ],
    duration: '2024 – Present',
    total: '2 years',
    image: 'assets/img/p_gemma.png'
  }
];

// Render experience cards (hanya di experience.html)
(function renderExperiencesIfNeeded(){
  const grid = document.getElementById('experienceGrid');
  if (!grid) return;

  grid.innerHTML = experiences.map(e => `
    <article class="experience-card">
      <div class="exp-left">
        
        <div class="exp-logo">
          ${e.image ? `<img src="${e.image}" alt="${e.org} logo">` : 'Logo'}
        </div>

        <div>
          <h3 class="exp-org">${e.org}</h3>
          <div class="exp-role">${e.role}</div>
        </div>
      </div>

      <div class="exp-body">
        <ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="exp-right">
        <div class="exp-date">${e.duration}</div>
        <div class="exp-total">${e.total}</div>
      </div>
    </article>
  `).join('');
})();

