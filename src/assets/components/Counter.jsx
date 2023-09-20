import React from 'react';

const Counter = ({fruitObject, increment, decrement, fruitImageObject}) => {
    return (

        <div>
            {Object.keys(fruitObject).map((fruit) => {
                return(
                <div key={fruit}>
                    <span>{fruitImageObject[fruit]}</span>
                    <span>{fruit}</span>
                    <button onClick={() => decrement(fruit)}>-</button>
                    <span>{fruitObject[fruit]}</span>
                    <button onClick={() => increment(fruit)}>+</button>
                </div>
                )
            })}
        </div>
    );
};

export default Counter;
