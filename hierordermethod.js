function run(){
    let arr=[23,32,45,54,67,76,342];
    // arr.map(e=>{console.log(e%2)});
    // arr.map(d=>{window.alert(d)});

let store=arr.map(e=>{return e*2}).join(" ");
document.querySelector("#output").innerHTML=store;
document.querySelector("#output1").innerHTML=store;

}