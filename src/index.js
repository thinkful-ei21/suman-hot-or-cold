import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Game />, 
document.getElementById('root'));
registerServiceWorker();


//create components and game.js in src 
//export default function game -- return all the html in the ciew source 
// break it up into different sections -- smaller components 
//get the functionality running 
//get all the css from style sheet and paste in it index.css