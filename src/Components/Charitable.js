import React from 'react';

const Charitable = ({ firstName, lastName, charity }) => {
    return (
        <div className="charitable">
            <h3> {firstName} </h3>
            <h3> {lastName} </h3>
            <span> {charity} </span>
        </div>
    )
}

export default Charitable;