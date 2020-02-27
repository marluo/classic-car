import React from 'react';

import './makers-card-price.styles.scss';

import Toggle from '../toggle/toggle.component';

const MakersCardPrice = ({ items }) => {
    return (
        <div className='makers-card-display-container'>
            {items.map(item => (
                <div
                    className='models-display'
                    key={item.id}
                >
                    <div className='hide' >
                        <div className='tables'>
                            <h4 className='table-subtitle'>price guide</h4>
                        </div>
                        <Toggle>
                            <div className='sheet' id='price'>
                                <div className='data'>
                                    <div className='spec-row'>
                                        <span className='box'>Launch Price</span><div className='box1'>{`${item.PriceGuide.LaunchPrice}`}</div>
                                    </div>
                                    <div className='spec-row'>
                                        <span className='box'>Excellent</span><div className='box1'>{`${item.PriceGuide.Excellent}`}</div>
                                    </div>
                                    <div className='spec-row'>
                                        <span className='box'>Good</span><div className='box1'>{`${item.PriceGuide.Good}`}</div>
                                    </div>
                                    <div className='spec-row'>
                                        <span className='box'>Average</span><div className='box1'>{`${item.PriceGuide.Average}`}</div>
                                    </div>
                                    <div className='spec-row'>
                                        <span className='box'>Project</span><div className='box1'>{`${item.PriceGuide.Project}`}</div>
                                    </div>
                                </div>
                            </div>
                        </Toggle>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MakersCardPrice;