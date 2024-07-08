document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Zabráníme výchozímu odeslání formuláře
  
    if (this.checkValidity()) { // Ověříme, zda jsou všechna required pole validní
      let parameters = {
        email: document.getElementById("contact-email").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value,
      };
  
      emailjs.send("service_nj1i7d6", "template_enby3lq", parameters)
        .then(function(response) {
          alert("Email byl poslán");
  
          // Vyprázdníme formulářová pole po úspěšném odeslání
          document.getElementById("contact-email").value = "";
          document.getElementById("contact-subject").value = "";
          document.getElementById("contact-message").value = "";
        }, function(error) {
          console.log("FAILED...", error);
        });
    } else {
      // Prohlížeč zobrazí výchozí upozornění na nevyplněná pole
    }
  });
  