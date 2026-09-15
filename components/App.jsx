const { useState, useEffect, useRef, useCallback } = React;

// SVG Icons
const Icons = {
  gear: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  ),
  close: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  arrowRight: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
  eye: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  ),
  share: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  ),
  copy: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
  mail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  location: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  ),
  upload: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
  ),
  image: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  ),
  move: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="5 9 2 12 5 15"></polyline>
      <polyline points="9 5 12 2 15 5"></polyline>
      <polyline points="15 19 12 22 9 19"></polyline>
      <polyline points="19 9 22 12 19 15"></polyline>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="12" y1="2" x2="12" y2="22"></line>
    </svg>
  ),
  type: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7"></polyline>
      <line x1="9" y1="20" x2="15" y2="20"></line>
      <line x1="12" y1="4" x2="12" y2="20"></line>
    </svg>
  ),
  skill: {
    graphic: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    ),
    illustration: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    realistic: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    brand: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle><text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none" fontWeight="bold">L</text>
      </svg>
    ),
    font: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line>
        <line x1="12" y1="4" x2="12" y2="20"></line>
      </svg>
    ),
    character: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    game: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"></rect><line x1="6" y1="12" x2="10" y2="12"></line>
        <line x1="8" y1="10" x2="8" y2="14"></line><circle cx="15" cy="11" r="1"></circle><circle cx="18" cy="13" r="1"></circle>
      </svg>
    ),
    product: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
      </svg>
    )
  }
};

