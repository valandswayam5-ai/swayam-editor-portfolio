"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Instagram, Play, Volume2, VolumeX } from "lucide-react";

const videoSources: Record<string, string> = {
  "1st.mp4": "https://www.dropbox.com/scl/fi/neaf1p4qunaipq4vuv97y/1st.mp4?rlkey=9v83qi2mprwe1unrf6k3mhs5x&st=g2sd8j8p&raw=1",
  "2nd.mp4": "https://www.dropbox.com/scl/fi/tj985agex4y56431f9ki8/2nd.mp4?rlkey=16cq81f2d2y8ilkq2yly0ljgl&st=fenrb572&raw=1",
  "3rd.mp4": "https://www.dropbox.com/scl/fi/hnqnrt21wm47l75uiprdz/3rd.mp4?rlkey=kndzh1r4q1bzjkg5mkhfr7wn7&st=tb0xx9my&raw=1",
  "4th.mp4": "https://www.dropbox.com/scl/fi/bx4y0aexnvussq737cx1n/4th.mp4?rlkey=rliapduo6f96n7wr1c9q1n34k&st=eucu13y4&raw=1",
  "5th.mp4": "https://www.dropbox.com/scl/fi/v5uuimuaxgqq8jjowpwt2/5th.mp4?rlkey=htxrwiswqjv4782f6rffrubl3&st=wdrc8cbp&raw=1",
  "6th.mp4": "https://www.dropbox.com/scl/fi/ymfxvks6n2jcqmiior8tr/6th.mp4?rlkey=nqoad4txd29k03d6o22yfu43l&st=myxbzlew&raw=1",
  "7th.mp4": "https://www.dropbox.com/scl/fi/owfoykjagao0wy45ydvgv/7th.mp4?rlkey=1f5cxtcleimuukpdb0iv3pybo&st=t5ei4w5l&raw=1",
  "8th.mp4": "https://www.dropbox.com/scl/fi/uwv767ufj3bz3q5ryt6je/8th.mp4?rlkey=fmp4in2h3444gdb0j2v5axmc9&st=0s7c977r&raw=1",
  "9th.mp4": "https://www.dropbox.com/scl/fi/iwx1bppycrl9l1iqbp2mw/9th.mp4?rlkey=gix8r3wb4zjlhdy7d41ig5uii&st=z6zcyn0f&raw=1",
  "10th.mp4": "https://www.dropbox.com/scl/fi/ga63me68u76nskksd3ig3/10th.mp4?rlkey=0tma5ii6ev38joqby1ejcjuw1&st=yb6118ki&raw=1",
  "showcase-reel.mp4": "https://www.dropbox.com/scl/fi/wrkgloebtdz6dbkv3f7lc/showcase-reel.mp4?rlkey=8n6k8e058v50rh2jcyf9ebw68&st=q1bcnyp2&raw=1",
};

const personal = [
  { file: "1st.mp4", number: "01", name: "The Ghost Within", type: "PERSONAL EDIT", shape: "portrait" },
  { file: "2nd.mp4", number: "02", name: "Visual Rhythm", type: "PERSONAL EDIT", shape: "portrait" },
  { file: "3rd.mp4", number: "03", name: "Frame by Frame", type: "PERSONAL EDIT", shape: "portrait" },
  { file: "4th.mp4", number: "04", name: "After Hours", type: "PERSONAL EDIT", shape: "portrait" },
  { file: "5th.mp4", number: "05", name: "In Pursuit of Cinema", type: "PERSONAL EDIT", shape: "portrait" },
];
const clients = [
  { file: "6th.mp4", number: "06", name: "A Celebration of New Beginnings", type: "CLIENT PROJECT", shape: "portrait" },
  { file: "7th.mp4", number: "07", name: "Little Moments, Forever", type: "CLIENT PROJECT", shape: "portrait" },
  { file: "8th.mp4", number: "08", name: "The Grand Opening", type: "CLIENT PROJECT", shape: "portrait" },
  { file: "9th.mp4", number: "09", name: "Brand in the Spotlight", type: "CLIENT PROJECT", shape: "portrait" },
  { file: "10th.mp4", number: "10", name: "The Model Edit", type: "CLIENT PROJECT", shape: "portrait" },
];

type Item = typeof personal[number];

function ProjectCard({ item, index }: { item: Item; index: number }) {
  return (
    <article className="project-card reveal" style={{ ["--delay" as string]: `${index * 70}ms` }}>
      <div className="video-frame">
        <video className="portfolio-video" src={videoSources[item.file]} controls playsInline preload="metadata" />
        <span className="card-index">{item.number}</span>
      </div>
      <div className="project-meta">
        <span className="project-type">{item.type}</span>
        <h3>{item.name}</h3>
      </div>
    </article>
  );
}

