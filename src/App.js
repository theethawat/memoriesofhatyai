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
    let refNo = 0
    switch (this.state.code) {
      case "CW'NunPhuchong":
        refNo = 1
        break
      case "ThansutaMnnthn":
        refNo = 2
        break
      case "KanthamasJunnuan":
        refNo = 3
        break
      case "NoPaphawin":
        refNo = 4
        break
      case "ThirapornUtarapichart":
        refNo = 6
        break
      case "SaharadDensrisereekul":
        refNo = 7
        break
      case "JasmineWiroolhakiat":
        refNo = 8
        break
      case "ไอแอม'มมแรบบิท":
        refNo = 9
        break
      case "FiradaoBennui":
        refNo = 10
        break
      case "BoonDet":
        refNo = 11
        break
      case "ChattarinHorhirunkul":
        refNo = 12
        break
      case "PeachyPeach":
        refNo = 13
        break
      case "KanitJongpunyalert":
        refNo = 14
        break

      default:
        refNo = 20
        break
    }
    this.setState({
      code: refNo,
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
            <div className="col-sm-4 piccenter acenter">
              <label className="kanitlight">Enter Your Code</label>
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
                className="btn btn-primary kanitlight piccenter acenter"
              >
                Activate
              </button>
            </div>
          </div>
        </form>
        <br />
        <p className="kanitlight acenter">
          <small>
            ใส่ชื่อ Facebook ของพี่ ๆ (ณ วันที่ 8 กันยายน 2562) โดยไม่มีช่องว่าง
            และ ตัวใหญ่ตัวเล็กตามชื่อ (Case Sensitive) เป็นโค้ดครับ เช่น
            Theethawat Savastham โค้ดเป็น TheethawatSavastham
            ไม่ว่าจะเป็นภาษาอังกฤษหรือภาษาไทย รวมถึงกรณีชื่อมีสัญลักษณ์อื่นๆเช่น
            ' หรือ _ ใส่ด้วยครับผม{" "}
          </small>
        </p>
        <hr />
        {show}
        <hr />
        <p className="kanitlight acenter">
          With Love From{" "}
          <a href="https://www.facebook.com/tin.savastham">Tin</a> and{" "}
          <a href="https://www.theduckcreator.in.th">TDC</a>{" "}
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International License
          </a>
          .{" "}
        </p>
      </div>
    )
  }
}
export default App
