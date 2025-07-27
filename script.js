function sorry(){
alert("Sorry this feature is currently unavailable please try sending me an email from Gmail app or try Calling me. Thankyou");
}
function stop(){
return false;
}
/*function sendMail(e){
    e.preventDefault();
    const templateparams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };
    
    emailjs.sendForm('service_ia54eqa', 'template_jwca5xc', form.current, 'J1RMAIeSC1g77lTGm').then(
    (response) => {
      alert("Message send!", response.status, response.text);
},
(error) => {
alert('Something went wrong... try again later', error);
 },
);
}*/