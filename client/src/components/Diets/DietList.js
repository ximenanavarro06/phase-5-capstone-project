import React from "react"
import DietCard from "./DietCard"

function DietList({diets}) {

    const dietList = diets.map((diet) => (
        <DietCard
        key={diet.id}
        diet={diet}
        />
    ))

    return (
        <>
            <div className="cards" style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>{dietList}</div>
        </>
    )
}

export default DietList