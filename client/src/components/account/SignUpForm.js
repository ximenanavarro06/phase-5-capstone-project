import React, { useState } from "react";
// import React, { useState, useRef } from "react";
//import { Button, Error, Input, FormField, Label, Textarea } from "../../styles";
import {CardWrapper, CardHeader, CardHeading, CardBody, CardIcon, CardFieldset, CardInput, CardOptionsItem, CardOptions, CardOptionsNote, CardButton, CardLink, Select} from "../../styles/Card"

function SignUpForm({onLogin, redirect}) {
    const [profilePic, setProfilePic] = useState("");
    // const imageRef = useRef(null)
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
                profile_pic: profilePic,
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
        redirect();
    }

    function convertInches(inches) {
        let feetFromInches = Math.floor(inches / 12);
        let inchesRemainder = inches % 12;

        let result = feetFromInches + "'-" + inchesRemainder
        console.log(result)
        return result
    }
    convertInches(height)

    console.log(convertInches(height))


    // //file upload function
    // function useDisplayImage() {
    //     const [result, setResult] = React.useState("");

    //     function uploader(e) {
    //         const imageFile = e.target.files[0];

    //         const reader = new FileReader();
    //         reader.addEventListener("load", (e) => {
    //         setResult(e.target.result);
    //         });

    //         reader.readAsDataURL(imageFile);
    //     }

    //     return { result, uploader };
    // }

    //     const { result, uploader } = useDisplayImage();




    return (
        <form onSubmit={handleSubmit}>
            <>
                <CardWrapper>
                    <CardHeader>
                        <CardHeading>Sign Up</CardHeading>
                    </CardHeader>
                <CardBody>
                {/* <div>
                    <CardFieldset>
                        <label htmlFor="profilePic">Set profile pic</label>
                        <CardInput
                            type="file"
                            id="profile_pic"
                            files={profilePic}
                            onChange={(e) => {setProfilePic(e.target.files[0]);
                            uploader(e)
                            }}
                        />
                        {result && <img ref={imageRef} src={result} alt=""/>}
                    </CardFieldset>
                </div> */}
                <div>
                    <CardFieldset>
                        <label htmlFor="profilePic"></label>
                        <CardInput
                        type="text"
                        id="profilePic"
                        value={profilePic}
                        placeholder="Profile Image URL"
                        onChange={(e) => setProfilePic(e.target.value)}
                        />
                    </CardFieldset>
                </div>
                <div>
                    <CardFieldset>
                    <label htmlFor="username"></label>
                    <CardInput
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    </CardFieldset>
                </div>
                <div>
                <CardFieldset>
                    <label htmlFor="password"></label>
                    <CardInput
                    type="password"
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    />
                </CardFieldset>
                </div>
                <div>
                <CardFieldset>
                    <label htmlFor="password"></label>
                    <CardInput
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    placeholder="Confirm Password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                    />
                </CardFieldset>
                </div>
                <div>
                <CardFieldset>
                    <label htmlFor="height">Height: </label>
                    <CardInput
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    convertInches
                    />
                </CardFieldset>
                </div>
                <div>
                <CardFieldset>
                    <label htmlFor="weight">Weight: </label>
                    <CardInput
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    />
                </CardFieldset>
                </div>
                <div>
                <CardFieldset>
                    <label htmlFor="weightGoal">Weight Goal: </label>
                    <CardInput
                    type="number"
                    id="weightGoal"
                    value={weightGoal}
                    onChange={(e) => setWeightGoal(e.target.value)}
                    />
                </CardFieldset>
                </div>
                <div>
                <CardFieldset>
                    <label htmlFor="fitnessGoal"></label>
                    <CardInput
                    type="text"
                    placeholder="Your Fitness Goal"
                    id="fitnessGoal"
                    value={fitnessGoal}
                    onChange={(e) => setFitnessGoal(e.target.value)}
                    />
                </CardFieldset>
                </div>
                <div>
                <CardFieldset>
                    <label htmlFor="healthGoal"></label>
                    <CardInput
                    type="text"
                    id="healthGoal"
                    value={healthGoal}
                    placeholder="Your Health Goal"
                    onChange={(e) => setHealthGoal(e.target.value)}
                    />
                </CardFieldset>
                </div>
                <div>
                <CardFieldset>
                    <label htmlFor="gender"></label>
                    <Select
                    id="gender"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    >
                        <option value={["unspecified"]} disabled selected>Select Gender...</option>
                        {genderOptions}
                    </Select>
                </CardFieldset>
                </div>


                <div>
                    <CardButton type="submit">{isLoading ? "Loading..." : "Sign Up"}</CardButton>
                </div>
                <div>
                    {errors.map((err) => (
                    <p key={err}>{err}</p>
                    ))}
                </div>
                </CardBody>
                </CardWrapper>
            </>
        </form>
    )
}

export default SignUpForm










