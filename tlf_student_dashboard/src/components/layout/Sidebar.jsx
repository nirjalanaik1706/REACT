import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {

  return (
    <div className='bg-dark p3' style={{ width: '220px', minHeight: '100vh' }}>
      <h5>Menu</h5>
      <ul className='nav flex-column'>
        <li className='nav-item'><Link className='nav-link' to="/dashboard">Dashboard</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/project">Projects</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/assessments">Assessments</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/mentor-feedback">Mentor Feedback</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/learning-path">Learning Path</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/portfolio">Portfolio</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/skill-health">Skill Health</Link></li>
        <li className='nav-item'><Link className='nav-link' to="/career-readiness">Career Readiness</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;