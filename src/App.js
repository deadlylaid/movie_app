import React from 'react';

function Food({fav}) {
    return (
        <h1>I Like {fav}</h1>
    )
}

function App() {
    return (
        <div>
            <h1>Foods</h1>
            <Food fav="kimchi" />
            <Food fav="ramen" />
            <Food fav="bab" />
            <Food fav="hotba" />
        </div>
    )
}

export default App;