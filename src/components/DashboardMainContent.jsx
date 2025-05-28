import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import './DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <div className="anatomy-and-status">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <div className="lower-panels">
        <div className="left-panel">
          <CalendarView />
        </div>
        <div className="right-panel">
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
