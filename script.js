<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ghady Bsaibess | Professional Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <nav class="nav container" aria-label="Main navigation">
      <a class="brand" href="#top" aria-label="Go to top">GB</a>
      <button class="menu-btn" id="menuBtn" type="button" aria-label="Open menu" aria-expanded="false">☰</button>
      <div class="nav-links" id="navLinks">
        <a href="#philosophy">Professional Philosophy</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#coursework">Course Work</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </header>

  <main id="top">
    <section class="hero container reveal">
      <div class="hero-content">
        <p class="status">Computer Science Portfolio</p>
        <h1>Ghady <span>Bsaibess</span></h1>
        <p class="subtitle">Computer Science student at Notre Dame University Louaize, Lebanon.</p>
        <p class="hero-text">I am building strong skills in programming, problem solving, teamwork, and professional communication. My goal is to create useful software, learn from real workplace experience, and grow into a responsible technology professional.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#projects">View My Work</a>
          <a class="btn secondary" href="#contact">Contact Me</a>
        </div>
      </div>

      <aside class="profile-card" aria-label="Profile image area">
        <div class="photo-placeholder"><span>Add Your Photo Here</span></div>
        <div class="mini-info">
          <strong>Professional Portfolio</strong>
          <p>Computer Science • NDU • Lebanon</p>
        </div>
      </aside>
    </section>

    <section id="philosophy" class="section container reveal">
      <div class="section-title"><p>01</p><h2>Professional Philosophy</h2></div>
      <div class="glass-card large-text">
        <p>I believe that a good computer scientist should be responsible, organized, and willing to keep learning. Technology is not only about writing code. It is also about understanding people, solving real problems, and creating clear, useful, and ethical work.</p>
        <p>As a Computer Science student, I want to improve my technical skills while developing professional values such as honesty, respect, teamwork, discipline, and responsibility. My goal is to become a software professional who produces high-quality work and improves every day.</p>
      </div>
      <div class="artifact-grid">
        <button class="artifact-card clickable" id="bigFiveBtn" type="button">
          <span>01</span><h3>Big Five Test</h3><p>Click to view my personality assessment result.</p>
        </button>
        <article class="artifact-card"><span>02</span><h3>Learning Style Graphic</h3><p>A reflection about how I learn, practice, and improve.</p></article>
        <article class="artifact-card"><span>03</span><h3>Professional Development Plan</h3><p>A clear plan for my academic and career growth.</p></article>
        <article class="artifact-card"><span>04</span><h3>Cover Letter</h3><p>A professional document prepared for future opportunities.</p></article>
      </div>
    </section>

    <section id="experience" class="section container reveal">
      <div class="section-title"><p>02</p><h2>Experience</h2></div>
      <div class="timeline">
        <button class="timeline-item clickable" id="jobShadowingBtn" type="button">
          <div><h3>Job Shadowing</h3><p class="place">Promedz</p></div>
          <span>May 2026</span>
          <p>I observed a professional software workplace and learned how healthcare technology supports appointments, patient services, teamwork, and daily business operations. Click to open the job shadowing PDF inside the site.</p>
        </button>
        <article class="timeline-item">
          <div><h3>Work Observation</h3><p class="place">Professional Skills</p></div>
          <span>Course Activity</span>
          <p>I practiced observing workplace behavior, communication, responsibility, and the skills needed to succeed in a professional environment.</p>
        </article>
      </div>
    </section>

    <section id="projects" class="section container reveal">
      <div class="section-title"><p>03</p><h2>Projects</h2></div>
      <div class="project-grid">
        <article class="project-card"><span>01</span><h3>Vending Machine System</h3><p>C++ project using object-oriented programming to manage products, money input, and user choices.</p></article>
        <article class="project-card"><span>02</span><h3>Clinic Management System</h3><p>C# system designed to organize clinic information in a simple and structured way.</p></article>
        <article class="project-card"><span>03</span><h3>Rock Paper Scissors Game</h3><p>C++ game project focused on logic, conditions, user input, and interactive results.</p></article>
        <article class="project-card"><span>04</span><h3>Hospital Management System</h3><p>C++ management project that applies programming concepts to organize hospital-related data.</p></article>
      </div>
    </section>

    <section id="coursework" class="section container reveal">
      <div class="section-title"><p>04</p><h2>Course Work</h2></div>
      <div class="glass-card large-text">
        <p>My course work helped me connect Computer Science with professional growth. I practiced communication, teamwork, presentations, reflection, and career preparation. These activities helped me become more confident and better prepared for the workplace.</p>
        <p>Through the Work Ready Now course, I learned how to prepare professional documents, understand workplace expectations, and explain my strengths clearly. This showed me that success in technology requires both technical knowledge and strong soft skills.</p>
      </div>
    </section>

    <section id="resume" class="section container reveal">
      <div class="section-title"><p>05</p><h2>Resume</h2></div>
      <div class="resume-box">
        <div><h3>My Resume</h3><p>Download my professional CV. The video resume button is included as a placeholder.</p></div>
        <div class="resume-actions">
          <a class="btn primary" href="assets/ghady-bsaibess-cv.pdf" download="Ghady-Bsaibess-CV.pdf">Download My Resume</a>
          <a class="btn secondary disabled" href="#resume" aria-disabled="true">Download Video Resume</a>
        </div>
      </div>
      <div class="skills-grid">
        <div class="skill-card"><h3>Technical Skills</h3><p>C++ • C# • HTML • CSS • JavaScript • Object-Oriented Programming</p></div>
        <div class="skill-card"><h3>Soft Skills</h3><p>Problem Solving • Teamwork • Communication • Fast Learning • Responsibility</p></div>
      </div>
    </section>

    <section id="contact" class="section container reveal">
      <div class="section-title"><p>06</p><h2>Contact Me</h2></div>
      <div class="contact-card">
        <p>I am open to learning opportunities, internships, and professional development experiences.</p>
        <div class="contact-links">
          <a href="mailto:ghadibsaibes11@gmail.com">ghadibsaibes11@gmail.com</a>
          <a href="#contact" class="disabled" aria-disabled="true">LinkedIn Profile</a>
        </div>
      </div>
    </section>
  </main>

  <div class="modal" id="imageModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="bigFiveTitle">
    <div class="modal-content image-content">
      <button class="close-modal" data-close type="button" aria-label="Close">×</button>
      <h3 id="bigFiveTitle">The Big Five Test</h3>
      <img src="assets/big-five.jpeg" alt="Big Five personality test chart">
    </div>
  </div>

  <div class="modal" id="pdfModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="jobPdfTitle">
    <div class="modal-content pdf-content">
      <button class="close-modal" data-close type="button" aria-label="Close">×</button>
      <h3 id="jobPdfTitle">Job Shadowing PDF</h3>
      <iframe src="assets/job-shadowing.pdf" title="Job Shadowing PDF"></iframe>
    </div>
  </div>

  <footer>
    <p>© 2026 Ghady Bsaibess. Built with HTML, CSS, and JavaScript.</p>
    <a href="#top">Back to Top ↑</a>
  </footer>
  <script src="script.js"></script>
</body>
</html>
