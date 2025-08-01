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

export default function CricketTournamentPage() {
    return (
        <div className="cricket-page">
            <Navbar />

            {/* Header */}
            <div className="cricket-hero">
                <div className="container">
                    <h1>Cricket Tournament 2025</h1>
                    <p>January 11 - June 19, 2025 • Frisco, TX</p>
                </div>
            </div>

            {/* About Section */}
            <div className="section section-dark">
                <div className="container">
                    <div className="cricket-card">
                        <h2 className="section-title section-title-light">About the Tournament</h2>
                        <p>
                            The 2025 PowerPlay Cricket Tournament united athletes from across Texas in a high-energy event supporting youth sports access.
                        </p>
                        <p>
                            In the final, Rockhill defeated Heritage, led by Bhavya Hooda's 73-run performance.  
                            Sushant Kumar Vetapalem (Lebanon Trail) earned MVP honors for his play.
                        </p>
                        <p>
                            Before the match, former Pakistan international Asif Mujtaba delivered an inspiring speech that energized both teams.
                        </p>
                        <div className="button-group">
                            <a href="https://cricheroes.com/tournament/1200891/PowerPlay-Cricket-Tournament" className="btn btn-outline-light" target="_blank">View Full Stats</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Scorecard Section */}
            <div className="section section-alt-dark">
                <div className="container">
                    <h2 className="section-title section-title-light text-center">Final Match Scorecard</h2>
                    <div className="scorecard-card">
                        <div className="scorecard-row">Heritage: 149/3</div>
                        <div className="scorecard-row winner">Rockhill: 150/1 (18.2 overs)</div>
                        <div className="scorecard-mvp">🏅 Player of the Match: Bhavya Hooda – 73*</div>
                    </div>
                </div>
            </div>

            {/* Standings Section */}
            <div className="section section-dark" id="standings">
                <div className="container">
                    <h2 className="section-title section-title-light text-center">League Standings</h2>
                    <div className="standings-card">
                        <div className="table-container">
                            <table className="standings-table" aria-label="Cricket Tournament Standings">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Team</th>
                                        <th>Mat</th>
                                        <th>Won</th>
                                        <th>Lost</th>
                                        <th>Drawn</th>
                                        <th>Tied</th>
                                        <th>N/R</th>
                                        <th>NRR</th>
                                        <th>For</th>
                                        <th>Against</th>
                                        <th>Pts</th>
                                        <th>Last 5</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className="team-name">LTHS Challengers</td>
                                        <td>4</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0.629</td>
                                        <td>222/44.1</td>
                                        <td>214/48.4</td>
                                        <td>5</td>
                                        <td>L–W–W</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className="team-name">Walnut Grove Wildcats</td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>3.419</td>
                                        <td>307/46</td>
                                        <td>166/51</td>
                                        <td>4</td>
                                        <td>W–L–W</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td className="team-name">Heritage Cricket Team</td>
                                        <td>3</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>-0.546</td>
                                        <td>154/39.4</td>
                                        <td>155/35</td>
                                        <td>3</td>
                                        <td>W–L</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td className="team-name">Wakeland Wolverines</td>
                                        <td>3</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>2</td>
                                        <td>-7.350</td>
                                        <td>32/20</td>
                                        <td>179/20</td>
                                        <td>2</td>
                                        <td>L</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td className="team-name">BLUE HAWKS</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>-1.667</td>
                                        <td>78/18</td>
                                        <td>79/13.1</td>
                                        <td>0</td>
                                        <td>L</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tournament Highlights */}
            <div className="section section-alt-dark" id="highlights">
                <div className="container">
                    <h2 className="section-title section-title-light text-center">Tournament Highlights</h2>
                    <div className="highlights-grid">
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay1.jpeg" alt="Cricket Match Action" className="highlight-image" width={350} height={250} priority />
                            </div>
                        </div>
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay2.jpeg" alt="Team Celebration" className="highlight-image" width={350} height={250} />
                            </div>
                        </div>
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay3.jpeg" alt="Cricket Tournament" className="highlight-image" width={350} height={250} />
                            </div>
                        </div>
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay4.jpeg" alt="Cricket Match Highlights" className="highlight-image" width={350} height={250} />
                            </div>
                        </div>
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay5.jpeg" alt="Tournament Action" className="highlight-image" width={350} height={250} />
                            </div>
                        </div>
                        <div className="highlight-wrapper">
                            <div className="highlight-card">
                                <Image src="/images/cricketPowerplay6.jpeg" alt="Cricket Tournament Highlights" className="highlight-image" width={350} height={250} />
                            </div>
                        </div>
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
