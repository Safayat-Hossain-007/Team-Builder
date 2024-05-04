import React, { useState } from "react";

const User = (props) => {
  const { name, email, picture, website, phone } = props.user;
  const addMember = props.addMember;
  const fullName = `${name.first} ${name.last}`;

  // State to manage displaying the phone number
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const userStyle = {
    border: '1px solid purple',
    margin: '10px',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    width: '40%'
  };

  const showPhone = () => {
    setShowPhoneNumber(true); // Update state to show phone number
  };

  return (
    <div style={userStyle}>
      <div style={{ marginTop: '25px' }}>
        <img src={picture.large} alt={fullName} />
      </div>
      <div style={{ marginLeft: '20px' }}>
        <h1>{fullName}</h1>
        <p>Email: {email}</p>
        <p><a target="_blank" rel="noopener noreferrer" href={website}>Learn about me</a></p>
        {/* Conditionally render phone number if showPhoneNumber is true */}
        {showPhoneNumber && <p>Phone: {phone}</p>}
        {/* Button to toggle display of phone number */}
        {/* Corrected onClick handler syntax to pass a function reference */}
        <button onClick={showPhone}>Show Phone Number</button>
        {/* Corrected onClick handler syntax to call addMember with fullName */}
        <button onClick={() => addMember(fullName)}>Add me</button>
      </div>
    </div>
  );
};

export default User;
