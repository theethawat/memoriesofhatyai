import React, { Component } from "react"
import "./CongratApp.css"
import "bootstrap/dist/css/bootstrap.min.css"
import FirebaseConfig from "./Firebase"
import firebase from "firebase"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      congratId: 0,
      name: "",
      photo: "",
      department: "",
      congratText: ""
    }
  }

  componentDidMount() {
    firebase.initializeApp(FirebaseConfig)
    let database = firebase.database()
    let congratulation = database.ref("/" + this.state.congratId)
    congratulation.on("value", snapshot => {
      let name = (snapshot.val() && snapshot.val().name) || "Annonymous"
      let photo = (snapshot.val() && snapshot.val().photo) || "Annonymous"
      let department =
        (snapshot.val() && snapshot.val().department) || "Annonymous"
      this.setState({
        name: name,
        photo: photo,
        department: department
      })
    })
  }

  render() {
    return (
      <div className="container">
        <br />
        <h2 className="kanit acenter text-uppercase">Congratulation</h2>
        <h2 className="kanit acenter">ยินดีด้วยนะครับ {this.state.name} </h2>
        <h5 className="kanitlight acenter">{this.state.department}, Eng PSU</h5>
        <img class="avatar-pic img-fluid piccenter " src={this.state.photo} />
      </div>
    )
  }
}

export default App
