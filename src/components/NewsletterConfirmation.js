import "./NewsletterForm.css"
import ConfirIconLarge from "../images/ConfirmIconLarge"
import ConfirmIconLarge from "../images/ConfirmIconLarge"

const NewsletterConfirmation = ({ subscribedEmail, setSubscribedEmail, setSigned }) => {

  const buttonHandler = () => {
    setSubscribedEmail("")
    setSigned(false)
  }

  return (
    <div className="confirmation">
        <ConfirmIconLarge/>
        <h1>Thanks for<br/>subscribing!</h1>
        <p>A confirmation email has been sent to <b>{subscribedEmail}</b>. Please open it and click the button inside to confirm your subscription</p>
        <button onClick={buttonHandler}>Dismiss message</button>
    </div>
  )
}

export default NewsletterConfirmation