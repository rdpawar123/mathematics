import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Task2 extends Component {
  userData;
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePhone(e) {
    this.setState({ phone: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));
    if (localStorage.getItem("user")) {
      this.setState({
        name: this.userData.name,
        email: this.userData.email,
        phone: this.userData.phone,
      });
    } else {
      this.setState({
        name: "",
        email: "",
        phone: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }
  render() {
    return (
      <>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" className="form-control" />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
        )
      </>
    );
  }
}
export default Task2;
