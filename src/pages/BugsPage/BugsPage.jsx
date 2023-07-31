import { useState, useEffect } from 'react';
import AddBugForm from "../../components/AddBugForm/AddBugForm";

export default function BugsPage() {
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

  return (
    <>
    <h1>BugsPage</h1>
    <AddBugForm />
    { bugs ?
      bugs.map((bug) => (
        <li key={bug._id}>{bug.text}
        </li>
      ))
      :
      <h3>No Bugs Yet!</h3>
    }
    </>
  );
}