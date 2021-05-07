import React from 'react';

function Logout() {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload(false)
  }

    return(<button id="logout" method='POST' onClick={handleClick}>LogOut</button>)
}

export default Logout;