// ============== Splash Screen ==============
function Splash({ onComplete }) {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(onComplete, 1200);
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
    size: 2 + Math.random() * 4
  }));

  return (
    <div className={`splash ${hide ? 'hide' : ''}`}>
      <div className="splash-particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="splash-particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`
            }}
          />
        ))}
      </div>
      <div className="splash-logo">MOSES LEE</div>
      <div className="splash-ring"></div>
    </div>
  );
}

// ============== Navbar ==============
function Navbar({ scrolled, onGearClick, editMode, mobileMenuOpen, setMobileMenuOpen, previewMode }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo" data-editable="logo" onClick={() => scrollTo('hero')}>
          MOSES<span>LEE</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>关于</a></li>
          <li><a href="#works" onClick={(e) => { e.preventDefault(); scrollTo('works'); }}>作品</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>能力</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>联系</a></li>
        </ul>
        <div className="nav-right">
          {!previewMode && (
            <button className="gear-btn" onClick={onGearClick} title="编辑台">
              {Icons.gear}
            </button>
          )}
          <button className="contact-btn" onClick={() => scrollTo('contact')}>联系我</button>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>关于</a>
        <a href="#works" onClick={(e) => { e.preventDefault(); scrollTo('works'); }}>作品</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>能力</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>联系</a>
      </div>
    </>
  );
}

// ============== Hero Section ==============
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-title-wrap">
          <h1 className="hero-title" data-editable="heroTitle">
            <span className="line1">CREATIVE</span>
            <span className="line2">DESIGNER</span>
          </h1>
          <div className="hero-slash">
            / 01
            <small>PORTFOLIO 2024</small>
          </div>
        </div>
        <p className="hero-tagline" data-editable="tagline">
          有趣、有料、有点较真的 IP生态圈拓疆者
        </p>
        <div className="hero-works">
          <div className="hero-work-card" data-editable-image="heroVr">
            <img src="assets/hero_vr.jpg" alt="MOSES VR" />
            <div className="hero-work-info">
              <div>
                <div className="hero-work-num">01</div>
                <div className="hero-work-label">ILLUSTRATION</div>
              </div>
              <div className="hero-work-desc">
                <p data-editable="heroDesc1">探索虚拟世界的视觉边界，用插画构建沉浸式体验</p>
                <button className="hero-work-btn">
                  查看作品 {Icons.arrowRight}
                </button>
              </div>
            </div>
          </div>
          <div className="hero-work-card" data-editable-image="heroSilhouette">
            <img src="assets/hero_silhouette.jpg" alt="Silhouette" />
            <div className="hero-work-info">
              <div>
                <div className="hero-work-num">02</div>
                <div className="hero-work-label">GRAPHIC DESIGN</div>
              </div>
              <div className="hero-work-desc">
                <p data-editable="heroDesc2">品牌视觉全案设计，打造独特且有记忆点的形象</p>
                <button className="hero-work-btn">
                  查看作品 {Icons.arrowRight}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============== About Section ==============
function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-header">
        <div>
          <div className="section-label">About Me</div>
          <h2 className="section-title" data-editable="aboutTitle">关于我</h2>
        </div>
      </div>
      <div className="about-grid">
        <div className="about-portrait-wrap">
          <div className="about-portrait" data-editable-image="portrait">
            <img src="assets/portrait.jpg" alt="MOSES LEE" />
            <div className="about-portrait-accent">
              <span>40+</span>
            </div>
          </div>
          <div className="about-info-card">
            <div className="info-item">
              <div className="info-label">姓名</div>
              <div className="info-value" data-editable="name">黎懋曦</div>
            </div>
            <div className="info-item">
              <div className="info-label">英文名</div>
              <div className="info-value">MOSES LEE</div>
            </div>
            <div className="info-item">
              <div className="info-label">职位</div>
              <div className="info-value" data-editable="position">平面 / 插画设计</div>
            </div>
            <div className="info-item">
              <div className="info-label">性格</div>
              <div className="info-value" data-editable="personality">较真且有趣</div>
            </div>
          </div>
        </div>
        <div>
          <p className="about-bio" data-editable="bio">
            你好，我是 <strong>MOSES LEE</strong>——一名来自重庆 / 成都的平面设计师与插画师。
            从事设计行业超过 10 年，专注于 <strong>品牌视觉设计</strong> 与 <strong>插画手绘</strong> 两大方向。
            <br /><br />
            我相信好的设计既要 <strong>"较真"</strong>——在细节处精益求精，也要 <strong>"有趣"</strong>——
            让作品拥有灵魂与温度。从超写实手绘到潮流涂鸦，从品牌全案到角色原画，
            我一直在拓宽设计的边界，做一个 IP 生态圈的 <strong>拓疆者</strong>。
            <br /><br />
            如果你有有趣的项目想要合作，欢迎随时联系我。
          </p>
          <div style={{ marginBottom: 12 }}>
            <div className="section-label" style={{ fontSize: 12, marginBottom: 20 }}>Work Experience</div>
          </div>
          <div className="timeline">
            {EXPERIENCE_DATA.map((exp, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-year">{exp.year}</div>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-role">{exp.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============== Works Section ==============
function Works({ filter, setFilter, onWorkClick, works }) {
  const filters = [
    { key: 'all', label: '全部' },
    { key: 'illustration', label: '插画手绘' },
    { key: 'weapon', label: '武器设定' },
    { key: 'realistic', label: '超写实' },
    { key: 'graphic', label: '平面设计' }
  ];

  const filtered = filter === 'all'
    ? works
    : works.filter(w => w.category === filter);

  return (
    <section className="section works-section" id="works">
      <div className="section-header">
        <div>
          <div className="section-label">Selected Works</div>
          <h2 className="section-title" data-editable="worksTitle">精选作品</h2>
        </div>
        <div className="works-filter">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-chip ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="works-masonry">
        {filtered.map(work => (
          <div className="work-item" key={work.id} onClick={() => onWorkClick(work)}>
            <img src={work.image} alt={work.title} loading="lazy" />
            <div className="work-overlay">
              <div className="work-view-btn">{Icons.eye}</div>
              <div className="work-cat">{work.categoryLabel}</div>
              <div className="work-title">{work.title}</div>
              <div className="work-subtitle">{work.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============== Work Modal ==============
function WorkModal({ work, onClose }) {
  if (!work) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>{Icons.close}</button>
        <img className="modal-image" src={work.image} alt={work.title} />
        <div className="modal-body">
          <div className="modal-cat">{work.categoryLabel}</div>
          <h3 className="modal-title">{work.title}</h3>
          <p className="modal-desc">{work.desc}</p>
          <div className="modal-tags">
            <span className="modal-tag">{work.categoryLabel}</span>
            <span className="modal-tag">原创设计</span>
            <span className="modal-tag">MOSES LEE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============== Skills Section ==============
function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-header">
        <div>
          <div className="section-label">Capabilities</div>
          <h2 className="section-title" data-editable="skillsTitle">能力介绍</h2>
        </div>
      </div>
      <div className="skills-grid">
        {SKILLS_DATA.map((skill, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-icon">{Icons.skill[skill.icon] || Icons.skill.graphic}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-desc">{skill.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============== Contact Section ==============
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-grid">
        <div>
          <div className="section-label">Get In Touch</div>
          <h2 className="contact-title" data-editable="contactTitle">
            让我们<br />
            <span className="gradient-text">一起创造</span>
          </h2>
          <p className="contact-subtitle">
            无论你有品牌设计、插画创作还是其他有趣的项目想法，
            都欢迎联系我，我们一起把它变成现实。
          </p>
          <ul className="contact-info-list">
            <li className="contact-info-item">
              <div className="contact-info-icon">{Icons.phone}</div>
              <div className="contact-info-text">
                <div className="ci-label">电话</div>
                <div className="ci-value">13983865134</div>
              </div>
            </li>
            <li className="contact-info-item">
              <div className="contact-info-icon">{Icons.mail}</div>
              <div className="contact-info-text">
                <div className="ci-label">邮箱</div>
                <div className="ci-value">1004772@qq.com</div>
              </div>
            </li>
            <li className="contact-info-item">
              <div className="contact-info-icon">{Icons.location}</div>
              <div className="contact-info-text">
                <div className="ci-label">所在地</div>
                <div className="ci-value">成都 / 重庆</div>
              </div>
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>姓名</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="请输入您的姓名"
              required
            />
          </div>
          <div className="form-group">
            <label>邮箱</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="请输入您的邮箱"
              required
            />
          </div>
          <div className="form-group">
            <label>项目描述</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="简单描述一下您的项目需求..."
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            {submitted ? '发送成功 ✓' : '发送消息'}
          </button>
        </form>
      </div>
    </section>
  );
}

// ============== Footer ==============
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">MOSES<span>LEE</span></div>
      <div className="footer-text">© 2024 MOSES LEE. All rights reserved. — 较真且有趣的设计师</div>
    </footer>
  );
}

// ============== Publish Preview Modal ==============
function PublishModal({ isOpen, onClose, shareUrl }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = shareUrl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="publish-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>{Icons.close}</button>
        <div className="publish-icon">{Icons.share}</div>
        <h3 className="publish-title">发布预览</h3>
        <p className="publish-desc">
          将以下链接分享给他人，对方可浏览完整作品，但无法使用编辑功能。
        </p>
        <div className="publish-url-box">
          <input type="text" readOnly value={shareUrl} />
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? Icons.check : Icons.copy}
            <span>{copied ? '已复制' : '复制链接'}</span>
          </button>
        </div>
        <div className="publish-tips">
          <div className="tip-item">
            <span className="tip-dot"></span>
            <span>访客只能浏览，无法进入编辑模式</span>
          </div>
          <div className="tip-item">
            <span className="tip-dot"></span>
            <span>所有板块、作品、动画正常展示</span>
          </div>
          <div className="tip-item">
            <span className="tip-dot"></span>
            <span>更新内容后链接不变，访客自动看到最新版本</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============== Element Property Editor (floating) ==============
function ElementPropertyPanel({ element, onClose, onColorChange, onFontSizeChange, onReplaceImage, editMode }) {
  const [localColor, setLocalColor] = useState('#ffffff');
  const [localFontSize, setLocalFontSize] = useState(16);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (element) {
      const cs = getComputedStyle(element);
      setLocalColor(cs.color);
      const fs = parseFloat(cs.fontSize);
      setLocalFontSize(Math.round(fs));
    }
  }, [element]);

  if (!element || !editMode) return null;

  const isImage = element.tagName === 'IMG' || element.querySelector('img');
  const rect = element.getBoundingClientRect();
  const panelTop = Math.min(rect.bottom + 10, window.innerHeight - 200);
  const panelLeft = Math.min(rect.left, window.innerWidth - 280);

  const handleColor = (e) => {
    const color = e.target.value;
    setLocalColor(color);
    element.style.color = color;
    onColorChange(element, color);
  };

  const handleFontSize = (e) => {
    const size = Number(e.target.value);
    setLocalFontSize(size);
    element.style.fontSize = `${size}px`;
    onFontSizeChange(element, size);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = element.tagName === 'IMG' ? element : element.querySelector('img');
        if (img) {
          img.src = ev.target.result;
          onReplaceImage(element, ev.target.result);
        }
      };
      if (file.type.startsWith('video/')) {
        // Video replacement: replace img with video element
        reader.onload = (ev) => {
          const img = element.tagName === 'IMG' ? element : element.querySelector('img');
          if (img) {
            const video = document.createElement('video');
            video.src = ev.target.result;
            video.controls = true;
            video.loop = true;
            video.muted = true;
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            img.parentNode.replaceChild(video, img);
            onReplaceImage(element, ev.target.result);
          }
        };
      }
      reader.readAsDataURL(file);
    }
    e.target.value = '';
  };

  return (
    <div
      className="element-prop-panel"
      style={{ top: `${panelTop + window.scrollY}px`, left: `${panelLeft}px` }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="prop-header">
        <span>元素属性</span>
        <button onClick={onClose} className="prop-close">{Icons.close}</button>
      </div>
      <div className="prop-body">
        {!isImage && (
          <>
            <div className="prop-row">
              <label>文字颜色</label>
              <input type="color" value={rgbToHex(localColor)} onChange={handleColor} />
            </div>
            <div className="prop-row">
              <label>字号: {localFontSize}px</label>
              <input type="range" min="10" max="200" value={localFontSize} onChange={handleFontSize} />
            </div>
          </>
        )}
        {isImage && (
          <div className="prop-row">
            <label>替换图片/视频</label>
            <div className="replace-img-btn" onClick={() => fileInputRef.current?.click()}>
              {Icons.upload}
              <span>点击上传图片或视频</span>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </div>
        )}
        <div className="prop-row prop-hint">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FF9100' }}>
            {Icons.move}
            <span style={{ fontSize: 11 }}>拖动元素可调整位置</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper: rgb string to hex
function rgbToHex(rgb) {
  if (rgb.startsWith('#')) return rgb;
  const match = rgb.match(/\d+/g);
  if (!match) return '#ffffff';
  const [r, g, b] = match.map(Number);
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

// ============== Edit Panel ==============
function EditPanel({
  isOpen, onClose, theme, setTheme, primaryColor, setPrimaryColor,
  fontSize, setFontSize, onUploadWork, customWorks, onSave, onCancel,
  onPublish
}) {
  const themes = [
    { id: 'red-black', name: '红黑流体', colors: ['#FF3D00', '#FF9100', '#0a0a0a'] },
    { id: 'cyber', name: '赛博紫', colors: ['#7C3AED', '#06B6D4', '#0a0a0a'] },
    { id: 'nature', name: '自然绿', colors: ['#10B981', '#84CC16', '#0a0a0a'] }
  ];
  const fileInputRef = useRef(null);

  return (
    <div className={`edit-panel ${isOpen ? 'open' : ''}`}>
      <div className="edit-panel-header">
        <div className="edit-panel-title">编辑台</div>
        <button className="edit-panel-close" onClick={onClose}>{Icons.close}</button>
      </div>
      <div className="edit-panel-body">
        <div className="edit-section">
          <div className="edit-section-title">主题切换</div>
          <div className="theme-options">
            {themes.map(t => (
              <div
                key={t.id}
                className={`theme-option ${theme === t.id ? 'active' : ''}`}
                onClick={() => setTheme(t.id)}
              >
                <div className="theme-preview" style={{
                  background: `linear-gradient(135deg, ${t.colors[0]}, ${t.colors[1]})`
                }}></div>
                <div className="theme-name">{t.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="edit-section">
          <div className="edit-section-title">自定义颜色</div>
          <div className="edit-row">
            <label>主色调</label>
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>
          <div className="edit-row">
            <label>基准字号: {fontSize}px</label>
            <input
              type="range"
              min="12"
              max="20"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="edit-section">
          <div className="edit-section-title">上传作品</div>
          <div className="upload-area" onClick={() => fileInputRef.current?.click()}>
            <div style={{ color: '#FF9100' }}>{Icons.upload}</div>
            <p>点击上传作品图片</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>支持 JPG / PNG，单张不超过 5MB</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) onUploadWork(file);
              e.target.value = '';
            }}
          />
          {customWorks.length > 0 && (
            <div style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
              已上传 {customWorks.length} 张作品
            </div>
          )}
        </div>

        <div className="edit-section">
          <div className="edit-section-title">编辑操作说明</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 2 }}>
            <div>• <strong style={{ color: '#FF9100' }}>双击文字</strong> 直接编辑内容</div>
            <div>• <strong style={{ color: '#FF9100' }}>单击选中</strong> 元素改颜色/字号</div>
            <div>• <strong style={{ color: '#FF9100' }}>拖动元素</strong> 调整位置</div>
            <div>• <strong style={{ color: '#FF9100' }}>选中图片</strong> 可替换为图片/视频</div>
            <div>• 修改自动保存，刷新不丢失</div>
          </div>
        </div>
      </div>
      <div className="edit-panel-footer">
        <button className="btn-cancel" onClick={onCancel}>取消</button>
        <button className="btn-publish" onClick={onPublish}>
          {Icons.share}
          <span>发布预览</span>
        </button>
        <button className="btn-done" onClick={onSave}>完成</button>
      </div>
    </div>
  );
}

// ============== Main App ==============
function App() {
  // Preview mode check - from URL param
  const [previewMode, setPreviewMode] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('preview') === '1';
  });

  const [showSplash, setShowSplash] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editPanelOpen, setEditPanelOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [worksFilter, setWorksFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [publishOpen, setPublishOpen] = useState(false);

  // Selected element for property panel
  const [selectedElement, setSelectedElement] = useState(null);

  // Theme state with localStorage
  const [theme, setThemeState] = useState(() => {
    const saved = localStorage.getItem('moses_theme');
    return saved || 'red-black';
  });
  const [primaryColor, setPrimaryColorState] = useState(() => {
    const saved = localStorage.getItem('moses_primaryColor');
    return saved || '#FF5722';
  });
  const [fontSize, setFontSizeState] = useState(() => {
    const saved = localStorage.getItem('moses_fontSize');
    return saved ? Number(saved) : 16;
  });
  const [customWorks, setCustomWorks] = useState(() => {
    const saved = localStorage.getItem('moses_customWorks');
    return saved ? JSON.parse(saved) : [];
  });
  const [editableContent, setEditableContent] = useState(() => {
    const saved = localStorage.getItem('moses_editableContent');
    return saved ? JSON.parse(saved) : {};
  });
  const [elementStyles, setElementStyles] = useState(() => {
    const saved = localStorage.getItem('moses_elementStyles');
    return saved ? JSON.parse(saved) : {};
  });
  const [imageReplacements, setImageReplacements] = useState(() => {
    const saved = localStorage.getItem('moses_imageReplacements');
    return saved ? JSON.parse(saved) : {};
  });

  // Share URL
  const shareUrl = `${window.location.origin}${window.location.pathname}?preview=1`;

  // Apply theme
  useEffect(() => {
    let primary, secondary;
    switch (theme) {
      case 'cyber':
        primary = '#7C3AED'; secondary = '#06B6D4'; break;
      case 'nature':
        primary = '#10B981'; secondary = '#84CC16'; break;
      default:
        primary = '#FF3D00'; secondary = '#FF9100';
    }
    const styleEl = document.getElementById('theme-style');
    const css = `
      .gradient-text { background: linear-gradient(135deg, ${primary} 0%, ${secondary} 100%); -webkit-background-clip: text; background-clip: text; }
      .contact-btn, .hero-work-btn, .submit-btn, .btn-done, .btn-publish, .filter-chip.active, .copy-btn { background: linear-gradient(135deg, ${primary}, ${secondary}) !important; }
      .gear-btn:hover { background: rgba(130,130,130,0.2); border-color: ${primary}80; }
      .nav-logo span { color: ${primary}; }
      .footer-logo span { color: ${primary}; }
      .section-label, .hero-tagline, .timeline-year, .modal-cat, .edit-section-title { color: ${secondary}; }
      .hero-slash { color: ${primary}; }
      .timeline-item::before { background: ${primary}; box-shadow: 0 0 10px ${primary}; }
      .timeline::before { background: linear-gradient(180deg, ${primary}, ${secondary}, transparent); }
      .skill-icon { color: ${secondary}; background: linear-gradient(135deg, ${primary}22, ${secondary}22); }
      .skill-card:hover { border-color: ${primary}4d; background: ${primary}0a; }
      .skill-card::before { background: linear-gradient(90deg, transparent, ${primary}, transparent); }
      .modal-tag { background: ${primary}1a; border-color: ${primary}4d; color: ${secondary}; }
      .contact-info-icon { background: ${primary}1a; color: ${secondary}; }
      .theme-option.active { border-color: ${primary}; }
      .nav-links a:hover { color: ${primary}; }
      .nav-links a::after { background: linear-gradient(90deg, ${primary}, ${secondary}); }
      .work-cat { color: ${secondary}; }
      .work-view-btn { background: ${primary}e6; }
      .splash-logo { background: linear-gradient(135deg, ${secondary}99 0%, ${primary} 50%, ${secondary} 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
      .splash-ring { border-top-color: ${primary}; }
      .about-portrait-accent { border-color: ${primary}; }
      .about-portrait-accent span { color: ${primary}; }
      .contact-section::before { background: radial-gradient(circle, ${primary}26 0%, transparent 70%); }
      .form-group input:focus, .form-group textarea:focus { border-color: ${primary}; background: ${primary}0d; }
      .publish-icon { color: ${secondary}; background: linear-gradient(135deg, ${primary}22, ${secondary}22); }
      .tip-dot { background: ${primary}; }
      .editable-hint { background: ${primary}e6; }
      .replace-img-btn:hover { border-color: ${primary}; background: ${primary}10; }
    `;
    if (styleEl) {
      styleEl.textContent = css;
    } else {
      const s = document.createElement('style');
      s.id = 'theme-style';
      s.textContent = css;
      document.head.appendChild(s);
    }
    if (!previewMode) {
      localStorage.setItem('moses_theme', theme);
    }
  }, [theme, previewMode]);

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
    if (!previewMode) localStorage.setItem('moses_fontSize', fontSize);
  }, [fontSize, previewMode]);

  useEffect(() => {
    if (!previewMode) localStorage.setItem('moses_primaryColor', primaryColor);
  }, [primaryColor, previewMode]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply saved element styles and image replacements on load
  useEffect(() => {
    if (showSplash) return;
    // Apply element styles
    Object.entries(elementStyles).forEach(([key, style]) => {
      const el = document.querySelector(`[data-style-key="${key}"]`);
      if (el) {
        if (style.color) el.style.color = style.color;
        if (style.fontSize) el.style.fontSize = `${style.fontSize}px`;
        if (style.transform) el.style.transform = style.transform;
      }
    });
    // Apply image replacements
    Object.entries(imageReplacements).forEach(([key, src]) => {
      const container = document.querySelector(`[data-editable-image="${key}"]`);
      if (container) {
        const img = container.querySelector('img');
        if (img) img.src = src;
      }
    });
  }, [showSplash, elementStyles, imageReplacements]);

  // Assign style keys to editable elements after load
  useEffect(() => {
    if (showSplash) return;
    const editables = document.querySelectorAll('[data-editable]');
    editables.forEach((el, idx) => {
      if (!el.getAttribute('data-style-key')) {
        el.setAttribute('data-style-key', `el_${el.getAttribute('data-editable') || idx}`);
      }
    });
  }, [showSplash]);

  // Double-click to edit text (edit mode only)
  useEffect(() => {
    if (!editMode || previewMode) return;
    const handleDoubleClick = (e) => {
      const target = e.target.closest('[data-editable]');
      if (target) {
        target.contentEditable = 'true';
        target.focus();
        e.stopPropagation();
      }
    };
    document.addEventListener('dblclick', handleDoubleClick);
    return () => document.removeEventListener('dblclick', handleDoubleClick);
  }, [editMode, previewMode]);

  // Click to select element (edit mode only)
  useEffect(() => {
    if (!editMode || previewMode) return;
    const handleClick = (e) => {
      // Don't select if clicking inside edit panel or modal
      if (e.target.closest('.edit-panel') || e.target.closest('.modal-overlay') || e.target.closest('.element-prop-panel')) return;
      
      const textTarget = e.target.closest('[data-editable]');
      const imgContainer = e.target.closest('[data-editable-image]');
      const imgTarget = e.target.tagName === 'IMG' ? e.target : null;
      
      const target = textTarget || imgContainer || imgTarget;
      if (target) {
        // Remove previous selection
        document.querySelectorAll('.selected-element').forEach(el => el.classList.remove('selected-element'));
        target.classList.add('selected-element');
        setSelectedElement(target);
      } else {
        document.querySelectorAll('.selected-element').forEach(el => el.classList.remove('selected-element'));
        setSelectedElement(null);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [editMode, previewMode]);

  // Drag functionality
  useEffect(() => {
    if (!editMode || previewMode) return;
    let dragging = null;
    let startX, startY, startTransform;

    const handleMouseDown = (e) => {
      const target = e.target.closest('.selected-element');
      if (!target) return;
      // Don't drag while editing text
      if (target.contentEditable === 'true') return;
      
      dragging = target;
      startX = e.clientX;
      startY = e.clientY;
      
      const transform = getComputedStyle(target).transform;
      if (transform && transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        startTransform = { x: matrix.m41, y: matrix.m42 };
      } else {
        startTransform = { x: 0, y: 0 };
      }
      
      e.preventDefault();
    };

    const handleMouseMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const newX = startTransform.x + dx;
      const newY = startTransform.y + dy;
      dragging.style.transform = `translate(${newX}px, ${newY}px)`;
    };

    const handleMouseUp = () => {
      if (dragging) {
        // Save position
        const key = dragging.getAttribute('data-style-key') || dragging.getAttribute('data-editable-image');
        if (key) {
          const transform = dragging.style.transform;
          setElementStyles(prev => {
            const updated = { ...prev, [key]: { ...prev[key], transform } };
            if (!previewMode) localStorage.setItem('moses_elementStyles', JSON.stringify(updated));
            return updated;
          });
        }
        dragging = null;
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [editMode, previewMode]);

  // Save editable content
  const saveEditableContent = useCallback(() => {
    const elements = document.querySelectorAll('[data-editable]');
    const content = {};
    elements.forEach(el => {
      const key = el.getAttribute('data-editable');
      content[key] = el.innerHTML;
    });
    setEditableContent(content);
    localStorage.setItem('moses_editableContent', JSON.stringify(content));
  }, []);

  // Restore editable content on load
  useEffect(() => {
    if (showSplash) return;
    Object.entries(editableContent).forEach(([key, value]) => {
      const el = document.querySelector(`[data-editable="${key}"]`);
      if (el) el.innerHTML = value;
    });
  }, [showSplash]);

  // In preview mode, force load all saved edits (no edit UI)
  useEffect(() => {
    if (previewMode && !showSplash) {
      // Apply text content from localStorage
      const savedContent = localStorage.getItem('moses_editableContent');
      if (savedContent) {
        const content = JSON.parse(savedContent);
        Object.entries(content).forEach(([key, value]) => {
          const el = document.querySelector(`[data-editable="${key}"]`);
          if (el) el.innerHTML = value;
        });
      }
      // Apply element styles
      const savedStyles = localStorage.getItem('moses_elementStyles');
      if (savedStyles) {
        const styles = JSON.parse(savedStyles);
        Object.entries(styles).forEach(([key, style]) => {
          const el = document.querySelector(`[data-style-key="${key}"]`) || 
                     document.querySelector(`[data-editable-image="${key}"]`);
          if (el) {
            if (style.color) el.style.color = style.color;
            if (style.fontSize) el.style.fontSize = `${style.fontSize}px`;
            if (style.transform) el.style.transform = style.transform;
          }
        });
      }
      // Apply image replacements
      const savedImages = localStorage.getItem('moses_imageReplacements');
      if (savedImages) {
        const images = JSON.parse(savedImages);
        Object.entries(images).forEach(([key, src]) => {
          const container = document.querySelector(`[data-editable-image="${key}"]`);
          if (container) {
            const img = container.querySelector('img');
            if (img) img.src = src;
          }
        });
      }
    }
  }, [previewMode, showSplash]);

  const openEditPanel = () => {
    if (previewMode) return;
    setEditPanelOpen(true);
    setEditMode(true);
  };

  const handleSave = () => {
    saveEditableContent();
    setEditPanelOpen(false);
    setEditMode(false);
    setSelectedElement(null);
    document.querySelectorAll('[contenteditable="true"]').forEach(el => {
      el.contentEditable = 'false';
    });
    document.querySelectorAll('.selected-element').forEach(el => {
      el.classList.remove('selected-element');
    });
  };

  const handleCancel = () => {
    setEditPanelOpen(false);
    setEditMode(false);
    setSelectedElement(null);
    // Restore original content
    Object.entries(editableContent).forEach(([key, value]) => {
      const el = document.querySelector(`[data-editable="${key}"]`);
      if (el) el.innerHTML = value;
    });
    // Restore element styles - reload page is cleanest, but let's just remove inline styles that were edited
    document.querySelectorAll('[contenteditable="true"]').forEach(el => {
      el.contentEditable = 'false';
    });
    document.querySelectorAll('.selected-element').forEach(el => {
      el.classList.remove('selected-element');
    });
    // Reload to fully reset all drag/style changes
    window.location.reload();
  };

  const handleUploadWork = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newWork = {
        id: Date.now(),
        image: e.target.result,
        category: 'illustration',
        categoryLabel: '原创作品',
        title: file.name.replace(/\.[^.]+$/, ''),
        subtitle: '用户上传作品',
        desc: '这是一张上传的作品图片。'
      };
      const updated = [newWork, ...customWorks];
      setCustomWorks(updated);
      localStorage.setItem('moses_customWorks', JSON.stringify(updated));
    };
    reader.readAsDataURL(file);
  };

  const handleColorChange = (element, color) => {
    const key = element.getAttribute('data-style-key');
    if (key) {
      setElementStyles(prev => {
        const updated = { ...prev, [key]: { ...prev[key], color } };
        localStorage.setItem('moses_elementStyles', JSON.stringify(updated));
        return updated;
      });
    }
  };

  const handleFontSizeChange = (element, size) => {
    const key = element.getAttribute('data-style-key');
    if (key) {
      setElementStyles(prev => {
        const updated = { ...prev, [key]: { ...prev[key], fontSize: size } };
        localStorage.setItem('moses_elementStyles', JSON.stringify(updated));
        return updated;
      });
    }
  };

  const handleReplaceImage = (element, src) => {
    const container = element.closest('[data-editable-image]');
    const key = container ? container.getAttribute('data-editable-image') : null;
    if (key) {
      setImageReplacements(prev => {
        const updated = { ...prev, [key]: src };
        localStorage.setItem('moses_imageReplacements', JSON.stringify(updated));
        return updated;
      });
    }
  };

  const allWorks = [...customWorks, ...WORKS_DATA];
  const filteredWorks = worksFilter === 'all'
    ? allWorks
    : allWorks.filter(w => w.category === worksFilter);

  if (showSplash) {
    return <Splash onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div>
      <Navbar
        scrolled={scrolled}
        onGearClick={openEditPanel}
        editMode={editMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        previewMode={previewMode}
      />
      <Hero />
      <About />
      <Works
        filter={worksFilter}
        setFilter={setWorksFilter}
        onWorkClick={setSelectedWork}
        works={filteredWorks}
      />
      <Skills />
      <Contact />
      <Footer />

      <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />

      {!previewMode && (
        <>
          <EditPanel
            isOpen={editPanelOpen}
            onClose={handleSave}
            theme={theme}
            setTheme={setThemeState}
            primaryColor={primaryColor}
            setPrimaryColor={setPrimaryColorState}
            fontSize={fontSize}
            setFontSize={setFontSizeState}
            onUploadWork={handleUploadWork}
            customWorks={customWorks}
            onSave={handleSave}
            onCancel={handleCancel}
            onPublish={() => {
              saveEditableContent();
              setPublishOpen(true);
            }}
          />

          <ElementPropertyPanel
            element={selectedElement}
            onClose={() => {
              document.querySelectorAll('.selected-element').forEach(el => el.classList.remove('selected-element'));
              setSelectedElement(null);
            }}
            onColorChange={handleColorChange}
            onFontSizeChange={handleFontSizeChange}
            onReplaceImage={handleReplaceImage}
            editMode={editMode}
          />

          <PublishModal
            isOpen={publishOpen}
            onClose={() => setPublishOpen(false)}
            shareUrl={shareUrl}
          />

          {editMode && (
            <div className="editable-hint">
              编辑模式：双击文字修改 · 单击选中改色/字号 · 拖动调位置 · 图片可替换
            </div>
          )}
        </>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
