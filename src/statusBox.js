import { React, useState } from 'react';

const StatusBox = () => {
    const [status, setStatus] = useState(false);

    const statusChange = () => {
        setStatus(!status);
    }


    const statusStyle = {
      width: '20px',
      height: '20px',
      border: '1px solid black',
      backgroundColor: status ? 'red' : 'transparent',
      cursor: 'pointer',
      display: 'inline-block',
      position: 'relative',
      left: '75%',
      bottom: '0%',
      zIndex: '1',
    };
  
    return <div style={statusStyle} onClick={statusChange}></div>;
  };
  
  export default StatusBox;