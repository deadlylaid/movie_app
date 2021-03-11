import React from 'react';
import League from './league';

function Status(props) {
    return (
        <ul>
            <li>Goal : 40</li>
            <li>Assist : 20</li>
        </ul>
    )
}

function Player(props) {
    return (
        <div>
            <h1>Player: {props.name}</h1>
            <Status />
        </div>
   
    )
}

function App() {
    return (
        <div>
            <League name='La Liga'/>
            <h1>Football</h1>
            <Player name="Messi" />
        </div>
    )
}

export default App;