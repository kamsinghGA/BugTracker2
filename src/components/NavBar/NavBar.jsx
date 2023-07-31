import { Link } from 'react-router-dom';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
      }

    return (
        <nav>
            <span>Welcome, {user.name}</span>
            &nbsp;
            <Link to='/'>Home</Link>
            &nbsp; | &nbsp;
            <Link to='/get-user-bugs'>Previous Bugs</Link>
            &nbsp; | &nbsp;
            <Link to='/'>Add Bug</Link>
            &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    );
}