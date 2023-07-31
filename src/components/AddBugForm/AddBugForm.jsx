import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddBugForm() {
  const [text, setText] = useState({
    name:'',
    text:'',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bug = { text };

    const response = await fetch('/api/bugs', {
      method: 'POST',
      body: JSON.stringify(bug),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setText('');
      setError(null);
      console.log('new bug added', json);
      navigate('/allBugs'); // Navigate to "/allBugs" after successful form submission
    }
  };

  function handleChange(evt) {
    setText({
      ...text,
      [evt.target.name]:evt.target.value
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name='name' 
          value={text.name}
          placeholder='Name of Bug'
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="text"
          value={text.text}
          onChange={handleChange}
          placeholder='Add Description'
          required
        />
        <button type="submit">Add Bug</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}
