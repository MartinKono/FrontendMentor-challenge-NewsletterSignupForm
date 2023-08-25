import "./NewsletterConfirmation.css"
import NewsetterImage from "../images/NewsletterImage"
import NewsetterImageMobile from "../images/NewsletterImageMobile"
import ConfirmIconSmall from "../images/ConfirmIconSmall"
import { useState, useEffect } from "react"

const NewsletterForm = ({ setSigned, setSubscribedEmail }) => {

  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)
  const [screenSize, setScreenSize] = useState({})

  const formHandler = (event) => {
    event.preventDefault()

    const validRegex = /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (validRegex.test(email)) {
        setSubscribedEmail(email)
        setSigned(true)
    } else {
        setError(true)
        setTimeout(() => setError(false), 2000)
    }
  }

  const getCurrentDimension = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  return (
    <div className="form">
        <div className="form-text-content">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly<br/> updated on:</p>
            <div className="form-icons-info">
                <ConfirmIconSmall/>
                <p>Product discovery and building what matters</p>
            </div>
            <div className="form-icons-info">
                <ConfirmIconSmall/>
                <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="form-icons-info">
                <ConfirmIconSmall/>
                <p>And much more!</p>
            </div>
            <form className="form-input" onSubmit={formHandler}>
                <div className="email-info">
                    <p>Email address</p>
                    {error && <p id="p-error">Valid email required</p>}
                </div>
                <input id={error ? "error-input-email":""}type="text" placeholder="email@company.com" onChange={(event)=>{setEmail(event.target.value)}} value={email}/>
                <input type="submit" value="Subscribe to monthly newsletter"/>
            </form>
        </div>
        {(screenSize.width < 900) ? <NewsetterImageMobile/> : <NewsetterImage/>}
    </div>
  )
}

export default NewsletterForm