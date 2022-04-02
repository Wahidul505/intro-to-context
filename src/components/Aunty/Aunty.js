import React, { useContext } from 'react';
import { TakaContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const [ , house , setHouse] = useContext(TakaContext);
    return (
        <div>
            <p>Aunty</p>
            <p><small>House: {house}</small></p>
            <button onClick={()=> setHouse(house + 1)}>Buy!!!</button>
        </div>
    );
};

export default Aunty;