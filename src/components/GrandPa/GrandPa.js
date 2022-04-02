import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './GrandPa.css';

export const TakaContext = createContext();

const GrandPa = () => {
    const [house, setHouse] = useState(0);
    const handleBuyAHouse = () =>{
        setHouse(house + 1);
    }
    const pendingGift = 10000;
    return (
        <TakaContext.Provider value={[pendingGift, house, setHouse]}>
            <div>
            <h4>GrandPa</h4>
            <p>House: {house}</p>
            <button onClick={handleBuyAHouse}>Buy A House</button>
            <div className='grandpa'>
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
            </div>
        </div>
        </TakaContext.Provider>
    );
};

export default GrandPa;