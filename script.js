 function validation()
 {
     var form = document.getElementById("form");
     var email = document.getElementById("email").value;
     var text = document.getElementById("text");
     var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

     if (email.match(pattern))
     {
         form.classList.add("valid");
         form.classList.remove("invalid");
         text.innerHTML = "Your Email Address is valid";
         text.style.color = "#00ff00";
     }
     else
     {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please enter valid email address";
         text.style.color = "#ff0000";
     }
     if (email == "")
     {
         form.classList.remove("valid");
         form.classList.remove("invalid");
         text.innerHTML = "";
         text.style.color = "#00ff00";
        }
    }
    function pvalidation()
 {
    var form = document.getElementById("form");
     var Password = document.getElementById("Password").value;
     var psd = document.getElementById("psd");
     var spp =/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/;
     var mpp =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/;
 
     if (Password.match(spp))
     {
         form.classList.add("valid");
         form.classList.remove("invalid");
         psd.innerHTML = "Strong";
         psd.style.color = "#00ff00";
     }
     else if(Password.match(mpp))
     {
        form.classList.add("valid");
        form.classList.remove("invalid");
        psd.innerHTML = "Medium";
        psd.style.color = "#ff0000";
     }
     else     
     {
        form.classList.remove("valid");
        form.classList.add("invalid");
        psd.innerHTML = "Weak";
         psd.style.color = "#ff0000";
     }
    }