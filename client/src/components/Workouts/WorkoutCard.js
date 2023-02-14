import React, {useState} from "react";
import { Link } from "react-router-dom"

function WorkoutCard({workout, onAddWorkoutToProfile, onRemoveWorkoutFromProfile}) {
    // console.log(workout)
    const {id, name, on_profile: onProfile} = workout
    const [onToProfile, setOnToProfile] = useState(onProfile)
    const movementList = workout.movements.map((movement)=> (
        <div>
            <p>{movement.name}</p>
            <p>Sets: {movement.sets}</p>
            <p>Reps: {movement.reps}</p>
            <Link to={`/movement_how_tos/${movement.id}`}>How To:</Link>
            <p>-------</p>
        </div>
    ))

    //handle add workout to profile
    function handleAddWorkoutToProfileChange() {
        setOnToProfile((onToProfile) => !onToProfile);
        console.log(onToProfile)
        fetch(`/workouts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({on_profile: !onProfile})
        })
        .then((r) => r.json())
        //.then(addedToProfile => console.log(addedToProfile))
        .then((addedToProfile) => setOnToProfile ? onAddWorkoutToProfile(addedToProfile) : onRemoveWorkoutFromProfile(addedToProfile))
        // console.log(r.json)

    }


    return(
        <>
        <div>
            <p>{name}</p>
            <ul>
                {movementList}
            </ul>
            {onToProfile ? (
                <button onClick={handleAddWorkoutToProfileChange}>Remove From Profile</button>
            ) : ( <button onClick={handleAddWorkoutToProfileChange}>Add Workout To Profile</button>)}
        </div>
        </>
    )
}

export default WorkoutCard