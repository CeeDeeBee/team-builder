import React, { useState } from 'react';
import './App.css';
import { TeamMembers, Form } from "./components/index";

function App() {
  const [teamMembers, setTeamMembers] = useState([{ id: Date.now(), name: 'Colin', email: 'cdbarnes98@gmail.com', role: 'Full-Stack Developer' }]);
  const [memberToEdit, setMemberToEdit] = useState();

  const addMember = (member) => {
    member.id = Date.now();
    setTeamMembers([...teamMembers, member]);
  }

  const editMember = (newMember) => {
    const newTeamMembers = teamMembers.map(member => {
      if (newMember.id === member.id) {
        return { ...member, name: newMember.name, email: newMember.email, role: newMember.role };
      } else {
        return member;
      }
    });
    setTeamMembers(newTeamMembers);
    setMemberToEdit();
  }

  return (
    <div className="App">
      <Form addMember={addMember} memberToEdit={memberToEdit} editMember={editMember} />
      <TeamMembers teamMembers={teamMembers} setMemberToEdit={setMemberToEdit} />
    </div>
  );
}

export default App;
