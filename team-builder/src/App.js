import React, { useState } from 'react';
import './App.css';
import { TeamMembers, Form } from "./components/index";

function App() {
  const [teamMembers, setTeamMembers] = useState([{ name: 'Colin', email: 'cdbarnes98@gmail.com', role: 'full-stack developer' }]);

  const addMember = (member) => {
    setTeamMembers([...teamMembers, member]);
  }

  return (
    <div className="App">
      <Form addMember={addMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
