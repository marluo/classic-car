import React from 'react';
import { Route, withRouter } from 'react-router-dom';
 
import './makerspage.styles.scss';

import MakersOverview from '../../components/makers-overview/makers-overview.component';
import MakersCardDisplay from '../../components/makers-card-display/makers-card-display.component';


const MakersPage = ({ match }) => {
    console.log(match);
    return (
    <div className='makers-page'>
        <Route exact path={`${match.path}`} component={MakersOverview} />  
        <Route path={`${match.path}/:categoryId`} component={MakersCardDisplay} />      
    </div>
)};

export default withRouter(MakersPage);