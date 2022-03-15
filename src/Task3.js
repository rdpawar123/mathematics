import React, { Component } from "react";

export default class ContactFormComponent extends Component {
  DATA;

  constructor(props) {
    super(props);

    this.eventName = this.eventName.bind(this);
    this.eventEmail = this.eventEmail.bind(this);
    this.eventContact = this.eventContact.bind(this);
    this.eventMessage = this.eventMessage.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      contact: "",
      message: "",
    };
  }

  // Event handlers
  eventName(event) {
    this.setState({ name: event.target.value });
  }

  eventEmail(event) {
    this.setState({ email: event.target.value });
  }

  eventContact(event) {
    this.setState({ contact: event.target.value });
  }

  eventMessage(event) {
    this.setState({ message: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.DATA = JSON.parse(localStorage.getItem("contact_form"));

    if (localStorage.getItem("contact_form")) {
      this.setState({
        name: this.DATA.name,
        email: this.DATA.email,
        contact: this.DATA.contact,
        message: this.DATA.message,
      });
    } else {
      this.setState({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("contact_form", JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="container">
        <p>
          <a href="#" className="text-denger">
            Add
          </a>{" "}
        </p>
        <p>
          <a href="this.DATA" className="text-denger">
            View
          </a>{" "}
        </p>

        <div className="bg-primary">Task showing values in local storage</div>
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group mb-3">
                <label>
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.eventName}
                />
              </div>
              <div className="form-group mb-3">
                <label>
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.eventEmail}
                />
              </div>
              <div className="form-group mb-3">
                <label>
                  <strong>Contact</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.contact}
                  onChange={this.eventContact}
                />
              </div>
              <div className="form-group mb-3">
                <label>
                  <strong>Message</strong>
                </label>
                <textarea
                  className="form-control"
                  value={this.state.message}
                  onChange={this.eventMessage}
                />
              </div>
              <div className="d-grid mt-3">
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
