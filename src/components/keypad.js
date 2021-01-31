import { useState } from 'react';

const Keypad = (props) => {

    return (
        <div onClick={() => props.onClick(props.children)} className="keypad">
            { props.children}
        </div >
    )
}

export default Keypad