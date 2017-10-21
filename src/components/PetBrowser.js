import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    // const pets = this.props.pets.map(pet => <Pet onAdoptPet={this.props.onAdoptPet} isAdopted={this.adopted(pet)}/>)
    //
    const pets = this.props.pets.map((pet, index) => (
     <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    ));

    return (
      <div className="ui cards">
        //<code>&lt;Pet /&gt;</code> &nbsp; components should go here
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
