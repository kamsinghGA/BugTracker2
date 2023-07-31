import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export default function EditPage() {
    const {id} = useParams();
    const [bug, setBug] = useState(null);

    const fetchBugs = async () => {
        const response = await fetch(`/api/bugs/${id}`)
        const json = await response.json()

        if(response.ok) {
          setBug(json)
        }
    }
    useEffect(() => {
        fetchBugs();
    }, [id]);



    async function handleSaveChanges() {
        try {
            const response = await fetch(`/api/bugs/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, description }),
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
        
        </>
    )
}