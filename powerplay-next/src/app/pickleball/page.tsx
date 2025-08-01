"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    return (
        <nav className="navbar navbar-dark glass">
            <div className="navbar-container">
                <Link className="navbar-brand navbar-brand-dark" href="/">
                    <Image src="/images/logo.png" alt="PowerPlay Logo" width={40} height={40} />
                    PowerPlay
                </Link>
                <div className="navbar-nav navbar-nav-dark">
                    {[
                        { href: "/", text: "HOME" },
                        { href: "/#about", text: "ABOUT" },
                        { href: "/#events", text: "TOURNAMENTS" },
                        { href: "/#donate", text: "DONATE" },
                        { href: "/#team", text: "OUR TEAM" },
                        { href: "/#contact", text: "CONTACT" }
                    ].map((link) => (
                        <Link key={link.text} href={link.href} className="nav-link nav-link-dark">
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default function PickleballTournamentPage() {
    return (
        <div className="cricket-page">
            <Navbar />

            {/* Header */}
            <div className="pickleball-hero">
                <div className="container">
                    <h1>Pickleball Tournament 2025</h1>
                    <p>July 6, 2025 • 2:00 PM - 7:00 PM</p>
                </div>
            </div>

            {/* About Section */}
            <div className="section section-dark">
                <div className="container">
                    <div className="cricket-card">
                        <h2 className="section-title section-title-light">About the Tournament</h2>
                        <p>
                            The 2025 PowerPlay Pickleball Tournament brought together players from across the region for an exciting day of competitive doubles play. The tournament featured a single-elimination bracket format with 10 teams competing for the championship title.
                        </p>
                        <p>
                            The tournament showcased incredible sportsmanship and skill, with close matches throughout the day. The final match was a thrilling showdown between two talented teams, with Adithan &amp; Ritvick emerging as the tournament champions.
                        </p>
                        <p>
                            Special thanks to all participants and volunteers for making this tournament a memorable success. The event raised funds to support the fight against pediatric cancer.
                        </p>
                    </div>
                </div>
            </div>

            {/* Final Results Section */}
            <div className="section section-alt-dark">
                <div className="container">
                    <h2 className="section-title section-title-light text-center">Tournament Results</h2>
                    <div className="scorecard-card">
                        <div className="scorecard-row">🏆 Champions: Adithan &amp; Ritvick</div>
                        <div className="scorecard-row">🥈 Runner-up: Biswajit &amp; Arvind</div>
                    </div>
                </div>
            </div>

            {/* Tournament Bracket Results */}
            <div className="section section-dark">
                <div className="container">
                    <h2 className="section-title section-title-light text-center">Tournament Bracket</h2>
                    <div className="standings-card text-center">
                        <Image 
                            src="/images/pickleballBracket.jpeg"
                            alt="Pickleball Tournament Bracket" 
                            width={800} 
                            height={500} 
                            className="img-fluid" 
                            priority 
                        />
                    </div>
                </div>
            </div>

            {/* Tournament Highlights */}
            <div className="section section-alt-dark">
                <div className="container">
                    <h2 className="section-title section-title-light text-center">Tournament Highlights</h2>
                    <div className="highlights-grid">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div className="highlight-wrapper" key={num}>
                                <div className="highlight-card">
                                    <Image
                                        src={`/images/pickleballPowerplay${num}.jpeg`}
                                        alt={`Pickleball Highlight ${num}`}
                                        className="highlight-image"
                                        width={350}
                                        height={250}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer footer-dark">
                <div className="footer-content">
                    <p>&copy; 2025 PowerPlay. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
