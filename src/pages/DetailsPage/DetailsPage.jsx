import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
  const { id } = useParams();
  const [bug, setBug] = useState(null);

  // Fetch the bug details from the server when the component mounts
  useEffect(() => {
    async function fetchBugDetails() {
      try {
        const response = await fetch(`/api/bugs/${id}`);
        if (!response.ok) {
          throw new Error('Bug details not found');
        }
        const data = await response.json();
        setBug(data);
      } catch (error) {
        console.error('Error fetching bug details:', error);
        setBug(null);
      }
    }

    fetchBugDetails();
  }, [id]);

  // If the bug details are being fetched from the server, show a loading message
  if (bug === null) {
    return <h1>Loading...</h1>;
  }

  // If the bug is not found in the database, show an error message
  if (!bug) {
    return <h1>Bug not found</h1>;
  }

  // If the bug is found, display its details
  return (
    <>
      <h1>{bug.name}</h1>
      <p>{bug.text}</p>
    </>
  );
}
