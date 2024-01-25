import TasbihHeader from './TasbihHeader'
import CounterLimit from './CounterLimit'
import TasbihCounter from './TasbihCounter'
import './Style.css'
import { useState } from 'react'

function TasbihApp() {
    const [limit, setLimit] = useState(33)

    function handleLimitChange(newLimit) {
        setLimit(parseInt(newLimit, 10))
    }



    return (
        <div className='container'>
            <TasbihHeader />
            <CounterLimit 
                onLimitChange={handleLimitChange}
            />
            <TasbihCounter
                limit={limit}
            />
        </div>
    )
}

export default TasbihApp