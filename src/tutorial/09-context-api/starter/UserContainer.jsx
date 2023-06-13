import { useAppContext } from './Navbar';

const UserContainer = () => {
    const { user, logout } = useAppContext();

    return (
        <div className="user-container">
            {user ? (
                <>
                    <p>Hello There, {user?.name?.toUpperCase()}</p>
                    <button onClick={logout} className="btn">
                        logout
                    </button>
                </>
            ) : (
                <p>Please Login</p>
            )}
        </div>
    );
};
export default UserContainer;
