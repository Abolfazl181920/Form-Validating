import React from 'react';

const Form = () => {
    return (
            <form className="form">
                <h2>Form Charity</h2>
                <div>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <input type="number" placeholder="Charity" />
                </div>
                <button>Submit</button>
            </form>
    );
}

export default Form;