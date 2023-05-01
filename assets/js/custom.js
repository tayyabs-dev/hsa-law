const navToggeler = document.querySelector(".navbar-toggler-icon");
const smNav = document.querySelector(".sm-nav-menu");
const navClose = document.querySelector('.close')

const showNav = () => {
    smNav.style.display = "block"
    smNav.style.width = "100vw"
    smNav.style.height = "100vh"
    // smNav.style.transition = "ease-in 0.5s"
}
navToggeler.addEventListener("click", showNav);


const closeNavMenu = () => {
    // smNav.style.width = '0px'
    smNav.style.display = 'none'
}
navClose.addEventListener("click", closeNavMenu)



// slider for mobile view

$(document).ready(function(){
    $('.slider-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,
        arrows : true
    });
  });
$(document).ready(function(){
    $('.hero-slider').slick({
        slidesToShow: 1,
        autoplay : true,
        fade : true,
        speed : 900,
        slidesToScroll: 1,
        // dots: true,
        arrows : true
    });
  });

// login form 

function formController(){




// nav menu login button 
var loginButton = document.querySelector(".nav-login");
var loginForm = document.querySelector(".log-in-form");

// displays main login form
loginButton.addEventListener('click', function(){
    loginForm.style.display = 'flex' , 'important';
});

// close login form
var loginFormClose = document.querySelector(".login-form-close");
loginFormClose.addEventListener('click', function(event){
    event.preventDefault()
    loginForm.style.display = 'none' , 'important'
})





// sign up form
var signUpForm = document.querySelector(".sign-up-form");
var regiserBtn = document.querySelector(".register");
regiserBtn.addEventListener('click', function(event){
    event.preventDefault();
    signUpForm.style.display = 'flex', 'important'
    loginForm.style.display = 'none'
});

// sign up form close
var signupFormClose = document.querySelector(".signup-form-close");
signupFormClose.addEventListener('click', function(event){
    event.preventDefault()
    signUpForm.style.display = 'none' , 'important'
});

// forget password form display
var passwordResetForm = document.querySelector(".forget-password-form");
var resetBtn = document.querySelector(".forget");
resetBtn.addEventListener('click', function(event){
    event.preventDefault();
    passwordResetForm.style.display = 'flex', 'important'
    loginForm.style.display ='none'
    signUpForm.style.display ='none'

});

// forget password form close
var resetFormClose = document.querySelector(".reset-form-close");
resetFormClose.addEventListener('click', function(){
    // event.preventDefault()
    passwordResetForm.style.display = 'none' 
});

// register form to sign in form 
var signUpIn = document.querySelector(".sign-in-2");
signUpIn.addEventListener('click', function(event){
    event.preventDefault();
    loginForm.style.display = 'flex';
    signUpForm.style.display = 'none';
})

}
formController();



