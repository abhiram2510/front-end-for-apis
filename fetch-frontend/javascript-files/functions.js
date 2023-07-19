async function onShowEmployeesClick() {
  fetch("http://localhost:3000/employees/1").then((response) => {
    console.log(response.json());
    document.getElementById("view_employees").innerHTML = response.json();
  });
}

async function login() {
  console.log("Hello");
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let userlogin = { username: email, pass: pass };
  console.log(userlogin.username);
  let response=await fetch("http://localhost:3000/api/v1/userLogin", {
    method: "POST",
    body: JSON.stringify({
      username: email,
      pass: pass,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let empresponse= await response.json();
  let responseObj = JSON.parse(JSON.stringify(empresponse));
  console.log(responseObj);
  if(responseObj.errorMessage == null){
    localStorage.setItem("empObj",JSON.stringify(responseObj.data));
    window.location.href="./display2.html"
  }
  else{
    document.getElementById("login").innerHTML="Please check your username/password!"
  }
}

function checkIfFilled(){
  let email= document.getElementById("email").value;
  let pass= document.getElementById("password").value;
  if(email == "" || pass == ""){
    alert("Please fill the fields!")
  }
  else{
    login();
  }
}

function signupPage(){
  window.location.href='signup.html'
}
