import React, { Component } from "react";
import { connect } from "react-redux";
import FormSignUp from "./FormSignUp";
import RenderFields from "./RenderFields";

class Form extends Component {
  handlerBlur({ target }) {
    let { name, value } = target;

    if (name === "city" && value.match(/^\d/)) {
      value = "";
    }

    this.updateState(name, value);
  }

  handleMouseEnter({ target }) {
    let { name } = target;
    let enter = this.state.enter;

    if (name === "job" && enter === "false") {
      window.alert("Preencha com cuidado esta informação.");
    }

    this.updateState("enter", "true");
  }

  render() {
    const { submition } = this.props;
    return (
      <div>
        <FormSignUp />
        {submition ? <RenderFields /> : ""}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  submition: state.formReducer.submition,
});

export default connect(mapStateToProps, null)(Form);
