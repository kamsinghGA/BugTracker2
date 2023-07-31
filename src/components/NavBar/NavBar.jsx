import { Link } from 'react-router-dom';

export default function NavBar() {
    return(
        <>
            <Link to="/">Home</Link>
            &nbsp;|
            <Link to="/addBugs">Add Bugs</Link>
            &nbsp;|
            <Link to='/allBugs'>All Bugs</Link>
            
            
        </>
    );
}