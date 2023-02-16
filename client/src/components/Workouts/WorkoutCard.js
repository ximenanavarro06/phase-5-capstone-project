import React, {useState} from "react";
import { Link } from "react-router-dom"
import styled, {css} from 'styled-components'

function WorkoutCard({workout, onAddWorkoutToProfile, onRemoveWorkoutFromProfile}) {
    const Button = styled.button`
    display: inline-block;
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    text-decoration: none;
    

    ${props =>
    props.primary &&
    css`
        background: palevioletred;
        color: white;
    `};
`
const Wrapper = styled.div`
    &:hover ${Button} {
        background-color: pink;
    }
`






    // console.log(workout)
    const {id, name, on_profile: onProfile} = workout
    const [onToProfile, setOnToProfile] = useState(onProfile)
    const movementList = workout.movements.map((movement)=> (
        <div>
            <p>{movement.name}</p>
            <p>Sets: {movement.sets}</p>
            <p>Reps: {movement.reps}</p>
            <Wrapper>
            <Button as="a" href={`/movement_how_tos/${movement.id}`}>
            How To
            </Button>
            </Wrapper>
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
                <Wrapper><Button onClick={handleAddWorkoutToProfileChange}>Remove From Profile</Button></Wrapper>
            ) : ( <Wrapper><Button primary onClick={handleAddWorkoutToProfileChange}>Add Workout To Profile</Button></Wrapper>)}
        </div>
        </>
    )
}

export default WorkoutCard