import React, { useState, useEffect } from "react";

const Form = ({ addMember, memberToEdit, setMemberToEdit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "Front-End Developer"
    });

    const changeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const submitForm = e => {
        e.preventDefault();
        addMember(formData);
        setFormData({
            name: "",
            email: "",
            role: "Front-End Developer"
        });
    }

    useEffect(() => {
        if (memberToEdit) setFormData(memberToEdit);
        setMemberToEdit();
    }, [memberToEdit]);

    return (
        <div className="form-wrapper">
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={changeHandler} value={formData.name || ""} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={changeHandler} value={formData.email} />
                <label htmlFor="role">Role: </label>
                <select name="role" id="role-select" onChange={changeHandler} value={formData.role}>
                    <option value="Front-End Developer">Front-End Developer</option>
                    <option value="Back-End Developer">Back-End Developer</option>
                    <option value="Full-Stack Developer">Full-Stack Developer</option>
                    <option value="UI/UX Developer">UI/UX Developer</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;