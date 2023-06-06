import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
    const [name, setName] = useState('');
    const [users, setUsers] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            return;
        }

        const id = Date.now();

        const newUser = { id, name };
        const updatedUsers = [...users, newUser];

        setUsers(updatedUsers);
        setName('');
    };

    const removeUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h4>Add User</h4>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>
                    <input
                        type="text"
                        className="form-input"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
            <h2>users</h2>
            {users.map((user) => {
                const { id, name } = user;

                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button
                            type="button"
                            onClick={() => removeUser(id)}
                            className="btn"
                        >
                            remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
export default UserChallenge;
