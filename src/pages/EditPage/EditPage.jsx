import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export default function EditPage() {
    const {id} = useParams();
    const [bug, setBug] = useState(null);
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const fetchBugs = async () => {
        const response = await fetch(`/api/bugs/${id}`)
        const json = await response.json()

        if(response.ok) {
          console.log(json);
          setBug(json);
          setName(json.name);
          setText(json.text);
        }
    }
    useEffect(() => {
        fetchBugs();
    }, [id]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    
    const handleDescriptionChange = (event) => {
        setText(event.target.value);
    };

    async function handleSaveChanges() {
        try {
            const response = await fetch(`/api/bugs/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, text }),
            });
      
            if (response.ok) {
              console.log('Bug updated successfully!');
            } else {
              console.error('Failed to update bug.');
            }
          } catch (error) {
            console.error('Error occurred while updating bug:', error);
          }
    }

    return(
        <>
            <h1>Edit Bug Page</h1>
            {bug ? (
                <form onSubmit={handleSaveChanges}>
                    <div>
                        <input type="text" value={name} onChange={handleNameChange} placeholder='Bug Name'/>
                        <br />
                        <input type="textarea" value={text} onChange={handleDescriptionChange} placeholder='Description'/>
                        <br />
                        <button type='submit'>Save Changes</button>
                    </div>
                </form>
            ) : (
                <p>No bug description available</p>
            )
            }
        </>
    )
}