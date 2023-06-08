const UserContainer = ({ user, logout }) => {
    const name = user?.name;

    return (
        <div className="user-container">
            <p>{name}</p>
            {name != null || undefined ? (
                <button onClick={logout} className="btn">
                    logout
                </button>
            ) : (
                <button className="btn">please login</button>
            )}
        </div>
    );
};
export default UserContainer;
