import React from 'react';
import './NumberDisplay.css'
interface NumberDisplayProps {
  value: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = (props) => {
  return (
    <div>
      <div className=''>
          <h2 className='hi'> hi </h2>
          {props.value}
      </div>
    </div>
  );
};

export default NumberDisplay;
