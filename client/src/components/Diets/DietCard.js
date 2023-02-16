import React, { useState } from "react"
import styled, {css} from 'styled-components'

function DietCard({diet, onAddDietToProfile, onRemoveDietFromProfile}) {
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
    const {id, diet_name,
        sunday_breakfast, sunday_lunch, sunday_dinner, sunday_snacks,
        monday_breakfast, monday_lunch, monday_dinner, monday_snacks,
        tuesday_breakfast, tuesday_lunch, tuesday_dinner, tuesday_snacks,
        wednesday_breakfast, wednesday_lunch, wednesday_dinner, wednesday_snacks,
        thursday_breakfast, thursday_lunch, thursday_dinner, thursday_snacks,
        friday_breakfast, friday_lunch, friday_dinner, friday_snacks,
        saturday_breakfast, saturday_lunch, saturday_dinner, saturday_snacks,
        on_profile: onProfile} = diet;
    const [onToProfile, setOnToProfile] = useState(onProfile)
    // console.log(onProfile)
    //handle add diet to profile
    function handleAddDietToProfileChange() {
        setOnToProfile((onToProfile) => !onToProfile);
        // console.log(onToProfile)
        fetch(`/diets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({on_profile: !onProfile})
        })
        .then((r) => r.json())
        // .then(addedToProfile => console.log(addedToProfile))
        .then((addedToProfile) => setOnToProfile ? onAddDietToProfile(addedToProfile) : onRemoveDietFromProfile(addedToProfile))
        //console.log(r.json)

    }



    return (
        <>
        <ul>
            <p><b>Diet: </b> {diet_name}</p>
            <p>Sunday Breakfast: {sunday_breakfast}</p>
            <p>Sunday Lunch: {sunday_lunch}</p>
            <p>Sunday Dinner: {sunday_dinner}</p>
            <p>Sunday Snacks: {sunday_snacks}</p>
            <p>Monday Breakfast: {monday_breakfast}</p>
            <p>Monday Lunch: {monday_lunch}</p>
            <p>Monday Dinner: {monday_dinner}</p>
            <p>Monday Snacks: {monday_snacks}</p>
            <p>Tuesday Breakfast: {tuesday_breakfast}</p>
            <p>Tuesday Lunch: {tuesday_lunch}</p>
            <p>Tuesday Dinner: {tuesday_dinner}</p>
            <p>Tuesday Snacks: {tuesday_snacks}</p>
            <p>Wednesday Breakfast: {wednesday_breakfast}</p>
            <p>Wednesday Lunch: {wednesday_lunch}</p>
            <p>Wednesday Dinner: {wednesday_dinner}</p>
            <p>Wednesday Snacks: {wednesday_snacks}</p>
            <p>Thursday Breakfast: {thursday_breakfast}</p>
            <p>Thursday Lunch: {thursday_lunch}</p>
            <p>Thursday Dinner: {thursday_dinner}</p>
            <p>Thursday Snacks: {thursday_snacks}</p>
            <p>Friday Breakfast: {friday_breakfast}</p>
            <p>Friday Lunch: {friday_lunch}</p>
            <p>Friday Dinner: {friday_dinner}</p>
            <p>Friday Snacks: {friday_snacks}</p>
            <p>Saturday Breakfast: {saturday_breakfast}</p>
            <p>Saturday Lunch: {saturday_lunch}</p>
            <p>Saturday Dinner: {saturday_dinner}</p>
            <p>Saturday Snacks: {saturday_snacks}</p>
            {onToProfile ? (
                <Button onClick={handleAddDietToProfileChange}>Remove From Profile</Button>
            ) : ( <Button primary onClick={handleAddDietToProfileChange}>Add Diet To Profile</Button>)}
        </ul>
        </>
    )
}

export default DietCard;