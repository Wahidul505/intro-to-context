import React from 'react';
import Broh from '../Broh/Broh';

const Sister = ({house}) => {
    return (
        <section>
            <p>Sister</p>
            <p><small>House: {house}</small></p>
            <Broh></Broh>
        </section>
    );
};

export default Sister;