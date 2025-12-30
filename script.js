function sendEmail(){
    const templateParams={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        message:document.querySelector("#message").value,
    };

    emailjs
    .send("service_a4mf2vf","template_j3nugh6",templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);
}