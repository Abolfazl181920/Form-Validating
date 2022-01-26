import React, { useState } from 'react';

const Form = () => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ charity, setCharity ] = useState("");

    const handleNameValue = (event) => {
        setName(event.target.value);
    }

    const handleEmailValue = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordValue = (event) => {
        setPassword(event.target.value);
    }

    const handleCharityValue = (event) => {
        setCharity(event.target.value);
    }

    return (
        <form className="form">
            <h2>Form Charity</h2>
            <div>
                <input
                    onChange={handleNameValue}
                    type="text"
                    placeholder="Name"
                />
                <input
                    onChange={handleEmailValue}
                    type="email"
                    placeholder="Email"
                />
                <input
                    onChange={handlePasswordValue}
                    type="text"
                    placeholder="Password"
                />
                <input
                    onChange={handleCharityValue}
                    type="number"
                    placeholder="Charity"
                />
            </div>
            <button>Submit</button>
        </form>
    );
}

export default Form;