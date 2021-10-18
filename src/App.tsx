import React, { FC, useEffect, useState } from 'react'
import './app.css'

const App: FC = () => {
    const [count, setCount] = useState(0)

    const add = (count: number) => {
        setCount(count)
    }
    useEffect(() => {
        console.log('app Index')
    }, [])

    return (
        <div>
            <h2>Welcome to vite-react-cli</h2>
        </div>
    )
}

export default App
