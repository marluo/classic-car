import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./panel.styles.scss";

const Panel = () => {

  const sections = [
    {
      title: "ferrari",
      imageUrl: "https://i.imgur.com/oOQq2iX.jpg",
      id: 1
    },
    {
      title: "price-guide",
      imageUrl: "https://i.imgur.com/9rAZVrC.jpg",
      id: 2
    },
    {
      title: "healey",
      imageUrl: require("../img/Price-guide.png"),
      id: 3,
      size: 'large'
    }
  ];
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}

export default Panel;
