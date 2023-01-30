import {Route, Routes} from 'react-router-dom'
import ContactForm from '../contactform'
import ClickCounter from '../counter'
import SendGreeting from '../greeting'
import NotFound from '../notfound'

const AppRouter = () => {
    return (

        <Routes>
            <Route index element={<ClickCounter/>}/>
            <Route path="/form" element={<ContactForm />}/>
            <Route>
                <Route index element={<SendGreeting />}/>
            </Route>
            <Route path="/*" element={<NotFound />}/>
        </Routes>
    )
}