import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
  label: {
    width: '150px',
    textAlign: 'right',
    marginRight: '10px',
  },
  slider: {
    flex: 1,
  },
});

const TeamDashboard = ({ teamScores, averageScore }) => {
  const classes = useStyles();
  return (
    <div className="team-dashboard">
      <div className={classes.container}>
        <div className={classes.label}>Mindset {averageScore('mindset')}%</div>
        <Slider className={classes.slider} value={Number(averageScore('mindset'))} disabled aria-labelledby="discrete-slider" step={1} marks min={0} max={100} />
      </div>
      <div className={classes.container}>
        <div className={classes.label}>Quality Tasks {averageScore('qualityTasks')}%</div>
        <Slider className={classes.slider} value={Number(averageScore('qualityTasks'))} disabled aria-labelledby="discrete-slider" step={1} marks min={0} max={100} />
      </div>
      <div className={classes.container}>
        <div className={classes.label}>Capability {averageScore('capability')}%</div>
        <Slider className={classes.slider} value={Number(averageScore('capability'))} disabled aria-labelledby="discrete-slider" step={1} marks min={0} max={100} />
      </div>
      <div className={classes.container}>
        <div className={classes.label}>Culture {averageScore('culture')}%</div>
        <Slider className={classes.slider} value={Number(averageScore('culture'))} disabled aria-labelledby="discrete-slider" step={1} marks min={0} max={100} />
      </div>
    </div>
  );
};

export default TeamDashboard;
