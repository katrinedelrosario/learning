import { useState, useEffect } from "react"
import axios from 'react'
import React from 'react'

const GoalList = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const url = `https://api.mediehuset.net/sdg/goals`
            const result = await axios.get(url)
            setApiData(result.data.items)
        }
        getData()
    }), [setApiData]

        return (
            <div>
                <h1>verdensmål</h1>
                <ul>
                    {apiData && apiData.map(value => {
                        return (
                            <li key={value.id}>{value.title}</li>
                        )
                    })}
                </ul>
            </div>
        ), [setApiData]
}

export { GoalList }