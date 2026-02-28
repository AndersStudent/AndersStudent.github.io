import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const About: React.FC = () => {

  const location = useLocation();

  const [mailForm, setMailForm] = useState({ name: '', subject: '', message: '' });

  const handleMailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, subject, message } = mailForm;
    const body = `From: ${name}\n\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=anderslundbusiness@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const primaryLangs = ['Unity (C#)', 'Python', 'MATLAB', 'JavaScript'];
  const additionalLangs = ['C++', 'C#', 'Java', 'R', 'PHP', 'SQL', 'HTML & CSS'];
  const visualTools = ['Blender', 'Photoshop', 'Krita', 'Figma', 'Aseprite', 'MagicaVoxel'];
  const devTools = ['Unity', 'VR Development', 'AR Development', 'Visual Studio', 'Visual Studio Code'];
  const specializations = ['Game Design & Development', 'Interactive Systems', 'Procedural Generation', 'AI-driven Systems', 'Problem-Solving', ];
  const softSkills = ['Works well under pressure', 'Team & solo environments', 'Communication & teaching', 'Debugging & problem-solving'];

  return (
    <div className="about-page">

      {/* Intro */}
      <section className="about-intro">
        <h1>About Me</h1>
        <p>
          Hi, I&apos;m <strong>Anders Lucassen Lund</strong>. I&apos;m 25 years old and a{' '}
          <strong>Master&apos;s Student in Medialogy</strong> at <strong>Aalborg University</strong>.
          I have been developing games since 2016, giving me over 9 years of experience in the field,
          and currently live in Aalborg, Denmark (9000).
        </p>
        <p>
          I specialize in{' '}
          <strong>game development, game design, programming, procedural generation, interactive systems</strong>,
          and <strong>AI-driven applications</strong>, with academic and personal work spanning fields
          from <strong>VR</strong> and <strong>Computer vision</strong> to{' '}
          <strong>Bots</strong> and <strong>Finance</strong>.
        </p>
        <p>
          My typical roles include <strong>Lead Programmer</strong>,{' '}
          <strong>System Integrator</strong>, and <strong>Project Director</strong>,
          with experience across design and production pipelines.
        </p>

        <div className="about-stats">
          <div className="about-stat-card">
            <span className="stat-value">9+</span>
            <span className="stat-label">Years in Game Dev</span>
          </div>
          <div className="about-stat-card">
            <span className="stat-value">Master&apos;s</span>
            <span className="stat-label">Medialogy &mdash; AAU</span>
          </div>
          <div className="about-stat-card">
            <span className="stat-value">Game Studio</span>
            <span className="stat-label">Pennie Entertainment ApS</span>
          </div>
          <div className="about-stat-card">
            <span className="stat-value">Aalborg</span>
            <span className="stat-label">Denmark, 9000</span>
          </div>
        </div>
      </section>

      {/* Background */}
      <section id="Background" className="about-section">
        <h2>Background</h2>
        <div className="about-prose">
          <p>
            I&apos;m the founder of <strong>Pennie Entertainment ApS</strong>, a former solo game
            development studio (2020&ndash;2025) where I published 2 games.
          </p>
          <p>
            I have a Bachelor&apos;s degree in <strong>Medialogy</strong> from{' '}
            <strong>Aalborg University</strong> and am currently pursuing a{' '}
            <strong>Master&apos;s degree</strong> in the same field.
          </p>
          <p>
            I began my journey in game development in 2016 while in primary school and have been
            creating games ever since, developing my first game in my spare time using{' '}
            <strong>GameMaker</strong>. I am largely self-taught in <strong>Programming</strong> and{' '}
            <strong>Game Development</strong>.
          </p>
          <p>
          Beyond games, my work spans a broad range of technical domains, from{' '}
          <strong>AI-driven tutoring systems</strong> and <strong>VR cultural experiences </strong>
          to <strong>computer vision</strong>, <strong>audio signal processing</strong>, and
          personal projects like a <strong>stock trading bot</strong> and{' '}
          <strong>drone engineering</strong>.
        </p>
          <p>
            I have also worked as a childcare assistant in a daycare and kindergarten for over half a
            year. This experience strengthened my communication, patience, and teaching skills,
            reinforcing my long-term goal of becoming an educator.
          </p>
        </div>
      </section>

      {/* Experience & Skills */}
      <section id="Experience" className="about-section">
        <h2>Experience &amp; Skills</h2>

        <div className="skills-grid">
          <div className="skills-group">
            <h3>Primary Languages</h3>
            <div className="tag-list">
              {primaryLangs.map(t => <span key={t} className="skill-tag skill-tag--primary">{t}</span>)}
            </div>
          </div>

          <div className="skills-group">
            <h3>Additional Languages</h3>
            <div className="tag-list">
              {additionalLangs.map(t => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>

          <div className="skills-group">
            <h3>Visual Tools</h3>
            <div className="tag-list">
              {visualTools.map(t => <span key={t} className="skill-tag skill-tag--tools">{t}</span>)}
            </div>
          </div>

          <div className="skills-group">
            <h3>Development Tools</h3>
            <div className="tag-list">
              {devTools.map(t => <span key={t} className="skill-tag skill-tag--tools">{t}</span>)}
            </div>
          </div>

          <div className="skills-group skills-group--full">
            <h3>Specializations</h3>
            <div className="tag-list">
              {specializations.map(t => <span key={t} className="skill-tag skill-tag--spec">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section id="Skills" className="about-section">
        <h2>Soft Skills</h2>
        <div className="tag-list">
          {softSkills.map(s => <span key={s} className="skill-tag skill-tag--soft">{s}</span>)}
        </div>
      </section>

      {/* Hobbies */}
      <section id="Hobbies" className="about-section">
        <h2>Hobbies</h2>
        <div className="about-prose">
          <p>
            Most of my spare time is spent with friends, relaxing, playing games, or working on
            personal projects together. The remaining time is dedicated to developing my own
            projects, as seen under &ldquo;In Development.&rdquo;
          </p>
          <p>
            I am currently working on a new <strong>creature-collection auto-chess</strong> game and
            an <strong>automated stock trading bot</strong>.
          </p>
          <p>
            I also enjoy <strong>writing, storytelling, helping others learn</strong>, and{' '}
            <strong>creating custom food recipes</strong>.
          </p>
        </div>
      </section>

      {/* Goal */}
      <section id="Goal" className="about-section">
        <h2>Goal</h2>
        <div className="about-goal-box">
          <p>
            My goal is to continue expanding my knowledge across different technical fields and
            eventually become an educator for primary school students in game design and development,
            inspiring others to pursue their creative ambitions.
          </p>
        </div>
      </section>

      {/* Mail Form */}
      <section id="SendMeAMessage" className="about-section">
        <h2>Send Me a Message</h2>
        <p className="contact-form-desc">Fill in the form below and your default mail client will open with everything pre-filled.</p>
        <form className="contact-form" onSubmit={handleMailSubmit}>
          <div className="contact-form-row">
            <label htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              type="text"
              placeholder="Your name"
              value={mailForm.name}
              onChange={e => setMailForm(f => ({ ...f, name: e.target.value }))}
              required
            />
          </div>
          <div className="contact-form-row">
            <label htmlFor="cf-subject">Subject</label>
            <input
              id="cf-subject"
              type="text"
              placeholder="Subject"
              value={mailForm.subject}
              onChange={e => setMailForm(f => ({ ...f, subject: e.target.value }))}
              required
            />
          </div>
          <div className="contact-form-row">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              placeholder="Your message..."
              rows={6}
              value={mailForm.message}
              onChange={e => setMailForm(f => ({ ...f, message: e.target.value }))}
              required
            />
          </div>
          <button type="submit" className="contact-form-btn">Open in Mail Client</button>
        </form>
      </section>

      {/* Contact & Links */}
      <section className="about-section about-contact-row">
        <div id="Contact-Info" className="contact-block">
          <h2>Contact</h2>
          <p>Feel free to reach out:</p>
          <ul className="contact-list">
            <li>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anderslundbusiness@gmail.com" target="_blank" rel="noopener noreferrer">anderslundbusiness@gmail.com</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anders-lucassen-lund-76a2261a1/">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div id="Links" className="contact-block">
          <h2>Links</h2>
          <ul className="contact-list">
            <li>
              <a href="https://github.com/AndersStudent">GitHub (School)</a>
            </li>
            <li>
              <a href="https://github.com/pennieentertainment">GitHub (Private)</a>
            </li>
            <li>
              <a href="https://store.steampowered.com/search/?sort_by=_ASC&supportedlang=english&developer=Pennie+Entertainment+ApS">
                Steam Developer Page
              </a>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default About;
