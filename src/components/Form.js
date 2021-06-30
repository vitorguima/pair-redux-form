import React, { Component } from 'react'
import FormSignUp from './FormSignUp';
import RenderFields from './RenderFields';


export default class Form extends Component {
  updateState(name, value) {

    this.setState(() => ({
      [name]: value,
    }))
  }

  handlerChanger({ target }) {
    let { name, value } = target;

    if (name === 'name') {
      value = value.toUpperCase()
    }
    
    this.updateState(name, value);
  }

  handlerBlur({ target }) {
    let { name, value } = target;

    if (name === 'city' && value.match(/^\d/)) {
      value = '';
    }

    this.updateState(name, value);
  }

  handleMouseEnter({ target }) {
    let { name } = target;
    let enter = this.state.enter;

    if (name === 'job' && enter === 'false') {
      window.alert('Preencha com cuidado esta informação.');
    }

    this.updateState('enter', 'true')
  }

  handlerSubmit() {
    this.updateState('submition', 'true');
  }

  handlerClear() {
    this.setState(INITIAL_STATE);
  }

  render() {
    console.log(this.state);
    return (
      <div>
      <FormSignUp />
      {this.state.submition === 'true' ? <RenderFields values={ this.state } /> : ''}
      </div>
    )
  }
}
