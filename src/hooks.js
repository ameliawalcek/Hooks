import { useState } from 'react'

export function useInputValue(initialValue) {
    const [value, setValue] = useState(initialValue)

    return [value, setValue]
}