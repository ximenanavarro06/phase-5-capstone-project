import React, { useState, useEffect } from "react"
import WorkoutCard from "./WorkoutCard"
import { Link } from "react-router-dom"
import styled, {css} from 'styled-components'

function WorkoutList({workouts, movements, onAddWorkoutToProfile, onRemoveWorkoutFromProfile}) {
    const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;

`
    //console.log(movements)

    const workoutList = workouts.map((workout) => (
        <WorkoutCard
        key={workout.id}
        workout={workout}
        movements={movements}
        onAddWorkoutToProfile={onAddWorkoutToProfile}
        onRemoveWorkoutFromProfile={onRemoveWorkoutFromProfile}
        />
    ))

    // function shuffleArray(array) {
    //     let i = array.length -1;
    //     for (; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         const temp = array[i];
    //         array[i] = array[j]
    //         array[j] = temp;
    //     }
    //     console.log(array)
    //     return array;
        
    // }

    // class RecommendedWorkouts extends React.Component {
    //     render() {
    //       const shuffledWorkouts = shuffleArray(this.props.movements);
    //       return (
    //         <ul>
    //           {shuffledWorkouts.map((movement) => {
    //             return (
    //               <li key={movement.id}>
    //                 {/* <p>{post.title}</p>
    //                 <p>{post.text}</p>
    //                 <p>{post.category}</p> */}
    //                 {/* <Link to={`/blog/post-1/:${post.id}`}>Weiter lesen</Link> */}
    //               </li>
    //             );
    //           })}
    //         </ul>
    //       );
    //     }
    //   }

    //post






    return(
        <>
        <h1>Choose a Workout:</h1>
        <Button>Randomize Workouts: </Button>
        <div className="cards" style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>{workoutList}</div>
        </>
    )
}


export default WorkoutList;