import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
    const [people, setPeople] = useState(data);

    const removeSingleItem = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    const removeAllItems = () => {
        setPeople([]);
    };

    return (
        <div>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button
                            type="button"
                            onClick={() => removeSingleItem(id)}
                        >
                            remove
                        </button>
                    </div>
                );
            })}
            <button
                type="button"
                onClick={removeAllItems}
                className="btn"
                style={{ marginTop: '2rem' }}
            >
                Clear items
            </button>
        </div>
    );
};

export default UseStateArray;
