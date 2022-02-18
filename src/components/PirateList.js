import React from 'react';
import PirateItem from './PirateItem';

const PirateList = ({pirates, onPirateClick}) => {

    const piratesItems = pirates.map((pirate, index) => {
        return <PirateItem pirate={pirate} key={index} onPirateClick={onPirateClick}/>
    })
    
    return (
        <div>
            <ul>
                {piratesItems}
            </ul>
        </div>
    )
}

export default PirateList;