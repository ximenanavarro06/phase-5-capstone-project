import React, { useState } from "react";
import WorkoutCard from "../Workouts/WorkoutCard"
import DietCard from "../Diets/DietCard"
import styled, {css} from 'styled-components'
import {CardInput} from "../../styles/Card"


function MyAccount({currentUser, history, onAddWorkoutToProfile, onRemoveWorkoutFromProfile, workouts, onAddDietToProfile, onRemoveDietFromProfile, diets}) {
    const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`
const Button2 = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid red;
    color: red;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props =>
    props.primary &&
    css`
      background: #ff0043;
      color: white;
    `};
`
    console.log(currentUser)
    const [editProfilePic, setEditProfilePic] = useState(currentUser.profile_pic);
    const [editUsername, setEditUsername] = useState(currentUser.username);
    const [editPassword, setEditPassword] = useState(currentUser.password);
    const [editPasswordConfirmation, setEditPasswordConfirmation] = useState(currentUser.password);
    const [editHeight, setEditHeight] = useState(currentUser.height);
    const [editWeight, setEditWeight] = useState(currentUser.weight);
    const [editWeightGoal, setEditWeightGoal] = useState(currentUser.weight_goal);
    const [editGender, setEditGender] = useState(currentUser.gender);
    const [editFitnessGoal, setEditFitnessGoal] = useState(currentUser.fitness_goal);
    const [editHealthGoal, setEditHealthGoal] = useState(currentUser.health_goal);
    //const [errors, setErrors] = useState([])
    const onProfileWorkouts = workouts.filter((workout) => workout.on_profile);
    const allWorkouts = onProfileWorkouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} onRemoveWorkoutFromProfile={onRemoveWorkoutFromProfile} onAddWorkoutToProfile={onAddWorkoutToProfile} />
    ))

    const onProfileDiets = diets.filter((diet) => diet.on_profile);
    const allDiets = onProfileDiets.map((diet) => (
        <DietCard key={diet.id} diet={diet} onRemoveDietFromProfile={onRemoveDietFromProfile} onAddDietToProfile={onAddDietToProfile} />
    ))

    //redirect to login page
    const redirect = () => {
        history.push('/');
    }

    //gender dropdown menu
    const genders = [
        "Female",
        "Male"
    ]

    const genderOptions = genders.map((gender) => {
        return <option value={gender}> {gender} </option>
    })


    //submit update user form
    function handleSubmit(e) {
        e.preventDefault();
        //setErrors([]);

        const editAccount = {
            profilePic: editProfilePic,
            username: editUsername,
            password: editPassword,
            passwordConfirmation: editPasswordConfirmation,
            height: editHeight,
            weight: editWeight,
            weightGoal: editWeightGoal,
            gender: editGender,
            fitnessGoal: editFitnessGoal,
            healthGoal: editHealthGoal
            };
            console.log(editAccount)

            fetch("/me", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editAccount),
            })
            .then((r) => r.json())
            .then( (editAccount)=> console.log(editAccount))
        }


        //delete current user account
        function handleDeleteClick() {
            fetch(`/users/${currentUser.id}`, {
                method: "DELETE",
            });
            redirect()
        }

    return (
        <div>
            <Wrapper>
                <article class ='card'>
                    {/* <div class='card-top'></div> */}
                    <form onSubmit={handleSubmit}>
                        <label><strong>Profile Pic: </strong></label>
                        <img
                            src={editProfilePic}
                            onChange={(e) => setEditProfilePic(e.target.value)}
                        />
                        <label><strong>Username:</strong></label>
                        <CardInput
                            type="text"
                            id="username"
                            placeholder={`Change from ${currentUser.username}`}
                            value={editUsername}
                            onChange={(e) => setEditUsername(e.target.value)}
                        />

                        <label><strong>Password:</strong></label>
                        <CardInput
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            value={editPassword}
                            onChange={(e) => setEditPassword(e.target.value)}
                        />

                        <label><strong>Confirm Password:</strong></label>
                        <CardInput
                            type="password"
                            id="password_confirmation"
                            placeholder="Confirm password..."
                            value={editPasswordConfirmation}
                            onChange={(e) => setEditPasswordConfirmation(e.target.value)}
                        />
                        <div class='card-bottom'>
                        <label><strong>Your Height:</strong></label>
                        <CardInput
                            type="number"
                            id="height"
                            placeholder="Height in inches"
                            value={editHeight}
                            onChange={(e) => setEditHeight(e.target.value)}
                        />

                        <label><strong>Your Weight:</strong></label>
                        <CardInput
                            type="number"
                            id="weight"
                            placeholder="Weight in lbs"
                            value={editWeight}
                            onChange={(e) => setEditWeight(e.target.value)}
                        />

                        <label><strong>Weight Goal:</strong></label>
                        <CardInput
                            type="number"
                            id="weightGoal"
                            placeholder="Weight in lbs"
                            value={editWeightGoal}
                            onChange={(e) => setEditWeightGoal(e.target.value)}
                        />

                        <select
                            id="genre"
                            name="genre"
                            onChange={(e) => setEditGender(e.target.value)}
                            value={editGender}
                        >
                            <option value={["unspecified"]} disabled selected>Select Gender...</option>
                            {genderOptions}
                        </select>

                        <label><strong>Fitness Goal:</strong></label>
                        <CardInput
                            type="text"
                            id="fitnessGoal"
                            placeholder="Enter your fitness goal..."
                            value={editFitnessGoal}
                            onChange={(e) => setEditFitnessGoal(e.target.value)}
                        />

                        <label><strong>Health Goal:</strong></label>
                        <CardInput
                            type="text"
                            id="healthGoal"
                            placeholder="Enter your overall health goal..."
                            value={editHealthGoal}
                            onChange={(e) => setEditHealthGoal(e.target.value)}
                        />
                        <div class='card-footer'>

                        <Button className="ui button" type="submit">
                            Update Account
                        </Button>
                        </div>
                        </div>

                    </form>

                    <Button2 primary onClick={handleDeleteClick} redirect={redirect}>DELETE YOUR USER
                    </Button2>
                    <div className="workoutsOnProfile">{allWorkouts}</div>
                    <div className="dietsOnProfile">{allDiets}</div>

                </article>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.main`
    --dark-cyan: hsl(185, 75%, 39%);
    /* --very-dark-desaturated-blue: hsl(229, 23%, 23%);
    --dark-grayish-blue: hsl(227, 10%, 46%);
    --dark-gray: hsl(0, 0%, 59%); */

    
    background-position: top -450px left -350px, bottom -600px right -300px;
    background-repeat: no-repeat, no-repeat;
    background-color: whitesmoke;
    display: flex;
    margin-top: 10px;
    align-items: top;
    justify-content: center;
    height: 200vh;
    width: 100vw;
    overflow: hidden;
    color: white;
    font-size: 18px;
    font-family: 'Kumbh Sans', sans-serif;

    .card {
        background-color: pink;
        color: var(---dark-gray);
        margin-top: 20px;
        height: 600px;
        width: 400px;
        border-radius: 20px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        position: relative;
    }

    /* .card-top {
        
        height: 40%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    } */

    .card img {
        position: absolute;
        height: 120px;
        width: 130px;
        top: 120px;
        left: 130px;
        border-radius: 50%;
        background: white;
        padding: 5px;
        margin-top: -100px
    }

    .card-bottom {
        margin-top: 0px;
        color: var(--very-dark-desaturated-blue);
    }
     h1 {
    }
    h4 {
        margin-bottom: 10px;
        span {
            color: var(--dark-gray);
        }
    }
    h5 {
        margin-bottom: 10px;
        color: var(--dark-gray);
    }
    h6 {
        font-weight: 600;
        font-size: 18px;
    }
    p {
        font-size: 10px;
        font-weight: 600;
        color: var(--dark-gray);
        letter-spacing: 1px;
    }

     /* .card-footer {
        position: absolute;
        bottom: 0;
        padding-bottom: 25px;
        margin-top: 20px;
        padding-top: 20px;
        border-top-width: 1px;
        border-top-color: var(--dark-gray);
        border-top-style: solid;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    } */
`;

export default MyAccount