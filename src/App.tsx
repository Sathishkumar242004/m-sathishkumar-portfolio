/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-neutral-100 overflow-x-hidden font-sans antialiased selection:bg-neon-pink selection:text-white">
      {/* Decorative Cinematic Background Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none grain-overlay z-40 opacity-70"></div>

      {/* Structured Layout Shell */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main top floating header navbar */}
        <Header />

        {/* Scrollable multi-section layouts */}
        <main className="flex-grow">
          {/* Section 1: Cinematic Hero Showcase */}
          <Hero />

          {/* Section 2: Biographical About Me */}
          <About />

          {/* Section 3: Premium Services Grids */}
          <Services />

          {/* Section 4: Technical Tools and Skills Dynamic Tabs */}
          <Skills />

          {/* Section 5: Featured Projects Bento Layouts */}
          <Projects />

          {/* Section 6: Professional Value Pitch */}
          <WhyWorkWithMe />

          {/* Section 7: Journey & Growth Evolution Milestone Line */}
          <Journey />

          {/* Section 8: Interactive Pipeline Contact Form */}
          <Contact />
        </main>

        {/* Brand Copyright and Socials */}
        <Footer />
      </div>
    </div>
  );
}
