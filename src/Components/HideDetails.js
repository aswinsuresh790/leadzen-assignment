import React from 'react'
import '../Styles/viewdeatls.css'
const HideDetails = (props) => {
    const{name,city,description,phone,country,email,suite,  designation}=props
  return (
    <div>
      <div className="box-view-2">
    <div className="box-details-view">
        <div className="box-details-description-view-1">
      <div className="box-details-description-view mx-4"><b>Description </b><br/> {description}</div>
      </div>
      <div className="seprate-box d-flex ">
      <div className="first-row d-flex  flex-column mb-1 m-4">
      <div className="box-details-contact-view mb-2"><b>    Contact</b><br/>{name}</div>
      <div className="box-details-designation-view mb-2"><b>Designation</b><br/>{designation}</div>
      <div className="box-details-email-view mb-2"><b>Email</b><br/>{email}</div>
      <div className="box-details-phone-view mb-2"><b>Phone</b><br/>{phone}</div>
      
      </div>
      <div className="second-row d-flex flex-column mb-1 m-4">
      <div className="box-details-address-view mb-2"><b>Address</b><br/>{city},{suite},{country}</div>
      <div className="box-details-city-view mb-2"><b>City</b><br/>{city}</div>
      <div className="box-details-state-view mb-2"><b>State</b><br/>{country}</div>
      <div className="box-details-country-view mb-2"><b>Country</b><br/>{country}</div>
      </div>
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default HideDetails
