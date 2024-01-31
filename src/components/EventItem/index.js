// Write your code here

import './index.css'

const EvnetItem = props => {
  const {eachlistDetails, regisStatus} = props
  const {imageUrl, location, name, registrationStatus} = eachlistDetails

  const onChagneleftcontainer = () => {
    regisStatus(registrationStatus)
  }

  return (
    <li className="listcontainer">
      <button
        type="button"
        className="buttonimagecontainer"
        onClick={onChagneleftcontainer}
      >
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EvnetItem
