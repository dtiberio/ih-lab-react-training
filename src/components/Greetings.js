import React from 'react';
import './Greetings.css';

function Greetings(props) {
  const { lang } = props;
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };
  const greeting = greetings[lang];
  return (
    <div className="greetings">
      {greeting} {props.children}
    </div>
  );
}

export default Greetings;
