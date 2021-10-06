import "./Person.css";

export default function Person(props) {
    return (
        <ul className="person">
            <li><strong>First name:</strong> {props.personData.firstName}</li>
            <li><strong>Last name:</strong> {props.personData.lastName}</li>
            <li><strong>Company:</strong> {props.personData.company}</li>
        </ul>
    );
}