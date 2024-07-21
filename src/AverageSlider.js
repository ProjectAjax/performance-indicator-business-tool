import React from 'react';
import Slider from '@mui/material/Slider';

const AverageSlider = ({ name, value }) => {
  return (
    <div className="slider-container">
      <label>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <Slider
        value={value}
        min={0}
        max={100}
        step={1}
        aria-labelledby="continuous-slider"
        disabled
      />
      <span>{value}</span>
    </div>
  );
};

export default AverageSlider;
