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
    let congratulation = database.ref("/congrat/" + this.state.congratId)
    congratulation.on("value", snapshot => {
      let name = (snapshot.val() && snapshot.val().name) || "Annonymous"
      let photo = (snapshot.val() && snapshot.val().photo) || "Annonymous"
      let department =
        (snapshot.val() && snapshot.val().department) || "Annonymous"
      let congratText =
        (snapshot.val() && snapshot.val().congratText) || "Annonymous"
      this.setState({
        name: name,
        photo: photo,
        department: department,
        congratText: congratText
      })
    })
  }

  render() {
    return (
      <div className="container">
        <br />
        <h2 className="kanit acenter text-uppercase">Congratulation</h2>
        <h2 className="kanit acenter">ยินดีด้วยนะครับ{this.state.name} </h2>
        <h5 className="kanitlight acenter">{this.state.department} PSU</h5>
        <img class="avatar-pic img-fluid piccenter " src={this.state.photo} />
        <br />
        <p className="kanitlight acenter"> {this.state.congratText} </p>
        <p className="kanit acenter">
          ติน - A-Intania 50 / CoE'28
          <br />8 September 2019
        </p>
        <br />
        <p className="kanitlight acenter">
          <span className="text-info">
            Memories of Hatyai Project | Graduation Ceremony
          </span>
          <br />
          <b>Faculty of Engineering, Prince of Songkla University </b>
          <br />
          Hatyai Songkhla, Thailand
        </p>
      </div>
    )
  }
}

export default App
