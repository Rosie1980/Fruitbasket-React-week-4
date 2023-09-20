import './App.css'
import {useState} from "react";
import Counter from "./assets/components/Counter.jsx";
import Button from "./assets/components/Button.jsx";

function App() {
    const initialFruit = {
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0
    };

    const [fruits, setFruits] = useState(initialFruit);

    const [fruitImage, setFruitImage] = useState({
        strawberries: '🍓',
        bananas: '🍌',
        apples: '🍏',
        kiwis: '🥝'
    });

    function reset() {
        setFruits(initialFruit)
    }

    function fruitIncrement(fruit) {
        setFruits((prevState) => ({
            ...prevState,
            [fruit]: prevState[fruit] + 1
        }))
    }

    function fruitDecrement(fruit) {
        if (fruits[fruit] > 0) {
            setFruits((prevState) => ({
                ...prevState,
                [fruit]: prevState[fruit] - 1
            }))
        }

    }

    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: '',
        zipcode: '',
        deliveryFrequency: 'weekly',
        timeSlot: 'daytime',
        comments: '',
        terms: false
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

        return (
            <>
                <h1>Fruitmand bezorgservice</h1>

                <Counter
                    fruitObject={fruits}
                    increment={fruitIncrement}
                    decrement={fruitDecrement}
                    fruitImageObject={fruitImage}
                />

                <Button
                    buttonType="button"
                    buttonText="Reset"
                    clickHandler={reset}
                />

                <section>
                <form className="form-wrapper" onSubmit={handleSubmit}>
                    <label htmlFor="firstname">Voornaam
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formState.firstname}
                        onChange={handleChange}
                    />
                    </label>

                    <label htmlFor="lastname">Achternaam
                        <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formState.lastname}
                        onChange={handleChange}
                    />
                    </label>

                    <label htmlFor="age">Leeftijd
                        <input
                            type="number"
                            name="age"
                            id="age"
                            value={formState.age}
                            onChange={handleChange}
                        />
                    </label>

                    <label htmlFor="zipcode">Postcode
                        <input
                            type="text"
                            name="zipcode"
                            id="zipcode"
                            value={formState.zipcode}
                            onChange={handleChange}
                        />
                    </label>

                    <select
                        name="deliveryFrequency"
                        value={formState.deliveryFrequency}
                        onChange={handleChange}>
                    <option value="weekly">Iedere week</option>
                    <option value="every other week">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                    </select>

                    <label>
                        Overdag
                        <input
                            type="radio"
                            name="timeSlot"
                            value="daytime"
                            checked={formState.timeSlot === "daytime"}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        S avonds
                        <input
                            type="radio"
                            name="timeSlot"
                            value="evening"
                            checked={formState.timeSlot === "evening"}
                            onChange={handleChange}
                        />
                    </label>

                    <label htmlFor="comments">Opmerking
                        <input
                            type="text"
                            name="comments"
                            value={formState.comments}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formState.terms}
                            onChange={handleChange}
                        />
                        Ik ga akkoord met de algemene voorwaarden
                    </label>

                    <Button
                        buttonType="submit"
                        buttonText="Verzenden"
                    />

                </form>

                </section>


            </>
        );
    }
export default App;
