// Form.js
import React from 'react';
import './PageStyles.css';

function Form() {
  return (
    <div className="page">
      <h2 className="page-title">Formulário</h2>
      <form id="survey-form">
        <label id="name-label">
          Digite seu Nome
          <input id="name" type="text" required placeholder="Nome" />
        </label>
        <label id="email-label">
          Digite seu Email
          <input id="email" type="email" required placeholder="Email" />
        </label>
        <label id="number-label">
          Digite um número de 0 à 10
          <input id="number" type="number" min="0" max="10" placeholder="Numero" />
        </label>
        <select id="dropdown">
          <option>Como vai você ?</option>
          <option>Triste</option>
          <option>Feliz</option>
        </select>
        {/* Adicione mais campos do formulário conforme necessário */}
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}

export default Form;
