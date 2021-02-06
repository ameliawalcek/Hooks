import React from 'react'

const Title = () => {
    console.log("rendering Title")

    return (
        <div>
            useCallback Hook
        </div>
    )
}

//prevent unnecessary re-renders
export default React.memo(Title)