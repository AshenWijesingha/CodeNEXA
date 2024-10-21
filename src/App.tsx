imort React from 'react';
import './App.css';
import Abstract from './components/sections/Abstract';
// import Acknowledgement from './components/sections/Acknowledgement';
import Hero from './components/sections/HeroSection';
import Introduction from './components/sections/Introduction';
import ResearchGap from './components/sections/ResearchGap';
// import ResearchObjectives from './components/sections/ResearchObjectives';
import ResearchProblem from './components/sections/ResearchProblem';

import Methodology from './components/sections/Methodology';

import Achievements from './components/sections/Achievements';
import ContactUs from './components/sections/ContactUs';
import DocumentList from './components/sections/Documents';
import TeamSection from './components/sections/TeamSection';
import TechnologiesUsed from './components/sections/Technologies';
import Timeline from './components/sections/Timeline';

import Navbar from './components/ui-component/NavBar';
import ScrollingText from './components/ui-component/ScrollingText';

// import Hero from './components/ui-component/Hero';

//UI Animation Eliment

function App() {

  return (
    <>
    <Navbar />
    <br />
    <Hero />
      <br />
      <Abstract />
      <br />
      <Introduction />
      <br />
      <br />
      <ScrollingText />
      <br />
      <br />
      <ResearchGap />
      <br />
      <ResearchProblem />
      <br />
      {/* <ResearchObjectives /> */}
      {/* <br /> */}
      {/* <Acknowledgement /> */}
      <br />
      <Methodology />
      <br />
      <TechnologiesUsed />
      <br />
      <Timeline />
      <br />
      <DocumentList />
      <br />
      <TeamSection />
      <br />
      <Achievements />
      <br />
      <ContactUs />
      <br />
      </>
  );
}

export default App
