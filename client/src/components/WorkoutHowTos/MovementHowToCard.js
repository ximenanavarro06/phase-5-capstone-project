import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


function MovementHowToCard() {
    console.log("hello")
    const [howTo, setHowTo] = useState(null)
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        fetch(`/movements/${id}`)
        .then(r => r.json())
        .then(howTo => {
            setHowTo(howTo)
        })
    }, [id])


    if (!howTo) return <h2>Loading...</h2>
    console.log(howTo)

    const editedLink = `https://www.youtube-nocookie.com/embed/${howTo.movement_how_to.link.slice(32,43)}`

    if (howTo) return (
        <>
        <h2>How To Video: </h2>
        <Link to={`/workouts`}>Back To Workout List:</Link>
        <iframe
        width="560"
        height="315"
        src= {editedLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        allowfullscreen
        >

        </iframe>
        </>
    )

}


export default MovementHowToCard