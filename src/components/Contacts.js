import React from "react"
import users from "./contacts.json"
import { Link } from "react-router-dom"
import "../styles/contacts.css"

const Contacts = props => {
  return (
    <div className="contactsContainer">
      <div className="header">My Peeps</div>
      {users.map(item => (
        <Link key={`contacts-${item.id}`} to={`/contact/${item.id}`}>
          <div className="contacts">
            <img src={item.picture.thumbnail} />{" "}
            <p>
              {item.name.first} {item.name.last}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Contacts
