import { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Peter',
        age: 21,
        hobby: 'coding addict',
    });

    const displayPerson = () => {
        setPerson({
            name: 'John',
            age: 28,
            hobby: 'Screaming At The Computer',
        });

        // setPerson({ ...person, name: 'John' });
    };

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>Enjoys: {person.hobby}</h4>
            <button type="button" onClick={displayPerson} className="btn">
                Show John
            </button>
        </>
    );
};

export default UseStateObject;
