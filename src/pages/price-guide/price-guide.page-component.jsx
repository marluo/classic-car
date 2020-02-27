import React from "react";
import { withRouter } from 'react-router-dom';

import DirectoryMaker from "../../components/directory-maker/directory-maker.component";

import "./price-guide.styles.scss";



const PriceGuidePage = ({ currentUser }) => {
  return (
    <div>
      <div className="page-container" to="/guide" >
        <DirectoryMaker />
      </div>
    </div>
  )   
};  

export default withRouter(PriceGuidePage);