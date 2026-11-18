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
          <div className="nav-links"><a href="#personal">WORK</a><a href="#about">ABOUT</a><a href="https://instagram.com/vision.swayam" target="_blank" rel="noreferrer">INSTAGRAM ↗</a></div>
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

      <section className="about-section about-profile-section" id="about">
        <div className="about-top"><span className="section-number">05 / THE PERSON BEHIND THE WORK</span><span>SWAYAM®</span></div>
        <div className="about-title-wrap reveal"><span className="about-title-pill">A LITTLE ABOUT ME</span><h2>More than<br /><em>the edit.</em></h2><p>A curious mind, a creative process, and a love for making things move.</p></div>
        <div className="about-profile-grid">
          <div className="about-portrait-placeholder reveal" aria-label="Portrait photo will be added later">
            <div className="portrait-orbit portrait-orbit-one" /><div className="portrait-orbit portrait-orbit-two" />
            <span className="portrait-monogram">S<span>.</span></span>
            <span className="portrait-placeholder-label">YOUR PORTRAIT<br />WILL LIVE HERE</span>
            <span className="portrait-index">PROFILE / 01</span>
          </div>
          <div className="about-profile-copy reveal">
            <span className="about-eyebrow">THE EDITOR BEHIND THE FRAME</span>
            <h3>Swayam Valand.<br /><em>Video editor & visual storyteller.</em></h3>
            <p>I’m Swayam Valand, an independent video editor from India. I enjoy turning raw footage into engaging visual stories, using pacing, music, transitions and detail to shape the way a video feels.</p>
            <p>This portfolio brings together my personal edits and client projects. My work explores cinematic-style edits, short-form social content, event highlights, promotional videos and model reels. Every personal edit is a chance to experiment, improve my craft and develop my own editing style.</p>
            <p>I’m continuously learning, refining my workflow and looking for new creative challenges. My goal is simple: make every edit feel intentional and leave a lasting impression.</p>
            <div className="about-contact-row"><span>FOLLOW MY EDITS</span><a href="https://instagram.com/vision.swayam" target="_blank" rel="noreferrer">@VISION.SWAYAM <ArrowUpRight size={14} /></a></div>
          </div>
        </div>
        <div className="about-info-panel reveal">
          <div className="about-panel-heading"><span>THE DETAILS</span><p>A snapshot of what I’m learning, creating and exploring.</p></div>
          <div className="about-info-grid">
            <div className="about-info-card"><span>01 / SKILLS</span><h3>What I work on</h3><div className="about-tags"><i>Video Editing</i><i>Storytelling</i><i>Sound Design</i><i>Transitions</i><i>Short-form Content</i><i>Color & Pacing</i></div></div>
            <div className="about-info-card"><span>02 / LANGUAGES</span><h3>How I communicate</h3><div className="about-tags"><i>Hindi</i><i>English</i><i>Gujarati</i></div></div>
            <div className="about-info-card"><span>03 / SOFT SKILLS</span><h3>How I approach things</h3><div className="about-tags"><i>Creativity</i><i>Problem-solving</i><i>Curiosity</i><i>Fast learning</i><i>Communication</i></div></div>
            <div className="about-info-card"><span>04 / INTERESTS</span><h3>Always exploring</h3><div className="about-tags"><i>Cinematic Edits</i><i>Reels</i><i>Music & Rhythm</i><i>Visual Storytelling</i></div></div>
            <div className="about-info-card about-tools-card"><span>05 / TOOLS & APPS</span><h3>My current toolkit</h3><div className="about-tags"><i>Adobe Premiere Pro</i><i>Canva</i><i>CapCut</i><i>ChatGPT</i><i>GitHub</i><i>Vercel</i><i>Dropbox</i></div></div>
            <div className="about-info-card"><span>06 / EDUCATION</span><h3>Currently studying</h3><p>Class 12 Commerce · Gujarat Secondary and Higher Secondary Education Board (GSEB)</p></div>
          </div>
        </div>
        <div className="about-bottom-line"><span>CURIOUS BY NATURE. CREATIVE BY CHOICE.</span><span>ONE STEP AT A TIME ↗</span></div>
        <footer className="footer"><a className="brand" href="#top">SWAYAM<span>®</span></a><span>VIDEO EDITOR · VISUAL STORYTELLER</span><a href="https://instagram.com/vision.swayam" target="_blank" rel="noreferrer"><Instagram size={15} /> @VISION.SWAYAM <ArrowUpRight size={14} /></a><span>© 2026 · ALL RIGHTS RESERVED</span></footer>
      </section>
    </main>
  );
}
