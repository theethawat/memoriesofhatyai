import React, { Component } from "react"
import Congrat from "./Congrat"
import "./CongratApp.css"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: "",
      show: false
    }
  }

  onChange = e => {
    const { name, value } = e.target
    console.log("Name" + name + "code " + value)
    this.setState({
      code: value,
      show: false
    })
    console.log("State Code" + this.state.code)
  }

  onCodeSubmit = e => {
    e.preventDefault()
    console.log("This .code is" + this.state.code)
    this.setState({
      show: true
    })
  }

  render() {
    let show
    if (this.state.show == true) {
      show = <Congrat value={this.state.code} />
    } else show = ""

    return (
      <div className="container enter-code">
        <br />
        <h3 className="kanitlight acenter">Memories of Hatyai</h3>
        <form onSubmit={this.onCodeSubmit}>
          <div className="row">
            <div className="col-sm-4 piccenter">
              <label className="kanitlight"> ใส่โค้ดที่ได้รับไป </label>
              <input
                type="text"
                name="code"
                class="form-control kanitlight "
                onChange={this.onChange}
                required
              />
              <br />
              <button
                type="submit"
                className="btn btn-info kanitlight piccenter acenter"
              >
                Activate
              </button>
            </div>
          </div>
        </form>
        <hr />
        {show}
      </div>
    )
  }
}
export default App
