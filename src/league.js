import React from 'react';

function League(props) {
    return (
        <div>
            <ul>
                <li>champions league</li>
                <li>world cup</li>
                <li>{props.name}</li>
            </ul>
        </div>
    )
}

export default League;