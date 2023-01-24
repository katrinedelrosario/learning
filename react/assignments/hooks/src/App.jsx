import ClickCounter from "./components/counter";
import SendGreeting from "./components/greeting";
import FormElements from "./components/formelements";
import ContactForm from "./components/contactform";
import './App.scss';

function App () {
    return (
        <SendGreeting />,
        <ClickCounter />,
        <ContactForm />,
        <FormElements /> 
      
    )
  }
export default App;