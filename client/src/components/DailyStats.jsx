import React from "react";

const DailyStats = () => {
  return (
    <div className="daily-stats-container gradient-border">
      <div className="metric-container">
        <span className="metric-title">Spend ETH</span>
        <span className="metric-value">0.11 ETH</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Completed Projects</span>
        <span className="metric-value">9 </span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Ongoing Projects</span>
        <span className="metric-value">10</span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Total Projects</span>
        <span className="metric-value">19 </span>
      </div>
      <div className="metric-container">
        <span className="metric-title">Daily Traffic</span>
        <span className="metric-value">100</span>
      </div>
    </div>
  );
};

export default DailyStats;
