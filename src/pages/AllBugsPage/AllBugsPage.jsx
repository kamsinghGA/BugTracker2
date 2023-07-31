import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function AllBugsPage() {
    const [bugs, setBugs] = useState('');
    useEffect(() => {
        const fetchBugs = async () => {
          const response = await fetch('/api/bugs')
          const json = await response.json()
    
          if(response.ok) {
            setBugs(json)
          }
        }
        
        fetchBugs()
      }, [])

      const navigate = useNavigate();

      function handleButtonClick(bug){
        navigate(`/edit/${bug._id}`);
      }

      return(
        <>
            { bugs ?
                bugs.map((bug) => (
                    <div key={bug._id}>
                        <Link to={`/${bug._id}`}>
                            <li>{bug.name}</li>
                        </Link>
                        <button onClick={() => {handleButtonClick(bug)}}>Edit</button>
                        <button>Delete</button>
                    </div>
                ))
                :
                <h3>No Bugs Yet!</h3>
            }
        </>
      )
}