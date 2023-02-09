import React, { useState } from "react";
//import { Button, Error, Input, FormField, Label, Textarea } from "../../styles";

function SignUpForm({onLogin, redirect}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [weightGoal, setWeightGoal] = useState(0);
    const [gender, setGender] = useState("");
    const [fitnessGoal, setFitnessGoal] = useState("");
    const [healthGoal, setHealthGoal] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const genders = [
        "Female",
        "Male"
    ]

    const genderOptions = genders.map((gender) => {
        return <option value={gender}> {gender} </option>
    })

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                height,
                weight,
                weight_goal: weightGoal,
                gender,
                fitness_goal: fitnessGoal,
                health_goal: healthGoal
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        });
        redirect()
    }



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                />
            </div>
            <div>
                <label htmlFor="password">Password Confirmation: </label>
                <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
                />
            </div>
            <div>
                <label htmlFor="height">Height: </label>
                <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="weight">Weight: </label>
                <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="weightGoal">Weight Goal: </label>
                <input
                type="number"
                id="weightGoal"
                value={weightGoal}
                onChange={(e) => setWeightGoal(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="fitnessGoal">Fitness Goal: </label>
                <input
                type="text"
                id="fitnessGoal"
                value={fitnessGoal}
                onChange={(e) => setFitnessGoal(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="healthGoal">Health Goal: </label>
                <input
                type="text"
                id="healthGoal"
                value={healthGoal}
                onChange={(e) => setHealthGoal(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="gender">Select Your Gender: </label>
                <select
                id="gender"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                >
                    <option value={["unspecified"]} disabled selected>Select Gender...</option>
                    {genderOptions}
                </select>
            </div>


            <div>
                <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
            </div>
            <div>
                {errors.map((err) => (
                <p key={err}>{err}</p>
                ))}
            </div>
        </form>
    )
}

export default SignUpForm


