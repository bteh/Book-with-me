import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { RentalDetailInfo } from './RentalDetailInfo';
import { RentalMap } from './RentalMap';
import { Booking } from 'components/booking/booking';


class RentalDetail extends React.Component{
	
componentWillMount() {
	//Dispatch Action
	const rentalId = this.props.match.params.id;

	this.props.dispatch(actions.fetchRentalById(rentalId));
}
render(){

 const rental = this.props.rental;

 if(rental._id){
   return(
	<section id='rentalDetails'>
	  <div className='upper-section'>
	    <div className='row'>
	      <div className='col-md-6'>
	        <img src={rental.image} alt=''></img>
	      </div>
	      <div className='col-md-6'>
	      <RentalMap location={`${rental.city}, ${rental.street}`}/>
	   	    </div>
	    </div>
	  </div>

	  <div className='details-section'>
	    <div className='row'>
	      <div className='col-md-8'>
	      <RentalDetailInfo rental={rental}/>
	      </div>
	      <div className='col-md-4'> 
	      <Booking rental={rental} />
	      </div>
	    </div>
	  </div>
	</section>
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

