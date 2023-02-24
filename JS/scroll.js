// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const button = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
  
  // When the user clicks the button, smoothly scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
  }
  









/*Toogle light theme*/
//Dark Mode
const toggleSwitch = document.querySelector('.theme-switch input[type = "checkbox"]');
const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
    }
}

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('click', switchTheme);