// I denne opgave skal du arbejde videre med React useEffect og useState Hooks.
// Du skal lave en komponent som kan vise en timer der tæller sig selv op hver sekund. Det betyder at komponenten skal rendere - eller gengive sig selv - med et sekunds mellemrum.
// Du skal samtidig vise en tekst hvori det tal der tælles op, indgår som en dynamisk værdi.
// Du skal bruge useState til at sætte, påvirke og tracke din variabel.

import { useState, useEffect } from "react"


export const Timer = () => {
    const [ count, setCount] = useState(0)

    useEffect(() => {

    })    

    return (
        <h2>antal: {count}</h2>
    )
}