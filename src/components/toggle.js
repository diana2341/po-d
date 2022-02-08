import React from 'react';

function Toggle({light, lightDark}) {
   
  return (
   
  <label className='toggle-contain'  >
    <input className='toggle-checkbox' type='checkbox' id="dark" onChange={lightDark}checked={light}></input>
    <div className='toggle-slot'>
      <div className='sun-icon-wrapper'>
        <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
      </div>
      <div className='toggle-button'></div>
      <div className='moon-icon-wrapper'>
        <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
      </div>
    </div>
  </label>
  
  )
}

export default Toggle;
