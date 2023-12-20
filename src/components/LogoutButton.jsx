import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const handleLogout = () => {
 localStorage.removeItem('user');
 setIsLoggedIn(false);
 history.push('/login');
};

const LogoutButton = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(true);
 const history = useHistory();

 return (
    <div>
      {isLoggedIn ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
 );
};

export default LogoutButton;