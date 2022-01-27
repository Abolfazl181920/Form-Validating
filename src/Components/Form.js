import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("FIELD IS EMPTY!!!");
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

    const formValidating = (event) => {
        event.preventDefault();

        // I MUST USE REACT-TOASTIFY INSTEAD OF ALERT
        // USE OR OPERATOR INSTEAD OF 4 IF
        if (name === "") {
            alert(error);
        }

        if (email === "") {
            alert(error);
        }

        if (password === "") {
            alert(error);
        }

        if (charity === "") {
            alert(error);
        }
    }

    return (
        <form onSubmit={formValidating} className="form">
            <h2>Form Charity</h2>
            <div>
                <input onChange={handleNameValue} type="text" placeholder="Name" />
                <input onChange={handleEmailValue} type="email" placeholder="Email" />
                <input onChange={handlePasswordValue} type="text" placeholder="Password" />
                <input onChange={handleCharityValue} type="number" placeholder="Charity £" />
            </div>
            <Link to="/charitables">
                <button>Submit</button>
            </Link>
        </form>
    );
}

export default Form;