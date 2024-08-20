let card_data=[{
    "albumid":1,
    "parag":"Obstruct Pro Mid Unisex Trail Running Shoes",
    "id":1,
    "title":"Running shoes",
    "pimage":"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378689/01/mod02/fnd/IND/fmt/png/Obstruct-Pro-Mid-Unisex-Trail-Running-Shoes"
},
{
    "albumid":2,
    "parag":"Mercedes AMG Petronas F1 Drift Cat Decima Unisex Sneakers",
    "id":2,
    "title":"Running shoes",
    "pimage":"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/307196/06/mod02/fnd/AUS/fmt/png/Mercedes-AMG-Petronas-F1-Drift-Cat-Decima-Unisex-Sneakers"
},
{
    "albumid":3,
    "parag":"R78 Unisex Sneakers",
    "id":3,
    "title":"Running shoes",
    "pimage":"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374127/01/sv04/fnd/AUS/fmt/png/R78-Unisex-Sneakers"
},
{
    "albumid":4,
    "parag":"Incinerate Unisex Running Shoes",
    "id":4,
    "title":"Running shoes",
    "pimage":"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376288/06/sv04/fnd/IDN/fmt/png/Incinerate-Unisex-Running-Shoes"
},
{
    "albumid":5,
    "parag":"Anzarun 2.0 Unisex Sneakers",
    "id":5,
    "title":"Running shoes",
    "pimage":"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/389213/01/dt04/fnd/AUS/fmt/png/Anzarun-2.0-Unisex-Sneakers"
},
{
    "albumid":6,
    "parag":"Anzarun 2.0 Unisex Sneakers",
    "id":6,
    "title":"Running shoes",
    "pimage":"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/389213/01/fnd/AUS/fmt/png/Anzarun-2.0-Unisex-Sneakers"
},
{
    "albumid":7,
    "parag":"Leather Plain Boots",
    "id":7,
    "title":"Running shoes",
    "pimage":"https://asset1.cxnmarksandspencer.com/is/image/mands/OD_01_T02_1256K_Y0_X_EC_0?$PDP_INT_IMAGE_MOBILE_DOUBLE$"
},
{
    "albumid":8,
    "parag":"Velour Wide Leg Joggers",
    "id":8,
    "title":"Running shoes",
    "pimage":"https://asset1.cxnmarksandspencer.com/is/image/mands/OD_01_T57_7155V_DQ_X_EC_0?$PDP_INT_IMAGE_MOBILE_DOUBLE$"
},
{
    "albumid":9,
    "parag":"RS 3.0 Suede Unisex Sneakers",
    "id":9,
    "title":"Running shoes",
    "pimage":"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/392773/04/sv04/fnd/IND/fmt/png/RS-3.0-Suede-Unisex-Sneakers"
},
{
    "albumid":10,
    "parag":"MB.02 Lo Unisex Basketball Shoes",
    "id":10,
    "title":"Running shoes",
    "pimage":"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377766/04/sv04/fnd/AUS/fmt/png/MB.02-Lo-Unisex-Basketball-Shoes"
}
];
let store=document.querySelector('#show_card');
store.innerHTML=card_data.map(items=>`
    <div id="card">
       <div>${items.albumid}</div>
       <div>${items.parag}</div>
       <img width="300px" height="300px" src="${items.pimage}" alt="">
       <div>${items.id}</div>
       <div>${items.title}</div>
      
    </div>
    `).join(" ");