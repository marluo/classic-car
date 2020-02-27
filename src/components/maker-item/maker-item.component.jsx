import React from "react";
import { withRouter } from 'react-router-dom';

import "./maker-item.styles.scss";

const MakerItem = ({ title, imgUrl, history, linkUrl, match }) => {
  return (
    <div 
      className="maker-item" 
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-logo"
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      />
      <div className="content-maker">
        <h1 className='title'>{title.toUpperCase()}</h1>
      </div>
    </div>
  );
}

export default withRouter(MakerItem);
