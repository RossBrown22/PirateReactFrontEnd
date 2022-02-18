import React, { useState, useEffect } from "react";
import PirateList from "../components/PirateList";
import PirateDetail from "../components/PirateDetail";
import PirateSelector from "../components/PirateSelector";


const PirateContainer = () => {
    const [pirates, setPirates] = useState([]);
    const [selectedPirate, setSelectedPirate] = useState(null);

    useEffect(() => {
        getPirates();
    }, [])

    const getPirates = function(){
        fetch('pirates')
        .then(res => res.json())
        .then(pirates => setPirates(pirates))
    }

    const onPirateSelected = function(pirate){
        setSelectedPirate(pirate)
    }

    return (
        <div>
        <PirateSelector pirates={pirates} onPirateSelected={onPirateSelected}/>
        {selectedPirate ?<PirateDetail pirate={selectedPirate}/> : null}
        </div>
    )
}

export default PirateContainer;