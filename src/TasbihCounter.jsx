import { useState } from "react"
import TasbihCounterButton from './TasbihCounterButton'

function TasbihCount({ limit }) {

    const [count, setCount] = useState(0)

    function handleIncrement() {
        if (count < limit) {
            setCount(count + 1)
        } else {
            alert('Poodon 🙋 that is the limit')
        }
    }

    return (
        <>
            <h2 className="count"> {count} </h2>
            <TasbihCounterButton 
                handleIncrement={handleIncrement}
            />
        </>
    )
}

export default TasbihCount