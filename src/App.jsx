import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';
import ProdigiousHubDetails from './components/Projects/ProdigiousHub/ProdigiousHubDetails';
import BeddingComPkDetails from './components/Projects/BeddingComPk/BeddingComPkDetails';
import Contact from './components/Contact/Contact';
import GlobalBackground from './components/GlobalBackground';
import Sidebar from './components/Sidebar/Sidebar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();
  
  // Hide sidebar for project detail pages (slug routes)
  const isProjectDetailPage = location.pathname.startsWith('/projects/') && location.pathname !== '/projects';
  
  return (
    <>
      <GlobalBackground />
      <ScrollToTop />
      {!isProjectDetailPage && <Sidebar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/prodigious-hub" element={<ProdigiousHubDetails />} />
        <Route path="/projects/bedding-com-pk" element={<BeddingComPkDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
