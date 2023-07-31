import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function AllBugsPage() {
    const [bugs, setBugs] = useState('')
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

      return(
        <>
            { bugs ?
                bugs.map((bug) => (
                    <>
                        <Link key={bug._id} to={`/${bug._id}`}>
                            <li>{bug.text}</li>
                        </Link>
                        <button>Edit</button>
                        <button>Delete</button>
                    </>
                    
                ))
                :
                <h3>No Bugs Yet!</h3>
            }
        </>
      )
}