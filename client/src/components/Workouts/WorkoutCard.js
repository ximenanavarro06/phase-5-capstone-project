import React, {useState} from "react";
import { Link } from "react-router-dom"
import styled, {css} from 'styled-components'

function WorkoutCard({workout, onAddWorkoutToProfile, onRemoveWorkoutFromProfile}) {
    const Button = styled.button`
    display: inline-block;
    background: transparent;
    border-radius: 3px;
    border: 3px solid palevioletred;
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
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            {/* <div className="card" style={{display: "box", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", textAlign: "center", width: "20vw", height: "20vh", border: "10px solid", borderColor: "violet",margin: "1px", backgroundColor: "pink"}}> */}
            <div className="card" style={{display: "box", textAlign: "center", width: "13vw", height: "20vh", border: "10px solid", borderColor: "pink",margin: "1px", backgroundColor: "pink", borderRadius:"700px"}}>
            <p>{movement.name}</p>
            <p>Sets: {movement.sets}</p>
            <p>Reps: {movement.reps}</p>
            <Wrapper>
            <Button as="a" href={`/movement_how_tos/${movement.id}`}>
            How To
            </Button>
            </Wrapper>
            </div>
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
        <div className="card" style={{display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", textAlign: "center", width: "40vw", height: "65vh", border: "10px solid", borderColor: "pink",margin: "50px", backgroundColor: "pink", borderRadius: "360px"}}>
            <h2 style={{fontSize: "19px"}}>{name}</h2>
                {movementList}
            {onToProfile ? (
                <Wrapper><Button onClick={handleAddWorkoutToProfileChange} style={{borderRadius:"15px", marginRight:"60px"}}>Remove From Profile</Button></Wrapper>
            ) : ( <Wrapper><Button primary onClick={handleAddWorkoutToProfileChange} style={{borderRadius:"15px", marginRight:"60px"}}>Add Workout To Profile</Button></Wrapper>)}
        </div>
        </>
    )
}

export default WorkoutCard