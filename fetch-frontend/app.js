async function getUsers() {
  let url = "http://localhost:3000/employees";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = "";
  users.forEach((user) => {
    let htmlSegment = `<div class="user">
                            <h2>${user.first_name} ${user.last_name} ${user.gender}</h2> 
                        </div>`;

    html += htmlSegment;
  });

  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderUsers();