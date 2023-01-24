import { useState } from "react"

const ContactForm = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    return (
        <>
        <h1>please fill out the form before continuing</h1>
        <form className="formInput">
            <div>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" name="firstname" id="firstname" onChange={e => {setFirstname(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" id="lastname" onChange={e => {setLastname(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="number">Number</label>
                <input type="text" name="number" id="number" onChange={e => {setNumber(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={e => {setEmail(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="comment">Comment</label>
                <input type="text" name="comment" id="comment" onChange={e => {setComment(e.target.value)}} />
            </div>

        </form>
        <div className="formOutput">
            <h3>Firstame: {firstName}</h3>
            <h3>Lastname: {lastName}</h3>
            <h3>Phone: {number}</h3>
            <h3>Email: {email}</h3>
            <h3>Comment: {comment}</h3>
        </div>
        </>
    )
    }
export default ContactForm
