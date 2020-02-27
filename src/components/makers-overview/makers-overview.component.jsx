import React from 'react';

import './makers-overview.styles.scss';

import MakersCardItem from '../../components/makers-card-item/makers-card-item.component';

import CAR_DATA from '../../car.data';

const collections = CAR_DATA;

const MakersOverview = ({ match }) => {
    console.log(match.params.categoryId)
    return (
    <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <MakersCardItem key={id} {...otherCollectionProps} />
        ))}
    </div>
)};

export default MakersOverview;