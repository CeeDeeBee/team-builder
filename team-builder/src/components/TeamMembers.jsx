import React from "react";

const TeamMembers = ({ teamMembers }) => {
    return (
        <div className="members-list">
            {teamMembers.map(member => (
                <div className="member-card">
                    <h2>{member.name}</h2>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;