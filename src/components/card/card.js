import React from 'react';

import './card.css';

export const Card = props => (
    <div className='card-container'>
      <img
        height='180'
        width='250'
        alt='restaurant'
        
         src={props.restaurant.image}
      />
      <h2> {props.restaurant.name} </h2>

      <p> Description : {props.restaurant.description} </p>
      
      {/* following fields no so performance for production though 
          just love to challange myself to harder task rather than 
          avoiding them all together lol but quick fix for te purpose 
          of the assignment given time constraint. great challange!*/}
      <p> 
          Our delivery prices : 
          <b><br></br>
          {props.restaurant.delivery_price.toString()[0]}.
          {props.restaurant.delivery_price.toString()[1]}
          {props.restaurant.delivery_price.toString()[2]}€ 
          </b>
      </p>
      
      <p> Tags : {props.restaurant.tags[0]} , {props.restaurant.tags[1]} </p>
     
    </div>
  );