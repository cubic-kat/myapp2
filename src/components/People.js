import { useState } from "react";

import AddPerson from "./AddPerson";
import Person from "./Person";

export default function People(props) {
    const [people, setPeople] = useState([...props.peopleData]);

    function addPerson({ displayName, firstName, lastName, company }) {
        console.log("You clicked add!");
        console.log(`${displayName}: ${firstName}, ${lastName}, ${company}`);

        people.push({ displayName, firstName, lastName, company });

        setPeople([...people]);
    }

    return (
        <>
            {people.map((person, index) => (
                <Person key={index} personData={person} />
            ))}

            <AddPerson addMethod={addPerson} />
        </>
    );
}