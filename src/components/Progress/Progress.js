import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Progress.css';

const Progress = () => {
  return (
    <div className="progress-gear-padding">
      <div>
        <FontAwesomeIcon
          icon="cog"
          color="#000000"
          size="6x"
          spin
        />
        <FontAwesomeIcon
          icon="cog"
          color="#000000"
          size="4x"
          spin
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon="cog"
          color="#000000"
          size="6x"
          spin
        />
      </div>
    </div>
    )
}

export default Progress;