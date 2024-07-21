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

const IndividualPerformance = ({ selectedMember, handleSliderChange }) => {
  const classes = useStyles();
  return (
    <div className="individual-performance">
      <div className={classes.container}>
        <div className={classes.label}>Mindset {selectedMember.mindset}%</div>
        <Slider className={classes.slider} value={selectedMember.mindset} onChange={(e, value) => handleSliderChange(selectedMember.name, 'mindset', value)} aria-labelledby="discrete-slider" step={1} marks min={0} max={100} />
      </div>
      <div className={classes.container}>
        <div className={classes.label}>Quality Tasks {selectedMember.qualityTasks}%</div>
        <Slider className={classes.slider} value={selectedMember.qualityTasks} onChange={(e, value) => handleSliderChange(selectedMember.name, 'qualityTasks', value)} aria-labelledby="discrete-slider" step={1} marks min={0} max={100} />
      </div>
      <div className={classes.container}>
        <div className={classes.label}>Capability {selectedMember.capability}%</div>
        <Slider className={classes.slider} value={selectedMember.capability} onChange={(e, value) => handleSliderChange(selectedMember.name, 'capability', value)} aria-labelledby="discrete-slider" step={1} marks min={0} max={100} />
      </div>
      <div className={classes.container}>
        <div className={classes.label}>Culture {selectedMember.culture}%</div>
        <Slider className={classes.slider} value={selectedMember.culture} onChange={(e, value) => handleSliderChange(selectedMember.name, 'culture', value)} aria-labelledby="discrete-slider" step={1} marks min={0} max={100} />
      </div>
    </div>
  );
};

export default IndividualPerformance;
