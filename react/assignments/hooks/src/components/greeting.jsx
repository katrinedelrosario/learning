import { useState } from "react"

const SendGreeting = () => {
    const [name, setName] = useState('(insert name)');
    return (
        <>
        <h1>send a greeting to {name}:</h1>
        <input type="text" onInput={e => setName(e.target.value)} />
        </>
    )
    }
export default SendGreeting
