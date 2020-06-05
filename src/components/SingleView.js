import React, { useEffect, useState } from "react"
import users from "./contacts.json"
import {
  FaUserAlt,
  FaArrowLeft,
  FaGlobeAmericas,
  FaPhone
} from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import "../styles/contact.css"

const SingleView = props => {
  const id = props.match.params.id
  let user = users.find(item => item.id == id)
  function back(e) {
    e.preventDefault()
    props.history.goBack()
  }
  return (
    <div className="singleContainer">
      <div className="mainImage">
        <button onClick={back}>
          <FaArrowLeft />
        </button>
        <img src={user.picture.large} />
      </div>
      <div className="info">
        <FaUserAlt />
        <p>
          {user.name.first} {user.name.last}
        </p>
      </div>
      <div className="info">
        <MdEmail />
        <p>{user.email}</p>
      </div>
      <div className="info">
        <FaPhone />
        <p>{user.phone}</p>
      </div>
      <div className="info">
        <FaGlobeAmericas />
        <p>
          {user.location.city}, {user.location.state}
        </p>
      </div>
    </div>
  )
}

export default SingleView
