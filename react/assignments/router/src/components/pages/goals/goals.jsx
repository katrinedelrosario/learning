import { useEffect, useState } from "react"
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


const Goals = () => {
    return (
        <div>
            <h1>1️⃣7️⃣ 🌍🥅</h1>
            <section><GoalsList /></section>
        </div>
    )
}

const GoalsList = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const url = `https://api.mediehuset.net/sdg/goals`

        const getData = async () => {
            try {
                const result = await axios.get(url)
                setApiData(result.data.items)
            }
            catch (err) {
                console.error(err)
            }
        }
        getData()

    }, [setApiData])

    return (
        <ul>
            {
                apiData && apiData.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={`/goals/${item.id}`}>{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const GoalsDetails = () => {
    const {id} = useParams()
    const [apiData, setApiData] = useState({})

    useEffect(() => {
        const url = `https://api.mediehuset.net/sdg/goals/${id}`

        const getData = async () => {
            try {
                const result = await axios.get(url)
                setApiData(result.data.item)
            }
            catch (err) {
                console.error(err)
            }
        }
        getData()

    }, [id])

    return(
        <div>
            {
                apiData && (
                    <>
                    <h2>{apiData.title}</h2>
                    <img src={apiData.image} alt={apiData.title}/>
                    <p>{apiData.byline}</p>
                    </>
                )
            }
        </div>
    )

}

export { Goals, GoalsList, GoalsDetails }