import React, { useContext } from 'react'
import { CourseContext, UserContext } from '../App'

export const CompB = () => {

    const user = useContext(UserContext)
    const course = useContext(CourseContext)

    return (
        <div>
            User context value {user} goes to {course}
        </div>
    )
}

