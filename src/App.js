import React from 'react';

function Food({name, image}) {
    return (
        <div>
        <h1>I Like {name}</h1>
        <img src={image} alt=""/>
        </div>
    )
}


const foodArray = [
    {
        'name': '짜장면',
        'img': 'http://ojsfile.ohmynews.com/STD_IMG_FILE/2016/1214/IE002069160_STD.jpg'
    },
    {
        'name': '국밥',
        'img': 'https://bit.ly/3qAFypB'
    },
    {
        'name': '라면',
        'img': 'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg'
    }
]

function App() {
    return (
        <div>
            <h1>Foods</h1>
            {foodArray.map(dish => <Food name={dish.name} image={dish.img} />)}
        </div>
    )
}

export default App;