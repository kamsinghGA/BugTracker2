import { useState } from 'react';

export default function AddBugForm() {
  const [text, setText] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()

    const bug = {text}

    const response = await fetch('/api/bugs', {
      method: 'POST',
      body: JSON.stringify(bug),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setText('')
      setError(null)
      console.log('new bug added', json)
    }
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Bugs</label>
          <textarea 
            type="text" 
            name="bugs" 
            value={text} onChange={(e) => setText(e.target.value)} required/>
          <button type="submit">Add Bug</button>
          {error && <div>{error}</div>}
        </form>
      </div>
  )
    }
