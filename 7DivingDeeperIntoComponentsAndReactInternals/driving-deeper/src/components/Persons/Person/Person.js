import React, { Component } from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

import classes from "./Person.module.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    //document.querySelector("input").focus();
    //this.inputEl.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] renderind...");
    return (
      <Aux>
        {/* <AuthContext.Consumer> */}
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please Log In</p>
        )}
        {/* </AuthContext.Consumer> */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {this.inputEl = inputEl;}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
