function fnvalidation()
 {
     var form = document.getElementById("form");
     var first = document.getElementById("first").value;
     var fname = document.getElementById("fname");
     var pattern = /^([A-Za-z. ']+)$/;

     if (first.match(pattern))
     {
         form.classList.add("valid");
         form.classList.remove("invalid");
         fname.innerHTML = "";
         fname.style.color = "#00ff00";
     }
     else
     {
        form.classList.remove("valid");
        form.classList.add("invalid");
        fname.innerHTML = "Please enter Name";
        fname.style.color = "#ff0000";
     }
    }
    function lnvalidation()
 {
     var form = document.getElementById("form");
     var last = document.getElementById("last").value;
     var lname = document.getElementById("lname");
     var pattern = /^([A-ZÀ-ÿ][-,a-z. ']+)$/;

     if (last.match(pattern))
     {
         form.classList.add("valid");
         form.classList.remove("invalid");
         lname.innerHTML = "";
         lname.style.color = "#00ff00";
     }
     else
     {
        form.classList.remove("valid");
        form.classList.add("invalid");
        lname.innerHTML = "Please enter Name";
        lname.style.color = "#ff0000";
     }
    }
  function evalidation()
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
    function pnvalidation()
 {
     var form = document.getElementById("form");
     var phone = document.getElementById("phone").value;
     var pno = document.getElementById("pno");
     var pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

     if (phone.match(pattern))
     {
         form.classList.add("valid");
         form.classList.remove("invalid");
         pno.innerHTML = "";
         pno.style.color = "#00ff00";
     }
     else
     {
        form.classList.remove("valid");
        form.classList.add("invalid");
        pno.innerHTML = "Please enter valid Phone number";
        pno.style.color = "#ff0000";
     }
    }
    function pvalidation()
 {
    var form = document.getElementById("form");
     var Password = document.getElementById("Password").value;
     var psd = document.getElementById("psd");
     var mpp =/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))$/;
     var spp =/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/;
     
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
        psd.style.color = "#ffea00";
     }
     else     
     {
        form.classList.remove("valid");
        form.classList.add("invalid");
        psd.innerHTML = "Weak";
         psd.style.color = "#ff0000";
     }
    }