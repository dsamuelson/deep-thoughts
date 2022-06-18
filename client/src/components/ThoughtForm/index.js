import React, { useState } from "react";

const ThoughtForm = () => {
    const [thoughtText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState('');

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    }

    return (
        <div>
            <p className={`m-0 ${characterCount === 280 ? 'text-error': ''}`}>
                Character Count: {characterCount}/280
            </p>
            <form className="flex-row justify-center justify-space-between-md align stretch">
                <textarea
                    placeholder="Here's a new thought..."
                    value={thoughtText}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <button className="btn col-12 col-md-3">Submit</button>
            </form>
        </div>
    )
}

export default ThoughtForm;