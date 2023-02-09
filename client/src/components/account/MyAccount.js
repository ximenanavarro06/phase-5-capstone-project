import React, { useState } from "react";

function MyAccount({currentUser}) {
    console.log(currentUser)
    const [editUsername, setEditUsername] = useState(currentUser.username);
    console.log(editUsername)
    const [editPassword, setEditPassword] = useState(currentUser.password);
    const [editPasswordConfirmation, setEditPasswordConfirmation] = useState(currentUser.password);
    const [editHeight, setEditHeight] = useState(currentUser.height);
    console.log(editHeight)
    const [editWeight, setEditWeight] = useState(currentUser.weight);
    const [editWeightGoal, setEditWeightGoal] = useState(currentUser.weight_goal);
    const [editGender, setEditGender] = useState(currentUser.gender);
    const [editFitnessGoal, setEditFitnessGoal] = useState(currentUser.fitness_goal);
    const [editHealthGoal, setEditHealthGoal] = useState(currentUser.health_goal);
    //const [errors, setErrors] = useState([])

    const genders = [
        "Female",
        "Male"
    ]

    const genderOptions = genders.map((gender) => {
        return <option value={gender}> {gender} </option>
    })

    function handleSubmit(e) {
        e.preventDefault();
        //setErrors([]);

        const editAccount = {
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

        function handleDeleteClick() {
            fetch(`/users/${currentUser.id}`, {
                method: "DELETE",
            });
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label><strong>Username:</strong></label>
            <input
                type="text"
                id="username"
                placeholder={`Change from ${currentUser.username}`}
                value={editUsername}
                onChange={(e) => setEditUsername(e.target.value)}
            />

            <label><strong>Password:</strong></label>
            <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
            />

            <label><strong>Confirm Password:</strong></label>
            <input
                type="password"
                id="password_confirmation"
                placeholder="Confirm password..."
                value={editPasswordConfirmation}
                onChange={(e) => setEditPasswordConfirmation(e.target.value)}
            />

            <label><strong>Your Height:</strong></label>
            <input
                type="number"
                id="height"
                placeholder="Height in inches"
                value={editHeight}
                onChange={(e) => setEditHeight(e.target.value)}
            />

            <label><strong>Your Weight:</strong></label>
            <input
                type="number"
                id="weight"
                placeholder="Weight in lbs"
                value={editWeight}
                onChange={(e) => setEditWeight(e.target.value)}
            />

            <label><strong>Weight Goal:</strong></label>
            <input
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
            <input
                type="text"
                id="fitnessGoal"
                placeholder="Enter your fitness goal..."
                value={editFitnessGoal}
                onChange={(e) => setEditFitnessGoal(e.target.value)}
            />

            <label><strong>Health Goal:</strong></label>
            <input
                type="text"
                id="healthGoal"
                placeholder="Enter your overall health goal..."
                value={editHealthGoal}
                onChange={(e) => setEditHealthGoal(e.target.value)}
            />

            <button className="ui button" type="submit">
                Update Account
            </button>
            </form>

            <button onClick={handleDeleteClick}>
                <span role="img" aria-label="delete">
                    🗑
                </span>
            </button>
        </div>
    )
}

export default MyAccount