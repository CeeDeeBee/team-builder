import React, { useState } from 'react';
import './App.css';
import { TeamMembers, Form } from "./components/index";

function App() {
  const [teamMembers, setTeamMembers] = useState([{ name: 'Colin', email: 'cdbarnes98@gmail.com', role: 'Full-Stack Developer' }]);
  const [memberToEdit, setMemberToEdit] = useState();

  const addMember = (member) => {
    setTeamMembers([...teamMembers, member]);
  }

  return (
    <div className="App">
      <Form addMember={addMember} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} />
      <TeamMembers teamMembers={teamMembers} setMemberToEdit={setMemberToEdit} />
    </div>
  );
}

export default App;
