import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class RentalDetail extends React.Component{
	
componentWillMount() {
	//Dispatch Action
	const rentalId = this.props.match.params.id;

	this.props.dispatch(actions.fetchRentalById(rentalId));
}
render(){

 const rental = this.props.rental;

 if(rental.id){
   return(
	 	<div>
	 	<h1> {rental.title} </h1>
	 	<h1> {rental.city} </h1>
	 	<h1> {rental.description} </h1>
	 	<h1> {rental.dailyRate} </h1>
	   </div>
 	 )
    } else{
    	return(
	      <h1> Loading </h1>
		)
    }
  }
}


const mapStateToProps = (state) => {
	return {
		rental: state.rental.data
	}
}

// connects the function to provide the state to the Rental List from App.js
export default connect(mapStateToProps)(RentalDetail)

