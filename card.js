let card_data =[{
    "id":1,
    "pname":"shoes",
    "pprice":"999",
    "pbrand":"abros",
    "pimage":"https://m.media-amazon.com/images/I/71cflgAolqL._SY535_.jpg"
},
{
    "id":2,
    "pname":"shoes",
    "pprice":"999",
    "pbrand":"abros",
    "pimage":"https://m.media-amazon.com/images/I/71cflgAolqL._SY535_.jpg"
},{
    "id":3,
    "pname":"shoes",
    "pprice":"999",
    "pbrand":"abros",
    "pimage":"https://m.media-amazon.com/images/I/71cflgAolqL._SY535_.jpg"
},
{
    "id":4,
    "pname":"shoes",
    "pprice":"999",
    "pbrand":"abros",
    "pimage":"https://m.media-amazon.com/images/I/71cflgAolqL._SY535_.jpg"
},
{
    "id":5,
    "pname":"shoes",
    "pprice":"999",
    "pbrand":"abros",
    "pimage":"https://m.media-amazon.com/images/I/71cflgAolqL._SY535_.jpg"
},
{
    "id":6,
    "pname":"shoes",
    "pprice":"999",
    "pbrand":"abros",
    "pimage":"https://m.media-amazon.com/images/I/71cflgAolqL._SY535_.jpg"
},
{
    "id":7,
    "pname":"shoes",
    "pprice":"999",
    "pbrand":"abros",
    "pimage":"https://m.media-amazon.com/images/I/71cflgAolqL._SY535_.jpg"
}
,{
    "id":8,
    "pname":"shoes",
    "pprice":"999",
    "pbrand":"abros",
    "pimage":"https://m.media-amazon.com/images/I/71cflgAolqL._SY535_.jpg"
},
{
    "id":9,
    "pname":"shoes",
    "pprice":"999",
    "pbrand":"abros",
    "pimage":"https://m.media-amazon.com/images/I/71cflgAolqL._SY535_.jpg"
},
{
    "id":10,
    "pname":"shoes",
    "pprice":"999",
    "pbrand":"abros",
    "pimage":"https://m.media-amazon.com/images/I/71cflgAolqL._SY535_.jpg"
}
];
let store = document.querySelector('#show_card');
store.innerHTML=card_data.map(items=>`
    <div id="card">
        <img width="300px" height="300px" src="${items.pimage}" alt="">
        <div>${items.pname}</div>
        <div>${items.pbrand}</div>
        <div>${items.pprice}</div>
    </div>
    `).join(" ")