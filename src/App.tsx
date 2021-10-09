import React, { FC, useEffect } from 'react'
import './app.css'

const App: FC = () => {
    useEffect(() => {
        console.log(123)
    }, [])
    return (
        <div>
            <h2>Welcome to vite-react-cli</h2>
        </div>
    )
}

export default App
