import React, { useEffect, useState } from 'react';
import './User.css';

const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  const ChangeUser = () => {
    setLoading(true);
    fetch("https://randomuser.me/api")
      .then(r => r.json())
      .then(data => {
        setUser(data.results[0]);
        setLoading(false);
      });
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  useEffect(() => {
    ChangeUser();
    document.body.className = theme;
  }, []);

  return (
    <div className="user-container">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      <button onClick={ChangeUser}>Get New User</button>

      {loading ? (
        <div className="loader"></div>
      ) : user ? (
        <div className="user-card">
          <h2>{user.name.first} {user.name.last}</h2>
          <img src={user.picture.large} alt="User" />
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default User;
