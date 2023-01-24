import { useState } from "react"

const ClickCounter = () => {
    const [number, setNumber] = useState(0);
    return (
        <>
        <h1>you've clicked the button {number} times</h1>
        <button type="button" onClick={() => setNumber(number + 1)}> click counter!</button>
        </>
    )
    }
export default ClickCounter
