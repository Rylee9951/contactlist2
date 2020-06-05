import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Contacts from "./Contacts"
import SingleView from "./SingleView"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Contacts} />
        <Route path="/contact/:id" component={SingleView} />
      </div>
    </Router>
  )
}

export default App
