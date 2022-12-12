const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");



    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=> {
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password") {
                    pwField.type = "text";

                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })
        })
    })




		form.addEventListener('submit', e => {
		    e.preventDefault();

		    validateInputs();
		});

		const setError = (element, message) => {
		    const inputField = element.parentElement;
		    const errorDisplay = inputField.querySelector('.error');

		    errorDisplay.innerText = message;
		    inputField.classList.add('error');
		    inputField.classList.remove('success')
		}

		const setSuccess = element => {
		    const inputField = element.parentElement;
		    const errorDisplay = inputField.querySelector('.error');

		    errorDisplay.innerText = '';
		    inputField.classList.add('success');
		    inputField.classList.remove('error');
		};

		const isValidEmail = email => {
		    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(String(email).toLowerCase());
		}

		const validateInputs = () => {
		    const emailValue = email.value.trim();
		    const passwordValue = password.value.trim();

		    if(emailValue === '') {
		        setError(email, 'Email is required');
		    } else if (!isValidEmail(emailValue)) {
		        setError(email, 'Provide a valid email address');
		    } else {
		        setSuccess(email);
		    }


		    if(passwordValue === '') {
		        setError(password, 'Password is required');
		    } else if (passwordValue.length < 8 ) {
		        setError(password, 'Password must be at least 8 character.')
		    } else {
		        setSuccess(password);
		    }


		};
