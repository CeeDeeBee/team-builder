import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import { TeamMembers, Form, Nav } from "./components/index";

function App() {
  const [teamMembers, setTeamMembers] = useState([{
    id: Date.now(),
    name: 'Colin',
    email: 'cdbarnes98@gmail.com',
    role: 'Full-Stack Developer'
  }]);
  const [memberToEdit, setMemberToEdit] = useState();

  const addMember = (member) => {
    member.id = Date.now();
    setTeamMembers([...teamMembers, member]);
  }

  const editMember = (newMember) => {
    const newTeamMembers = teamMembers.map(member => (
      newMember.id === member.id
        ? { ...member, name: newMember.name, email: newMember.email, role: newMember.role }
        : member
    ));
    setTeamMembers(newTeamMembers);
    setMemberToEdit();
  }

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <TeamMembers teamMembers={teamMembers} setMemberToEdit={setMemberToEdit} />
      </Route>
      <Route path="/add">
        <Form addMember={addMember} memberToEdit={memberToEdit} editMember={editMember} />
      </Route>
    </div>
  );
}

export default App;
