import React from "react";
import { ValidatorForm } from "react-form-validator-core";

import TextAreaValidator from "./TextAreaValidator";
import TextValidator from "./TextValidator";

import "./Contact.css";

const INITIAL_STATE = {
  disable: false,
  email: "",
  message: "",
  name: "",
  result: {
    message: "",
    status: "",
  },
};

class ContactForm extends React.Component {
  state = INITIAL_STATE;

  formRef = React.createRef();

  componentDidMount() {
    window.emailjs.init("user_OgoZVCfKZGiJ8eRWZtPLt");
  }

  handleChange = ({ currentTarget }) => {
    this.setState((state) => ({
      ...state,
      [currentTarget.name]: currentTarget.value,
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, message, name } = this.state;

    this.setState((state) => ({
      ...state,
      disable: true,
    }));

    try {
      await window.emailjs.send("mailgun", "jl7h924", {
        from_name: name,
        message_html: message,
        reply_to: email,
      });

      this.setState({
        ...INITIAL_STATE,
        disable: false,
        result: {
          message: "Message sent successfully, soon we will contact you",
          status: "success",
        },
      });
    } catch (error) {
      console.error(error);

      this.setState((state) => ({
        ...state,
        disable: false,
        result: {
          message: "Message could not be sent, try again",
          status: "error",
        },
      }));
    }
  };

  render() {
    const { disable, email, message, name, result } = this.state;

    return (
      <div className="contact" id="contact">
        <div className={`contact-result ${result.status}`}>
          {result.message}
        </div>
        <h4 className="contact-subtitle">Contact</h4>
        <ValidatorForm
          className="contact-form"
          id="contactForm"
          method="post"
          onSubmit={this.handleSubmit}
          ref={this.formRef}
        >
          <div className="form-group">
            <TextValidator
              className="form-control required"
              id="name"
              name="name"
              ref="name"
              value={name}
              placeholder="Name"
              type="text"
              required
              onChange={this.handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>
          <div className="form-group">
            <TextValidator
              className="form-control required"
              id="email"
              name="email"
              ref="email"
              value={email}
              placeholder="Email"
              type="email"
              required
              onChange={this.handleChange}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
          </div>
          <div className="form-group">
            <TextAreaValidator
              className="form-control required"
              id="message"
              name="message"
              ref="message"
              value={message}
              placeholder="Message"
              rows="5"
              required
              onChange={this.handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </div>
          <div className="form-group">
            <input
              className="form-send"
              disable={disable.toString()}
              type="submit"
              value="Send!"
            />
          </div>
        </ValidatorForm>
      </div>
    );
  }
}

export default ContactForm;
