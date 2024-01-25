import { useState } from "react"

function SetLimit({ onLimitChange }) {

    const [inputLimit, setInputLimit] = useState(33)

    function handleInputLimit(e) {
        // Get the entered value and remove non-numeric characters
        let value = e.target.value.replace(/\D/g, '')

        // This ensure the value is between 1 & 1000
        value = Math.min(1000, Math.max(1, value))

        setInputLimit(value)

        // Notify the parent component about the limit change
        onLimitChange(value)


    }
   

    return (
        <form action="" className="set-limit">
            <label htmlFor="number">
                Set Limit(1000 max):   
            </label>
            <input 
                type="number"  
                value={inputLimit}
                onChange={handleInputLimit}
            />
        </form>
    )
}

export default SetLimit