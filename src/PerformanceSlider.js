import React from 'react';
import Slider from '@mui/material/Slider';

const PerformanceSlider = ({ name, value, onChange }) => {
  const handleChange = (event, newValue) => {
    onChange(name, newValue);
  };

  return (
    <div className="slider-container">
      <label>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        max={100}
        step={1}
        aria-labelledby="continuous-slider"
      />
      <span>{value}</span>
    </div>
  );
};

export default PerformanceSlider;
