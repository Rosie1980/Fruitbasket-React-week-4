import React from 'react'

function Button({buttonType, buttonText, clickHandler}) {
    return (

        <button
            type={buttonType}
            onClick={clickHandler}
        >
            {buttonText}
        </button>

    )
}

export default Button