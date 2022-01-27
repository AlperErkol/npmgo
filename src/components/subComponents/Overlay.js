import React from 'react';

function Overlay({visible, onClick}) {
  return <div onClick={onClick} className={visible ? 'overlay active' : 'overlay'}></div>;
}

export default Overlay;
