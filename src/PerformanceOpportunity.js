import React from 'react';

const PerformanceOpportunity = ({ sliders }) => {
  const performanceOpportunity = 
    ((sliders.mindset + sliders.qualityTasks + sliders.capability + sliders.culture) / 4).toFixed(1);

  return (
    <div>
      <h3>Performance Opportunity</h3>
      <div style={{ backgroundColor: 'yellow', width: '100%', textAlign: 'center' }}>
        <span>{performanceOpportunity}%</span>
      </div>
    </div>
  );
};

export default PerformanceOpportunity;

