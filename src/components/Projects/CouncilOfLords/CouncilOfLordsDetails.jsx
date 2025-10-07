import React from 'react';
import GlobalBackground from '../../GlobalBackground';
import CouncilOfLordsHero from './CouncilOfLordsHero';
import ProjectOverview from './ProjectOverview';
import ProjectStats from './ProjectStats';
import TechStack from './TechStack';
import FeatureShowcase from './FeatureShowcase';
import AISpecialists from './AISpecialists';
import DevJourney from './DevJourney';

const CouncilOfLordsDetails = () => {
  return (
    <div className="min-h-screen bg-black">
      <GlobalBackground />
      <div className="relative z-10">
        <CouncilOfLordsHero />
        <ProjectOverview />
        <ProjectStats />
        <AISpecialists />
        <FeatureShowcase />
        <TechStack />
        <DevJourney />
      </div>
    </div>
  );
};

export default CouncilOfLordsDetails;