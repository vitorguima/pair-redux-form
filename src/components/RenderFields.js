import React, { Component } from 'react'

export default class RenderFields extends Component {
  render() {
    const { values } = this.props;
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      home,
      resume,
      job,
      description,
    } = values;

    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: {name}</div>
        <div> Email: {email}</div>
        <div> CPF: {cpf}</div>
        <div> Endereço: {address}</div>
        <div> Cidade: {city}</div>
        <div> Estado: {state}</div>
        <div> Tipo de residência: {home}</div>
        <h3>Profissional</h3>
        <div> Currículo: {resume}</div>
        <div> Cargo: {job}</div>
        <div> Descrição do cargo: {description}</div>
      </div>
    )
  }
}
