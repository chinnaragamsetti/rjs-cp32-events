// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {statusDetails} = props

  switch (statusDetails) {
    case 'INITIAL':
      return (
        <p className="initial">
          Click on an event, to view its registration details
        </p>
      )
    case 'YET_TO_REGISTER':
      return (
        <div className="yetcontainer">
          <div className="imagecontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
              className="yetimage"
            />
          </div>

          <p className="yettext">
            A live performance brings so much to your relationship with dance
          </p>
          <button type="button" className="yetbutton">
            Register Here
          </button>
        </div>
      )

    case 'REGISTERED':
      return (
        <div className="registeredcontainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registeredimage"
          />
          <h1 className="registeredtext">
            You have already registered for the event
          </h1>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="registrationclosedcontainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="registrationclosedimage"
          />
          <h1 className="registrationclosedtext1">
            Registrations Are Closed Now!
          </h1>
          <p className="registrationclosedtext2">Stay tuned. We will reopen</p>
        </div>
      )

    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
