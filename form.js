let arrofobj=[];
function run(){
    let id=document.querySelector('#id').value;
    let name=document.querySelector('#name').value;
    let email=document.querySelector('#email').value;
    let password=document.querySelector('#password').value;
    let contact=document.querySelector('#phone').value;
    console.log(name,email,password,contact);
    let obj={
        "id":id,
        "name":name,
        "email":email,
        "password":password,
        "contact":contact
    }
    arrofobj.push(obj);
    window.localStorage.setItem('information',JSON.stringify(arrofobj));
    console.log(arrofobj);

}