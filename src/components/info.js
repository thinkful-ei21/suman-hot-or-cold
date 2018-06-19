import React from 'react';
import './info.css'
export default (props) => {
  const {color,content} = props;
return (
  <div className={`InfoContainer ${color}`}>
    <span>{content}</span>
  </div>
);
}