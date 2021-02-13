import React, { useEffect, useState } from 'react'

const List = ({ getItems }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(5))
        console.log('updating Items')
    }, [getItems])

    return (
        <div>
            {items.map(item => <div key={item}>{item}</div>)}
        </div>
    )
}

export default List