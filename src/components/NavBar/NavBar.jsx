import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            &nbsp; | &nbsp;
            <Link to='/orders'>Previous Bugs</Link>
            &nbsp; | &nbsp;
            <Link to='/orders/new'>Add Bug</Link>
        </nav>
    );
}