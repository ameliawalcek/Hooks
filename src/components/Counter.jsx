import React, { useState, useMemo } from 'react'
//for performance optimization

//difference between useCallback vs useMemo
//useCallback - caches the provided function instance itself
//useMemo - invokes the provided function and caches the result

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => setCounterOne(counterOne + 1)

    const incrementTwo = () => setCounterTwo(counterTwo + 1)

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++ //induce slowness
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            {/* it is a variable not a function isEven */}
            <span>{isEven ? 'even' : 'odd'}</span>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    )
}

export default Counter
