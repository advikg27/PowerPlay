"use client";

import React, { useState } from 'react';
import Image from 'next/image';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <a className="navbar-brand" href="#home">
          <Image src="/images/logo.png" alt="PowerPlay Logo" width={40} height={40} />
          <span>PowerPlay</span>
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
          <li><a className="nav-link" href="#home">Home</a></li>
          <li><a className="nav-link" href="#about">About</a></li>
          <li><a className="nav-link" href="#events">Tournaments</a></li>
          <li><a className="nav-link" href="#donate">Donate</a></li>
          <li><a className="nav-link" href="#team">Our Team</a></li>
          <li><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="fade-in-up">
          <span className="hero-line hero-first">Empowering Tomorrow's</span>
          <span className="hero-line solid-text">Champions</span>
        </h1>
        <p className="lead fade-in-up" style={{ animationDelay: '0.2s' }}>
          Bringing athletes together through tournaments that inspire, connect, and uplift communities.
        </p>
        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#events" className="btn btn-primary">View Tournaments</a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section-content">
        <h2 className="section-title fade-in-up">About Us</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          PowerPlay is dedicated to organizing sports tournaments that foster community, talent, and positive change.
          We believe in the power of play to transform lives, nurture leadership, and build lifelong connections.
        </p>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section id="events" className="section section-alt">
      <div className="section-content">
        <h2 className="section-title fade-in-up">Tournaments</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          Join us for exciting tournaments that bring together athletes from all backgrounds.
          Experience the thrill of competition while building lasting friendships.
        </p>
        <div className="cards-grid">
          <div className="card fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="card-title">Cricket Tournament</h3>
            <p className="card-text">
              Our premier cricket tournament featuring teams from across the region.
              Experience the excitement of competitive cricket in a supportive environment.
            </p>
            <div className="card-meta">January - June 2025</div>
            <a href="/cricket" className="btn btn-outline">View Tournament</a>
          </div>
          <div className="card fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="card-title">Pickleball Tournament</h3>
            <p className="card-text">
              A fun and inclusive pickleball tournament for players of all skill levels.
              Perfect for both beginners and experienced players.
            </p>
            <div className="card-meta">July 2025</div>
            <a href="/pickleball" className="btn btn-outline">View Tournament</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DonateSection() {
  return (
    <section id="donate" className="section">
      <div className="section-content">
        <h2 className="section-title fade-in-up">Support the Mission</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          Your support helps us create more opportunities for athletes and build stronger communities.
          Every contribution makes a difference in someone&apos;s life.
        </p>
        <div className="button-group fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="https://hcb.hackclub.com/donations/start/powerplay" className="btn btn-primary">Donate Now</a>
          <a href="#about" className="btn btn-outline">Learn More</a>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const teamMembers = [
    { img: '/images/raghav.png', name: 'Raghav Sridhar', role: 'Founder & President' },
    { img: '/images/advik.jpeg', name: 'Advik Gupta', role: 'Vice President / CTO' },
    { img: '/images/aryan.jpeg', name: 'Aryan Gokul', role: 'COO' },
    { img: '/images/ishaan.jpeg', name: 'Ishaan Acharya', role: 'CFO' },
    { img: '/images/vedhas.png', name: 'Vedhas', role: 'CAO' },
    { img: '/images/rochit.jpg', name: 'Rochit', role: 'Marketing Director' },
  ];

  return (
    <section id="team" className="section section-alt">
      <div className="section-content">
        <h2 className="section-title fade-in-up">Our Team</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          Meet the passionate individuals behind PowerPlay who are dedicated to creating
          meaningful experiences through sports and community building.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <div style={{
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-surface-3)',
                position: 'relative',
              }}>
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="team-card-content">
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="section-content">
        <h2 className="section-title fade-in-up">Contact Us</h2>
        <p className="section-text fade-in-up" style={{ animationDelay: '0.2s' }}>
          Get in touch with us to learn more about our tournaments, volunteer opportunities,
          or how you can support our mission.
        </p>
        <div className="button-group fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="mailto:info@powerplaynpo.org" className="btn btn-primary">Email Us</a>
          <a href="#about" className="btn btn-outline">Learn More</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About PowerPlay</h3>
          <p>Empowering tomorrow&apos;s champions through sports tournaments and community building.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#about">About Us</a>
          <a href="#events">Tournaments</a>
          <a href="#team">Our Team</a>
          <a href="#donate">Donate</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <a href="mailto:powerplaynpo@gmail.com">powerplaynpo@gmail.com</a>
          <p>Get in touch to learn more about our tournaments and how you can get involved.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 PowerPlay. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <DonateSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
