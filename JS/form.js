
function showTab(){
  const menu = document.querySelector('.header_top-bars')
  const menuBurger = document.querySelector('.header_top-burger')
  let check = false
  const nav = document.querySelector('.form_InOut');
  menu.addEventListener('click', () => {
    if(check == false){
      menu.classList.add('change')
      setTimeout(() => {
          menu.classList.add('X')
          nav.classList.add('show')
      },300)
      check = true
    }else{
      menu.classList.remove('X')
      setTimeout(() => {
          menu.classList.remove('change')
          nav.classList.remove('show')
      },300)
      check = false
    }
  })
}

function openForm(){
  const menu = document.querySelector('.header_top-bars')
  const LogIn = document.getElementById('login');
  const regis = document.getElementById('register');
  const overlay = document.getElementById('overlay');
  const Form = document.getElementById('form');
  const nav = document.querySelector('.form_InOut');
  LogIn.addEventListener('click', () => {
    Form.style.display = 'block';
    overlay.style.display = 'block';
    nav.classList.remove('show');
    menu.classList.remove('X')
  })
  regis.addEventListener('click',()=>{
    Form.style.display = 'block';
    overlay.style.display = 'block';
    nav.classList.remove('show');
    menu.classList.remove('X')
  })
  overlay.addEventListener('click', () => {
    Form.style.display = 'none';
    overlay.style.display = 'none';
  })

}
function passwordChanged(){
  const eyeClose = document.getElementById('eye_close');
  const eyeOpen = document.getElementById('eye_open');
  const Input = document.querySelector('.password');
  eyeClose.addEventListener('click', () =>{
    eyeClose.classList.add('eyeHandle');
    eyeOpen.classList.remove('eyeHandle');
    Input.type = 'text';
  })
  eyeOpen.addEventListener('click', () =>{
    eyeOpen.classList.add('eyeHandle');
    eyeClose.classList.remove('eyeHandle');
    Input.type = 'password';
  })
}

var x= document.getElementById("Formlogin");
var y= document.getElementById("Formregister");
var z= document.getElementById("btn-box");       
function register(){
        x.style.display="none";
        y.style.display="block";
        z.style.left="110px";
}    
    
function login(){
    x.style.display="block";
    y.style.display="none";
    z.style.left="0px";
}        

function callFunction(){
  showTab();
  openForm()
  passwordChanged();
  register();
  login();
}
callFunction()