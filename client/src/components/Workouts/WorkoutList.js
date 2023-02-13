import React, { useState, useEffect } from "react"
import WorkoutCard from "./WorkoutCard"

function WorkoutList({workouts, movements}) {

    const workoutList = workouts.map((workout) => (
        <WorkoutCard
        key={workout.id}
        workout={workout}
        movements={movements}
        />
    ))




    return(
        <>
        <h1>Choose a Workout:</h1>
        <div className="cards" style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>{workoutList}</div>
        </>
    )
}


export default WorkoutList;