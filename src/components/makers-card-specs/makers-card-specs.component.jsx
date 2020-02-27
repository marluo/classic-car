import React from 'react';


const MakersCardSpecs = ({ items }) => {
    return (
        <div className='makers-card-display-container'>
            {items.map(item => (
                <div
                    className='models-display'
                    key={item.id}
                >
                    <div className='hide'>
                        <div className='tables'>
                            <h4 className='table-subtitle'>specifications</h4>
                        </div>
                            <div className='sheet' id='specs'>
                                <div className='data'>
                                    <div className='spec-row'>
                                        <span className='box'>Years Produced</span><div className='box1'>{`${item.specifications.YearsProduced}`}</div>
                                    </div>
                                    <div className='spec-row'>
                                        <span className='box'>Performance</span><div className='box1'>{`${item.specifications.Perfomance}`}</div>
                                    </div>
                                    <div className='spec-row'>
                                        <span className='box'>Power & torque</span><div className='box1'>{`${item.specifications.PowerAndtorque}`}</div>
                                    </div>
                                    <div className='spec-row'>
                                        <span className='box'>Engine</span><div className='box1'>{`${item.specifications.Engine}`}</div>
                                    </div>
                                    <div className='spec-row'>
                                        <span className='box'>Drivetrain</span><div className='box1'>{`${item.specifications.Drivetrain}`}</div>
                                    </div>
                                    <div className='spec-row'>
                                        <span className='box'>Structure</span><div className='box1'>{`${item.specifications.Structure}`}</div>
                                    </div>
                                    <div className='spec-row'>
                                        <span className='box'>Transmission</span><div className='box1'>{`${item.specifications.Transmission}`}</div>
                                    </div>
                                    <div className='spec-row'>
                                        <span className='box'>Weight</span><div className='box1'>{`${item.specifications.Weight}`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default MakersCardSpecs;
