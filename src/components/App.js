import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleFindPetsClick = this.handleFindPetsClick.bind(this);
    this.handleAdoptPet = this.handleAdoptPet.bind(this);

  }

  handleChangeType( type ) {
    this.setState( {filters: {type: type}} );
  }

  handleFindPetsClick() {
    let url = '/api/pets';


  }

  handleAdoptPet( petId ) {
    this.setState( {adoptedPets: [...this.state.adoptedPets, petId]} );
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters  filters={this.state.filters} onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
