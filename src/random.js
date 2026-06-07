import { useState } from "react";
import "./index.css";

function RandomGenerator() {
    // Initial state is null because no number has been generated yet
    const [randomNumber, setRandomNumber] = useState(null);

    function generateNumber() {
        // Generates a random integer between 1 and 100
        const randomInt = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(randomInt);
    }

    return (
        <div className="container">
            <h2>Random Number Generator</h2>

            {randomNumber === null ? (
                <p className="placeholder">No number generated yet</p>
            ) : (
                <h1 className="randomNum">{randomNumber}</h1>
            )}

            <button className="btn" onClick={generateNumber}>
                Generate Random Number
            </button>
        </div>
    );
}

export default RandomGenerator;