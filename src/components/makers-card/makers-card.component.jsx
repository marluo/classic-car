import React from 'react';

import './makers-card.styles.scss';

import MakersCardItem from '../makers-card-item/makers-card-item.component';

const MakersCard = ({ collections }) => (
    <div className='makers-card'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <MakersCardItem key={id} {...otherCollectionProps} />
        ))}
    </div>
)

export default MakersCard;