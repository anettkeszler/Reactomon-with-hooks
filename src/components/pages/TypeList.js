import React from 'react';

const TypeList = props => {
  console.log('typelist', props.typelist);

  return props.typelist.map(type => (
    <div style={typeStyle}>
      <p>{type.name}</p>
    </div>
  ));
};

const typeStyle = {
  width: '80px',
  height: '40px',
  border: 'solid black 1px',
  borderRadius: '9px',
  backgroundColor: 'rgba(252, 219, 3)',
  textAlign: 'center',
  padding: '5px',
  margin: '15px',
};

export default TypeList;
