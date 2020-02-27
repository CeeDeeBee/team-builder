import React from "react";
import { Link } from "react-router-dom";
import "./TeamMembers.css";

const TeamMembers = ({ teamMembers, setMemberToEdit }) => {
    return (
        <div className="members-list">
            {teamMembers.map(member => (
                <div key={member.id} className="member-card">
                    <h2>{member.name}</h2>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                    <div className="edit-button" onClick={() => setMemberToEdit(member)}>
                        <Link to="/add">Edit</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;