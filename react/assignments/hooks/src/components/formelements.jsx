import { useState } from "react"
import './formelements.scss'

const FormElements = () => {
    const [formElm, setFormElm] = useState({}, {
        firstName: '...',
        lastName: '...',
        number: '...',
        email: '...',
        comment: '...',
        description: '...',
        accept: false
    })

    const registerInput = e => {
        setFormElm(prevState => {
            return {...prevState, [e.target.name]: e.target.value}

        })
    }

    const registerCheckbox = e => {
        setFormElm(prevState => {
            return {...prevState, accept: e.target.checked}

        })
    }

    return (
        <>
        <h1>please fill out the form before continuing</h1>
        <form className="formInput">
            <div>
                <label htmlFor="firstName">Firstname</label>
                <input type="text" name="firstName" id="firstName" onChange={registerInput}/>
            </div>
            <div>
                <label htmlFor="lastName">Lastname</label>
                <input type="text" name="lastName" id="lastName" onChange={registerInput}/>
            </div>
            <div>
                <label htmlFor="number">Number</label>
                <input type="text" name="number" id="number" onChange={registerInput}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={registerInput}/>
            </div>
            <div>
                <label htmlFor="comment">Comment</label>
                <input type="text" name="comment" id="comment" onChange={registerInput}/>
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" onChange={registerInput}>
                    <option value="Woman">Woman</option>
                    <option value="Man">Man</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" onChange={registerInput}/>
            </div>

            <div>
                <label htmlFor="accept">accept conditions</label>
                <input type="checkbox" name="accept" id="accept" onClick={registerCheckbox}/>
            </div>

        </form>
        <div className="formOutput">
            <ul>
            <li>Firstame: {formElm.firstName}</li>
            <li>Lastname: {formElm.lastName}</li>
            <li>Phone: {formElm.number}</li>
            <li>Email: {formElm.email}</li>
            <li>Comment: {formElm.comment}</li>
            <li>Gender: {formElm.gender}</li>
            <li>Description: {formElm.description}</li>
            <li>Accept: {formElm.accept ? 'Yes' : 'No'}</li>
            </ul>           
        </div>
        </>
    )
    }
export default FormElements
