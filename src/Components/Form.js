import React, { useState } from 'react';

import Charitable from './Charitable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ charity, setCharity ] = useState('');
    const [ valid, setValid ] = useState(true);

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
            setValid(true);
            toast.dark("Hey 👋, SignUp!");
        } else {
            setValid(false);
            toast.dark("Hey 👋, Can't SignUp!");
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="form">
            <ToastContainer />
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
            {
                valid ? <Charitable firstName={firstName} lastName={lastName} charity={charity} /> : null
            }
        </form>
    );
}

export default Form;