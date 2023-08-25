import "./App.css"
import NewsletterForm from "./components/NewsletterForm"
import NewsletterConfirmation from "./components/NewsletterConfirmation"
import { useState } from "react"

const App = () => {

  const [signed, setSigned] = useState(false)
  const [subscribedEmail, setSubscribedEmail] = useState("")

  return (
    <div className="app">
      {signed ? <NewsletterConfirmation subscribedEmail={subscribedEmail} setSigned={setSigned} setSubscribedEmail={setSubscribedEmail}/> : <NewsletterForm setSigned={setSigned} setSubscribedEmail={setSubscribedEmail}/>}
    </div>
  )
}

export default App