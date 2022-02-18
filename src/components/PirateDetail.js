import React from "react";

const PirateDetail = ({pirate}) => {
    
    const raidList = pirate.raids.map((raid) => {
        return <li>Location: {raid.location} - Loot: {raid.loot} Gold</li>
    })

    return (
        <>
        <h3>{pirate.firstName} {pirate.lastName}</h3>
        <p>Age: {pirate.age}</p>
        <p>Ship: {pirate.ship.name}</p>
        <p>
            <ul>{raidList}</ul>
        </p>
        </>
    )
}

export default PirateDetail;