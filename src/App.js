import React, { useState, useEffect } from 'react';
import User from './User'; // Assuming User component is imported correctly

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => {
        if (data.results && Array.isArray(data.results)) {
          setUsers(data.results); // Set users state with fetched data
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array for one-time fetch

  const addMember = (name) => {
    console.log('Member added:', name);
    // You can perform further actions here, such as updating state or calling APIs
  };

  return (
    <div>
      <h1>Team builder</h1>
      {/* Check if users is an array before mapping */}
      {users && users.map(user => (
        <User key={user.login.uuid} user={user} addMember={addMember} />
      ))}
    </div>
  );
}

export default App;
