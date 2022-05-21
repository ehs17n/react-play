import * as React from 'react';
import { getPlayById } from 'meta/play-meta-util';

import PlayHeader from 'common/playlists/PlayHeader';

import './style.css';
import App from './components/app/App';


function Minesweeper(props: any) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  return (
    <>
      <div className='play-details'>
        <PlayHeader play={play} />
        <div className='play-details-body'>
          {/* Your Code Starts Here */}
          <div>
            <App/>
            {/* <h3 className='title'>Minesweeper</h3>
            <div className='subtext'>
              Mines Left: <span data-mine-count></span>
            </div>
            <div className='board'>
              <div>1</div>
              <div>1</div>
            </div> */}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Minesweeper;
