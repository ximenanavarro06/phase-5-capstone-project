import React from "react";
import { Link } from "react-router-dom"

function WorkoutCard({workout}) {
    console.log(workout)
    const {name} = workout
    const movementList = workout.movements.map((movement)=> (
        <div>
            <p>{movement.name}</p>
            <p>Sets: {movement.sets}</p>
            <p>Reps: {movement.reps}</p>
            <Link to={`/movement_how_tos/${movement.id}`}>How To:</Link>
            <p>-------</p>
        </div>
    ))


    return(
        <>
        <div>
            <p>{name}</p>
            <ul>
                {movementList}
            </ul>
        </div>
        </>
    )
}

export default WorkoutCard