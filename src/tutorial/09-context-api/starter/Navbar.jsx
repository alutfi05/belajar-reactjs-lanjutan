import { useState } from 'react';

import NavLinks from './NavLinks';

const Navbar = () => {
    const [user, setUser] = useState({ name: 'something' });

    const logout = () => {
        setUser(null);
    };

    return (
        <div className="navbar">
            <h5>Context API</h5>
            <NavLinks user={user} logout={logout} />
        </div>
    );
};
export default Navbar;
