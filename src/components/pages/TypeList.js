import React from 'react';

const TypeList = props => {
  console.log(props.typelist);

  return props.typelist.map(type => (
    <div>
      <p>{type.name}</p>
    </div>
  ));
};

export default TypeList;
