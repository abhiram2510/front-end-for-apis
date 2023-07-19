let employee= JSON.parse(localStorage.getItem("empObj"));
console.log(employee);
console.log(employee.first_name);
document.getElementById("empName").innerHTML = employee.first_name;