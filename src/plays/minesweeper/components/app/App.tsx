import React, { useEffect, useState } from 'react';

import Button from '../button/Button';
import NumberDisplay from '../NumberDisplay/NumberDisplay';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='Header'>
        <NumberDisplay value={0} />
        <NumberDisplay value={23} />
      </div>
      <div className='Body'>
        <h2 className='hello'> hello</h2>
      </div>
    </div>
  );
};

export default App;
