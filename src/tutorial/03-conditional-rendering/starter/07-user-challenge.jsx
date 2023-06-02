import { useState } from 'react';

const UserChallenge = () => {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({ name: 'lutfi' });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <div>
            {user ? (
                <div>
                    <h4>hello there, {user.name}</h4>
                    <button className="btn" onClick={logout} type="button">
                        logout
                    </button>
                </div>
            ) : (
                <div>
                    <h4>please login</h4>
                    <button className="btn" onClick={login} type="button">
                        login
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserChallenge;
