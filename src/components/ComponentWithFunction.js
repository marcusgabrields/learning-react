import React from 'react';


export default props => {
  const approved = ['Paula', 'Roberta', 'Gustavo', 'Gabriel'];

  const genItens = itens => {
    return itens.map(item => <li>{ item }</li>);
  }

  return (
    <ul>
      { genItens(approved) }
    </ul>
  );
}
