import React from 'react';
import Nav from './navigation-bar';
import Info from './info';
import './game.css';

const links = [{
  text: 'WHAT?',
  href: 'WHAT?'
},{
  text: '+NEWGAME',
  href: '+NEWGAME'
}];

export default class Game extends React.Component{
  render(){
    return (
    <div className="rootContainer">
      <Nav links={links}/>
      <h1>HOT or COLD</h1>   
      <div>
        <Info color="red" content="Make your Guess!"></Info>
        
        <Info color="cyan" content=""></Info>      
      </div>         
    </div>);
  }
}

/*380 X 72 */