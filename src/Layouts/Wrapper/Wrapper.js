import React from 'react'
import './Wrapper.scss';

export function Wrapper({children}) {

  return (
    <div className="wrapper">
      {children}
    </div>
  );
}

export default Wrapper;