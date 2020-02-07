import React from 'react';

import { Card } from '../card/card';

import './card-list.css';

export const CardList = props => (
    <div className='card-list'>
      {props.restaurants.map(restaurant => (
        <Card key={restaurant.blurhash} restaurant={restaurant} />
      ))}
    </div>
);