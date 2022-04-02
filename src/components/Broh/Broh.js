import React, { useContext } from 'react';
import { TakaContext } from '../GrandPa/GrandPa';

const Broh = () => {
    const [gift, house, setHouse] = useContext(TakaContext);
    return (
        <section>
            <p>Broh</p>
            <h5>Gift: {gift}</h5>
            <p><small>House: {house}</small></p>
            <button onClick={()=> setHouse(house + 1)}>Buy A House</button>
        </section>
    );
};

export default Broh;