function WorkSection({ id, number, title, note, items }: { id: string; number: string; title: string; note: string; items: Item[] }) {
  return (
    <section className="work-section" id={id}>
      <div className="section-heading reveal">
        <span className="section-number">{number} / SELECTED WORK</span>
        <h2>{title}<span>.</span></h2>
        <p>{note}</p>
        <p className="video-viewing-hint">For the best viewing experience, switch to fullscreen.</p>
      </div>
      <div className="project-grid">{items.map((item, index) => <ProjectCard key={item.file} item={item} index={index} />)}</div>
    </section>
  );
}

export default function Home() {
  const [showreelMuted, setShowreelMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    const onScroll = () => {
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 0.9, 1), 1);
      document.documentElement.style.setProperty("--hero-progress", String(progress));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <video className="hero-background-video" src={videoSources["showcase-reel.mp4"]} autoPlay muted={showreelMuted} loop playsInline preload="metadata" />
        <div className="hero-shade" />
        <nav className="nav">
          <a className="brand" href="#top">SWAYAM<span>®</span></a>
          <div className="nav-links"><a href="#personal">WORK</a><a href="#about">ABOUT</a><a href="https://instagram.com/vision.swym" target="_blank" rel="noreferrer">INSTAGRAM ↗</a></div>
        </nav>
        <div className="hero-layout">
          <div className="hero-copy">
            <span className="hero-kicker reveal">SWAYAM VALAND · VIDEO EDITOR · INDIA</span>
            <h1 className="reveal">Stories<br /><em>in motion.</em></h1>
            <p className="reveal">I turn raw footage into visual stories<br />that move people and hold attention.</p>
            <a className="hero-cta reveal" href="#personal">EXPLORE SELECTED WORK <ArrowDown size={15} /></a>
          </div>
        </div>
        <button type="button" className="hero-audio-toggle" onClick={() => setShowreelMuted((muted) => !muted)} aria-label={showreelMuted ? "Unmute showreel" : "Mute showreel"}>
          {showreelMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          {showreelMuted ? "UNMUTE AUDIO" : "MUTE AUDIO"}
        </button>
        <div className="hero-bottom"><span>EDITING · STORYTELLING · VISUALS</span><span>SCROLL TO EXPLORE ↓</span></div>
        <div className="hero-count">01 <i>—</i> 04</div>
      </section>

      <section className="intro-section">
        <div className="intro-top"><span className="section-number">A VISUAL PRACTICE</span><span>2026 — PRESENT</span></div>
        <div className="intro-copy reveal"><h2>Every frame<br />has a <em>feeling.</em></h2><p>From fast-paced creator edits to cinematic real-estate films, I shape footage with rhythm, detail and purpose.</p></div>
        <div className="intro-bottom"><span>SCROLL THROUGH THE WORK</span><span>02 / 04</span></div>
      </section>

      <WorkSection id="personal" number="02" title="Personal edits" note="Experiments in rhythm, transitions, sound design and visual language." items={personal} />
      <WorkSection id="clients" number="03" title="Client projects" note="Selected collaborations made for creators, brands and businesses." items={clients} />

      <section className="showreel-section" id="showreel">
        <div className="section-number reveal">04 / THE REEL</div>
        <div className="showreel-heading reveal"><h2>A little<br /><em>of everything.</em></h2><p>A collection of moments, details and stories — cut together in one place.</p></div>
        <div className="showreel-player reveal"><video className="portfolio-video" src={videoSources["showcase-reel.mp4"]} controls playsInline preload="metadata" /><span><Play size={13} fill="currentColor" /> SHOWREEL · 2026</span></div>
      </section>

      <section className="about-section about-reference-section" id="about">
        <div className="about-reference-top">
          <div className="about-reference-intro">
            <div className="about-reference-title"><span>About me</span></div>
            <div className="about-reference-copy">
              <p>Hi!</p>
              <p>My name is Swayam Valand.</p>
              <p>I am a video editor from India, passionate about turning raw footage into engaging visual stories through rhythm, pacing, music and detail.</p>
              <p className="about-objective"><span>My objective:</span> Keep learning, challenge myself with new creative projects, and create edits that connect with people and leave a lasting impression.</p>
            </div>
            <div className="about-reference-contact">
              <h3>Contact</h3>
              <a href="mailto:visionswym@gmail.com"><span className="contact-symbol">@</span><span>visionswym@gmail.com</span><ArrowUpRight size={14} /></a>
              <a href="https://instagram.com/vision.swym" target="_blank" rel="noreferrer"><span className="contact-symbol"><Instagram size={17} /></span><span>@vision.swym</span><ArrowUpRight size={14} /></a>
            </div>
          </div>
          <div className="about-reference-portrait">
            <div className="portrait-orbit portrait-orbit-a" />
            <div className="portrait-orbit portrait-orbit-b" />
            <div className="portrait-photo-frame">
              <img src="https://www.dropbox.com/scl/fi/n642s7izvu6dub3nfrpzs/swayam.png?rlkey=hczeyx9i8ugorutlcqnavowl0&raw=1" alt="Portrait of Swayam Valand" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="about-reference-panel">
          <div className="reference-column">
            <div className="reference-info-block">
              <div className="reference-heading-row"><h3>Education</h3><span className="education-date">2026 — Present</span></div>
              <p>Class 12 Commerce · Gujarat Board (GSEB)</p>
            </div>
            <div className="reference-info-block">
              <h3>Technical skill</h3>
              <div className="software-icons">
                <a className="software-app" href="https://www.adobe.com/products/premiere.html" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" alt="" loading="lazy" /></a>
                <a className="software-app" href="https://www.canva.com/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/canva.svg" alt="" loading="lazy" /></a>
                <a className="software-app" href="https://chatgpt.com/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg" alt="" loading="lazy" /></a>
                <a className="software-app" href="https://github.com/" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/github/FFFFFF" alt="" loading="lazy" /></a>
                <a className="software-app" href="https://vercel.com/" target="_blank" rel="noreferrer"><img src="https://cdn.simpleicons.org/vercel/FFFFFF" alt="" loading="lazy" /></a>
                <a className="software-app" href="https://antigravity.google/" target="_blank" rel="noreferrer"><img src="https://antigravity.google/assets/image/brand/antigravity-icon__full-color.svg" alt="" loading="lazy" /></a>
              </div>
            </div>
            <div className="reference-info-block">
              <h3>Interest</h3>
              <div className="reference-inline-list"><span>AI</span><i /><span>Filmmaking</span><i /><span>Technology</span></div>
            </div>
          </div>
          <div className="reference-column">
            <div className="reference-info-block">
              <h3>Soft skill</h3>
              <div className="reference-split-list"><span>Creativity</span><span>Communication</span><span>Problem-solving</span><span>Curiosity</span></div>
            </div>
            <div className="reference-info-block">
              <h3>Skill set</h3>
              <div className="reference-split-list"><span>Video editing</span><span>Storytelling</span><span>Web development</span><span>App development</span><span>AI-assisted creativity</span><span>Content creation</span></div>
            </div>
            <div className="reference-info-block">
              <h3>Language</h3>
              <div className="reference-inline-list"><span>Gujarati</span><i /><span>Hindi</span><i /><span>English</span></div>
            </div>
          </div>
        </div>
        <div className="inquiry-section reveal" id="inquiry">
          <div className="inquiry-heading">
            <span>HAVE A PROJECT IN MIND?</span>
            <h3>Let’s make something<br /><em>worth watching.</em></h3>
            <p>Tell me a little about your project and I’ll get back to you by email.</p>
          </div>
          <form className="inquiry-form" onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const name = String(data.get("name") || "");
            const email = String(data.get("email") || "");
            const project = String(data.get("project") || "");
            const message = String(data.get("message") || "");
            const subject = encodeURIComponent("Project inquiry — " + project);
            const body = encodeURIComponent("Name: " + name + "\\nEmail: " + email + "\\nProject type: " + project + "\\n\\nProject details:\\n" + message);
            window.location.href = "mailto:visionswym@gmail.com?subject=" + subject + "&body=" + body;
          }}>
            <label>Your name<input name="name" type="text" placeholder="Enter your name" required /></label>
            <label>Your email<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>What do you need?<select name="project" defaultValue="" required><option value="" disabled>Select project type</option><option>Video editing</option><option>Reels / short-form content</option><option>Event or promotional video</option><option>Web development</option><option>App development</option><option>Other</option></select></label>
            <label className="inquiry-message">Project details<textarea name="message" rows={5} placeholder="Share your idea, goals, timeline or any useful details..." required /></label>
            <button type="submit">SEND INQUIRY <ArrowUpRight size={15} /></button>
            <p className="inquiry-note">Submitting opens your email app with the inquiry filled in. You’ll send it from there.</p>
          </form>
        </div>
        <div className="about-bottom-line"><span>CURIOUS BY NATURE. CREATIVE BY CHOICE.</span><span>ONE STEP AT A TIME ↗</span></div>
        <footer className="footer"><a className="brand" href="#top">SWAYAM<span>®</span></a><span>VIDEO EDITOR · VISUAL STORYTELLER</span><a href="https://instagram.com/vision.swym" target="_blank" rel="noreferrer"><Instagram size={15} /> @VISION.SWYM <ArrowUpRight size={14} /></a><span>© 2026 · ALL RIGHTS RESERVED</span></footer>
      </section>
    </main>
  );
}
