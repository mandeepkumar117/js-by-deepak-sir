let arr=[{
    "id":1,
    "name":"mandeep",
    "email":"mandeep@123345gmail.com",
    "mobile":"9006970702",
    "password":"12334"
},
{
   "id":2,
    "name":"abhishekh",
    "email":"abhishekh@123345gmail.com",
    "mobile":"7991914911",
    "password":"12335" 
},
{
    "id":3,
    "name":"shaksham",
    "email":"shaksham@123345gmail.com",
    "mobile":"840793023",
    "password":"12335"
}
];
function login(){
    let username=document.querySelector('#username').value;
    let password=document.querySelector('#password').value;
    console.log(username,password);
    let response =arr.find(e=>e.email===username && e.password===password);
    if(response){
        window.alert("successfull");
        location.href="index.html";
    }
    else{
        window.alert("please register");
        location.href="regist.html";
    }
}