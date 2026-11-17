"use client";

import { useEffect } from "react";
import { ArrowDownRight, ArrowUpRight, Play, Plus } from "lucide-react";

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
  { file: "1st.mp4", number: "01", name: "Motion Study", type: "PERSONAL EDIT", shape: "wide" },
  { file: "2nd.mp4", number: "02", name: "Visual Rhythm", type: "PERSONAL EDIT", shape: "tall" },
  { file: "3rd.mp4", number: "03", name: "Frame by Frame", type: "PERSONAL EDIT", shape: "wide" },
  { file: "4th.mp4", number: "04", name: "After Hours", type: "PERSONAL EDIT", shape: "wide" },
  { file: "5th.mp4", number: "05", name: "Moving Stories", type: "PERSONAL EDIT", shape: "tall" },
];
const clients = [
  { file: "6th.mp4", number: "06", name: "Brand Story", type: "CLIENT PROJECT", shape: "wide" },
  { file: "7th.mp4", number: "07", name: "Real Estate Film", type: "CLIENT PROJECT", shape: "wide" },
  { file: "8th.mp4", number: "08", name: "Creator Content", type: "CLIENT PROJECT", shape: "wide" },
  { file: "9th.mp4", number: "09", name: "Vertical Story", type: "CLIENT PROJECT", shape: "tall" },
  { file: "10th.mp4", number: "10", name: "Short-form Edit", type: "CLIENT PROJECT", shape: "tall" },
];

function ProjectCard({ item, index }: { item: typeof personal[number]; index: number }) {
  return (
    <article className={`project-card ${item.shape} reveal`} style={{ ["--delay" as string]: `${index * 90}ms` }}>
      <div className="video-frame">
        <video src={videoSources[item.file]} controls playsInline preload="metadata" />
        <span className="card-index">{item.number}</span>
        <span className="card-open"><ArrowUpRight size={18} /></span>
      </div>
      <div className="project-meta"><div><span>{item.type}</span><h3>{item.name}</h3></div><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
    </article>
  );
}

function WorkSection({ id, eyebrow, title, description, items }: { id: string; eyebrow: string; title: string; description: string; items: typeof personal }) {
  return <section className="work-section section-pad" id={id}>
    <div className="section-heading reveal">
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      <p>{description}</p>
    </div>
    <div className="project-grid">{items.map((item, index) => <ProjectCard key={item.file} item={item} index={index} />)}</div>
  </section>;
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    const onScroll = () => document.documentElement.style.setProperty("--scroll", String(window.scrollY));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return <main>
    <nav className="nav"><a className="brand" href="#">SWAYAM<span>®</span></a><div className="nav-links"><a href="#personal">Selected work</a><a href="#about">About</a><a className="nav-contact" href="mailto:YOUR_EMAIL@example.com">Let’s talk <ArrowUpRight size={15}/></a></div></nav>
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-top"><span>INDEPENDENT VIDEO EDITOR</span><span>BASED IN INDIA · AVAILABLE FOR PROJECTS</span></div>
      <div className="hero-content"><p className="eyebrow reveal">VISUALS WITH INTENTION. STORIES WITH IMPACT.</p><h1 className="reveal">MADE TO<br/><em>MOVE</em> YOU<span className="blue-dot">.</span></h1><div className="hero-bottom reveal"><p>I shape raw footage into sharp, cinematic stories<br/>built to hold attention and leave a feeling.</p><a href="#personal" className="round-link" aria-label="Explore work"><ArrowDownRight size={25}/></a></div></div>
      <div className="hero-foot"><span>EDITING · STORYTELLING · MOTION</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>

    <section className="showreel-section section-pad" id="showreel">
      <div className="section-heading reveal"><div><span className="eyebrow">01 / THE INTRODUCTION</span><h2>Showreel<span className="blue-dot">.</span></h2></div><p>A quick look at the pace, detail<br/>and energy behind my edits.</p></div>
      <div className="showreel-player reveal"><video src={videoSources["showcase-reel.mp4"]} controls playsInline preload="metadata" /><div className="reel-label"><Play size={13} fill="currentColor"/> 2026 · SELECTED MOMENTS</div></div>
    </section>

    <WorkSection id="personal" eyebrow="02 / EXPERIMENTS & EXPLORATION" title="Personal Edits." description="A space to experiment with rhythm, transitions, sound and visual language." items={personal}/>
    <WorkSection id="clients" eyebrow="03 / WORK MADE TOGETHER" title="Client Projects." description="Selected work created for people, brands and businesses. Shared with permission." items={clients}/>

    <section className="about-section section-pad" id="about"><div className="about-left reveal"><span className="eyebrow">04 / A LITTLE ABOUT ME</span><h2>Good editing<br/>is felt<span className="blue-dot">.</span></h2></div><div className="about-copy reveal"><p>I’m Swayam, a video editor focused on turning ideas and footage into engaging visual experiences. From creator content to real-estate films, I care about the details that make a story flow.</p><a href="mailto:YOUR_EMAIL@example.com" className="text-link">HAVE A PROJECT IN MIND? <ArrowUpRight size={17}/></a></div></section>
    <footer className="footer"><a className="brand" href="#">SWAYAM<span>®</span></a><span>INDEPENDENT VIDEO EDITOR</span><a href="mailto:YOUR_EMAIL@example.com">GET IN TOUCH <ArrowUpRight size={15}/></a><span>© 2026 SWAYAM · MADE WITH INTENTION</span></footer>
  </main>;
}
