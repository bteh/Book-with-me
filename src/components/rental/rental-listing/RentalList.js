import React, { Component } from 'react';
import { RentalCard } from './RentalCard'


export class RentalList extends Component{

  
  //function to iterate through rental listing
    renderRental(){
    	// rentals is accessible as props from store
    	return this.props.rentals.map((rental,index) => {
    		return (
    			<RentalCard 
    			key={index} 
    			colNum='col-md-3 col-xs-6' 
    			rental={rental}/>
    		)
    	});
    }


	render(){
		return(
		    <div className='row'>
		      {this.renderRental()}
		    </div>
		)
	}
}

