import React, { useState } from 'react';

const Form = () => {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ charity, setCharity ] = useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }
    const handleCharity = (event) => {
        setCharity(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName !== "" && lastName !== "" && charity >= 1000) {
            alert('ok');
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="form">
            <h2>Form Charity</h2>
            <div>
                <input
                    onChange={handleFirstName}
                    value={firstName}
                    type="text"
                    placeholder="FirstName"
                />
                <input
                    onChange={handleLastName}
                    value={lastName}
                    type="text"
                    placeholder="LastName"
                />
                <input
                    onChange={handleCharity}
                    value={charity}
                    type="number"
                    placeholder="Charity £"
                />
            </div>
            <button>Submit</button>
        </form>
    );
}

export default Form;