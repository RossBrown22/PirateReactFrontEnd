import React from "react";

const PirateSelector = ({pirates, onPirateSelected}) => {
    
    const handleChange = (event) => {
        const chosenPirate = pirates[event.target.value]
        onPirateSelected(chosenPirate)
    }

    const PirateOptions = pirates.map((pirate, index) => {
        return <option value={index} key={index}>{pirate.firstName} {pirate.lastName}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose a Pirate...</option>
            {PirateOptions}
        </select>
    )
}

export default PirateSelector;