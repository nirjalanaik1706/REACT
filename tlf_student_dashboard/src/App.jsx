import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import StudentDashboard from './pages/StudentDashboard';
import Projects from './pages/Projects';
import Assessments from './pages/Assessments';
import MentorFeedback from './pages/MentorFeedback';
import SkillHealthCard from './components/dashboard/SkillHealthCard';
import LearningPathTimeline from './components/dashboard/LearningPathTimeline';
import ConfidenceMeter from './components/dashboard/ConfidenceMeter';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3" >
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/mentor-feedback" element={<MentorFeedback />} />
            <Route path="/skill-health" element={<SkillHealthCard/>} />
            <Route path="/project" element={<Projects/>}/>
            <Route path="/learning-path" element={<LearningPathTimeline/>}/>
            <Route path="/career-readiness" element={<ConfidenceMeter/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;