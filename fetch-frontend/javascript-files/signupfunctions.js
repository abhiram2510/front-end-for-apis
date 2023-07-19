/*var password = document.getElementById('password');
var toggler = document.getElementById('eye');
showHidePassword = () => {
if (password.type == 'password') {
password.setAttribute('type', 'text');
toggler.classList.add('fa-eye-slash');
} else {
toggler.classList.remove('fa-eye-slash');
password.setAttribute('type', 'password');
}
};
toggler.addEventListener('click', showHidePassword);*/

async function submitData() {
  try {
    let firstname = document.getElementById("first_name").value;
    let lastname = document.getElementById("last_name").value;
    var check = document.getElementsByName("gender");
    for (i = 0; i < check.length; i++) {
      if (check[i].checked) {
        var gender = check[i].value;
      }
    }
    let bdate = document.getElementById("birthdate").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let input = {
      first_name: firstname,
      last_name: lastname,
      gender: gender,
      b_date: bdate,
      dept_id: 1,
      username: email,
      pass: pass,
    };
    await fetch("http://localhost:3000/api/v1/signUp", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  } catch (error) {
    console.error("The Error is:",error)
  }
}

async function checkIfFilled(){
  let firstname= document.getElementById("first_name").value;
  let lastname=document.getElementById("last_name").value;
  let bdate = document.getElementById("birthdate").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  var check = document.getElementsByName("gender");
  for (i = 0; i < check.length; i++) {
    if (check[i].checked) {
      var gender = check[i].value;
    }
  }
  if(firstname==""|| lastname=="" || bdate=="" || email=="" || pass=="" || gender==""){
    alert("Please Fill in the necessary details!");
  }
  else{
    console.log("WHATSUP")
    await submitData();
  }  
}