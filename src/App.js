import React, { useState } from 'react';
import IndividualPerformance from './IndividualPerformance';
import TeamDashboard from './TeamDashboard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  app: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  individualPerformance: {
    margin: '20px 0',
  },
  performanceOpportunity: {
    margin: '20px 0',
  },
  performanceBar: {
    height: '50px',
    lineHeight: '50px',
    color: 'black',
    fontWeight: 'bold',
  },
  teamDashboard: {
    margin: '20px 0',
  },
});

function App() {
  const classes = useStyles();
  const [selectedTeam, setSelectedTeam] = useState('Team Alpha');
  const [selectedEmployee, setSelectedEmployee] = useState('John Doe');
  const [employees, setEmployees] = useState([
    { name: 'John Doe', mindset: 70, qualityTasks: 78, capability: 93, culture: 53 },
    { name: 'Jane Smith', mindset: 32, qualityTasks: 55, capability: 60, culture: 45 }
  ]);

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleEmployeeChange = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const handleSliderChange = (name, field, value) => {
    setEmployees(employees.map(emp => emp.name === name ? { ...emp, [field]: value } : emp));
  };

  const selectedMember = employees.find(emp => emp.name === selectedEmployee);
  const totalScores = selectedMember ? selectedMember.mindset + selectedMember.qualityTasks + selectedMember.capability + selectedMember.culture : 0;
  const maxScore = 400;
  const performanceOpportunity = ((totalScores / maxScore) * 100).toFixed(1);

  // Calculate average for team dashboard
  const teamScores = employees.map(emp => ({
    mindset: emp.mindset,
    qualityTasks: emp.qualityTasks,
    capability: emp.capability,
    culture: emp.culture
  }));

  const averageScore = (field) => (teamScores.reduce((acc, score) => acc + score[field], 0) / teamScores.length).toFixed(1);

  return (
    <div className={classes.app}>
      <h1>Individual Performance Indicators</h1>
      <div>
        <label>Select Team:</label>
        <select value={selectedTeam} onChange={handleTeamChange}>
          <option value="Team Alpha">Team Alpha</option>
          {/* Add more teams as needed */}
        </select>
        <label>Select Employee:</label>
        <select value={selectedEmployee} onChange={handleEmployeeChange}>
          {employees.map(emp => (
            <option key={emp.name} value={emp.name}>{emp.name}</option>
          ))}
        </select>
      </div>
      <IndividualPerformance selectedMember={selectedMember} handleSliderChange={handleSliderChange} />
      <div className={classes.performanceOpportunity}>
        <h2>Performance Opportunity</h2>
        <div className={classes.performanceBar} style={{ backgroundColor: performanceOpportunity >= 80 ? 'green' : performanceOpportunity >= 50 ? 'yellow' : 'red' }}>
          {performanceOpportunity}%
        </div>
      </div>
      <h1>Team Dashboard</h1>
      <TeamDashboard teamScores={teamScores} averageScore={averageScore} />
    </div>
  );
}

export default App;
