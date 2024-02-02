const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Local storage save logic

// register logic
let regusername  = document.getElementById("input-reg-name")
let regusermail = document.getElementById("input-reg-mail")
let reguserpassword = document.getElementById("input-reg-password")

let formsignupbtn = document.getElementById("signup-form")
let saved = false

formsignupbtn.addEventListener("click", function(){
	if (regusername.value != "" && regusermail.value != "" && reguserpassword.value != "") {
		localStorage.setItem("UserName", regusername.value)
		localStorage.setItem("UserMail", regusermail.value)
		localStorage.setItem("UserPassword", reguserpassword.value)
		regusername.value = ""
		regusermail.value = ""
		reguserpassword.value = ""
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "Your work has been saved",
			showConfirmButton: false,
			timer: 1500
		  });
	}
})

console.log(localStorage.getItem("UserMail"));

//Login logic

let formsigninbtn = document.getElementById("signin-btn")
let loginemailinput = document.getElementById("login-email")
let loginpasswordinput = document.getElementById("login-passowrd")

formsigninbtn.addEventListener("click", function(){
	if (loginemailinput.value === localStorage.getItem("UserMail") && loginpasswordinput.value === localStorage.getItem("UserPassword")) {
		localStorage.setItem("Logined", "ki")
		Swal.fire({
			title: "Success Login!",
			text: "Please click back button, sorry for our error",
			icon: "success"
		  });
		loginemailinput.value = ""
		loginpasswordinput.value = ""
	} else {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Email or Password is not Correct!",
			footer: '<a href="#">Why do I have this issue?</a>'
		  });
	}
	
	if (localStorage.getItem("Logined") === true) {

	}
}) 