import React, { Component } from "react"
import "./CongratApp.css"
import "bootstrap/dist/css/bootstrap.min.css"
import FirebaseConfig from "./Firebase"
import firebase from "firebase"

firebase.initializeApp(FirebaseConfig)
let database = firebase.database()

class Congrat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      congratId: this.props.value,
      name: "",
      photo: "",
      department: "",
      congratText: "",
      flowerName: "",
      flowerDefinition: ""
    }
  }

  componentDidMount() {
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

      let flowerDB = database.ref("/flower/" + this.state.department)
      flowerDB.on("value", snapshot => {
        let flowerName =
          (snapshot.val() && snapshot.val().name) || "No Program Resource"
        let flowerDefinition =
          (snapshot.val() && snapshot.val().definition) || "No Program Resource"
        this.setState({
          flowerName: flowerName,
          flowerDefinition: flowerDefinition
        })
      })
    })
  }

  render() {
    return (
      <div className="container">
        <img
          className="img-fluid cap piccenter"
          src="http://dev.theduckcreator.in.th/theethawat/freepik-icon/mortarboard.png"
        />
        <h2 className="kanit acenter text-uppercase orange-text">
          Congratulation
        </h2>
        <h2 className="kanit acenter">
          ยินดีด้วยนะครับ{this.state.name} {this.state.department} PSU
        </h2>
        <img class="avatar-pic img-fluid piccenter " src={this.state.photo} />
        <br />

        <blockquote className="blockquote kanitlight acenter">
          <p>{this.state.congratText}</p>
        </blockquote>

        <p className="kanit acenter">
          ติน - A-Intania 50 / CoE'28
          <br />8 September 2019
        </p>
        <br />
        <hr />

        <h5 className="kanit acenter">{this.state.flowerName}</h5>
        <p className="kanitlight acenter">{this.state.flowerDefinition}</p>

        <hr />
        <p className="kanitlight acenter">
          <span className="text-info">
            Memories of Hatyai Project | Graduation Ceremony
          </span>
          <br />
          <b>Faculty of Engineering, Prince of Songkla University </b>
          <br />
          Hatyai Songkhla, Thailand
        </p>
        <p className="kanitlight acenter">
          <small>
            <div>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </small>
        </p>
      </div>
    )
  }
}

export default Congrat
