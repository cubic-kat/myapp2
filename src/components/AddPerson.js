import { useState } from 'react';

import './AddPerson.css';

export default function AddPerson(props) {
    const addPerson = props.addMethod;

    const [displayName, setDisplayName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');


    function handleChange(e) {
        const id = e.target.dataset.id;
        const value = e.target.value;

        switch (id) {
            case 'displayName':
                setDisplayName(value);
                break;
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'company':
                setCompany(value);
                break;
            default:
                // noop
        }
    }

    function handleClick() {
        addPerson({
            displayName,
            firstName,
            lastName,
            company
        });
    }

    return (
        <div className="add-person">
            <ul>
                <li>
                    <label htmlFor="displayName">Display name:</label>
                    <input type="text" data-id="displayName" name="displayName" id="displayName" value={displayName} onChange={handleChange} />
                </li>
                <li>
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" data-id="firstName" name="firstName" id="firstName" value={firstName} onChange={handleChange} />
                </li>
                <li>
                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" data-id="lastName" name="lastName" id="lastName" value={lastName} onChange={handleChange} />
                </li>
                <li>
                    <label htmlFor="company">Company:</label>
                    <input type="text" data-id="company" name="company" id="company" value={company} onChange={handleChange} />
                </li>
            </ul>
            <button type="button" onClick={handleClick}>Add</button>
        </div>
    );
}