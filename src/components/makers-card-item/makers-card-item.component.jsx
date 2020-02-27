import React from 'react';

import './makers-card-item.styles.scss';


const MakersCardItem = ({ logo, title, makerText, items }) => (
    <div  
        className='makers-card'
        style={{
            overflowY: "scroll",
            height: "480px"
        }}
    >
        <div className='header-title-container'>
            <h2 className='title'>{`${title}`}</h2>
        </div>
        <div className='header-container1'>
            <div
                className='image1'
                style={{
                    backgroundImage: `url(${logo})`
                }}
            />            
            <span className='text'>{`${makerText}`}</span>
        </div>
        <div className='content-card-container'>
            <div>
                <div className='subheader'>
                    <h3 className='subtitle'>models</h3>
                </div>
                <div className='models-window'>
                    {items.map(item => (
                        <div key={item.id} className='model-box-display'>
                            <img alt='car models' src={`${item.imageUrl}`} className='display-image' />
                            <h3 className='items-name'>{`${item.name}`}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default MakersCardItem;
