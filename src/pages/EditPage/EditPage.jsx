import { useParams } from 'react-router-dom';

export default function EditPage() {
    const {id} = useParams();

    const fetchBugs = async () => {
        const response = await fetch(`/api/bugs/${id}`)
        const json = await response.json()

        if(response.ok) {
          console.log(json)
        }
    }

    return(
        <h1>Bye</h1>
    )
}