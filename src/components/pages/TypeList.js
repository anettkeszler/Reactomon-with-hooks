import React from 'react';

class TypeList extends React.Component {
  constructor(props) {
    super(props);
    console.log('TypeList page created...');
  }

  render() {
    console.log(this.props.typelist);

    return this.props.typelist.map(type => (
      <div>
        <p>{type.name}</p>
      </div>
    ));
  }
}

export default TypeList;
