import React, { Component } from 'react'
import '../Form.css'

export class FormSignUp extends Component {
  
  render() {
    const { onchange, values, onblur, entermouse, onsubmit, onclear } = this.props;

    const brazilianState = ["AC", "AL", "AM", "AP", "BA", "CE", 
    "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", 
    "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

    return (
      <div className="signup-container">
      <form className="signup-form">
      <fieldset className="fieldset-inputs">
      <h3 className="form-title">Informações pessoais</h3>
      <p className="form-subtitle">Preencha os campos abaixo com as suas informações pessoais</p>
      <div className="form-input">
      <label htmlFor="name">
        Nome
      </label>
      <input 
        className="personal-input"
        name="name"
        type="text"
        maxLength="40"
        value={values.name}
        onChange={onchange}
        required>
      </input>
      </div>
      <div className="form-input">
      <label htmlFor="email">
        Email
      </label>
      <input 
        className="personal-input"
        name="email"
        type="email"
        maxLength="50"
        value={values.email}
        onChange={onchange}
        required>
      </input>
      </div>
      <div className="form-input">
      <label htmlFor="email">
        Cpf
      </label>
      <input 
        className="personal-input"
        name="cpf"
        type="text"
        maxLength="11"
        value={values.cpf}
        onChange={onchange}
        required>
      </input>
      </div>
      <div className="form-input">
      <label htmlFor="address">
        Endereço
      </label>
      <input 
        className="personal-input"
        name="address"
        type="text"
        maxLength="200"
        value={values.address}
        onChange={onchange}
        required>
      </input>
      </div>
      <div className="form-input">
      <label htmlFor="city">
        Cidade
      </label>
      <input 
        className="personal-input"
        name="city"
        type="text"
        maxLength="200"
        value={values.city}
        onChange={onchange}
        onBlur={onblur}
        required>
      </input>
      </div>
      <div className="form-input">
      <label htmlFor="city">
        Estado
      </label>
      <select
        className="personal-input"
        name="state"
        value={values.state}
        onChange={onchange}
        required>
          {brazilianState.map((state) => 
          <option key={state} value={ state }>{ state }</option>)}
      </select>
      </div>
      <div className="form-input">
      <label htmlFor="home">
        Tipo de residência
      </label>
        <div 
        className="home-type"
        onChange={onchange}
        value={values.home}> 
          <input 
            type="radio" 
            value="house"
            name="home" 
          /> Casa
          <input 
            type="radio" 
            value="apartment" 
            name="home" 
          /> Apartamento
        </div>
      </div>
      </fieldset>
      <br />
      <br />
      <fieldset className="fieldset-inputs">
       <h3 className="form-title">Informações profissionais</h3>
       <p className="form-subtitle">Preencha os campos abaixo com as suas informações profissionais</p>
       <div className="form-input">
       <label htmlFor="resume">
         Resumo do currículo
       </label>
       <textarea
         className="personal-input"
         name="resume"
         maxLength="1000"
         onChange={onchange}
         value={values.resume}
         required
       />
       </div>
       <div className="form-input">
       <label htmlFor="job">
         Nome do cargo
       </label>
       <textarea
         className="personal-input"
         name="job"
         maxLength="40"
         onChange={onchange}
         value={values.job}
         onMouseOver={entermouse}
         required
       />
       </div>
       <div className="form-input">
       <label htmlFor="email">
         Descrição do cargo
       </label>
       <input 
         className="personal-input"
         name="description"
         type="text"
         maxLength="500"
         onChange={onchange}
         value={values.description}
         required
       />
       </div>
      </fieldset>
      <br />
      <br />
      <div className="buttons-wrapper">
      <input
      className="submit-button"
      type="button"
      onClick={onsubmit}
      value="Submit">
      </input>
      <input
      className="clear-button"
      type="button"
      onClick={onclear}
      value="Clear">
      </input>
      </div>
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.listAddReducer.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: (state) => dispatch(newAction(state))});

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp)
