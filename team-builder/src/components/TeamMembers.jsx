import React from "react";

const TeamMembers = ({ teamMembers, setMemberToEdit }) => {
    return (
        <div className="members-list">
            {teamMembers.map(member => (
                <div key={member.id} className="member-card">
                    <h2>{member.name}</h2>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                    <button className="edit-button" onClick={() => setMemberToEdit(member)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;