import UserContainer from './UserContainer';

const NavLinks = ({ user, logout }) => {
    return (
        <div className="nav-links">
            <a href="">home</a>
            <a href="">about</a>
            <UserContainer user={user} logout={logout} />
        </div>
    );
};
export default NavLinks;
