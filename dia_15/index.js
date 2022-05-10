async function postUsers(data) {
  let url = "http://localhost:3000/user";
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return {data: await response.json(), status: response.status};
  } catch (error) {
    console.log(error);
  }
}

function cadastrar() {
  let name = document.querySelector("#inputNameCadastro").value;
  let email = document.querySelector("#inputEmailCadastro").value;
  document.getElementById("buttonPost").disabled = true;
  postUsers({ name, email }).then((data) => {
    if(data.status == 201){
       window.location.reload()
     } else {
       alert(data.data.MessageError)
       document.getElementById("buttonPost").disabled = false;
     }
  });
}

async function putUsers(id, data) {
  let url = `http://localhost:3000/user/${id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return {data: await response.json(), status: response.status};
  } catch (error) {
    console.log(error);
  }
}

function update() {
  let name = document.querySelector("#inputName").value;
  let email = document.querySelector("#inputEmail").value;
  let id = document.querySelector("#inputID").value;
  document.getElementById("buttonUpdate").disabled = true;
  putUsers(id, { name, email }).then((data) => {
     if(data.status == 200){
       window.location.reload()
     } else {
       alert(data.data.MessageError)
       document.getElementById("buttonUpdate").disabled = false;
     }
  });
}

async function deleteUsers(id) {
    let url = `http://localhost:3000/user/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        mode: "cors",
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
  
  function deletar() {
    let id = document.querySelector("#inputIDRemove").value;
    document.getElementById("buttonDelete").disabled = true;
    deleteUsers(id).then((data) => {
      window.location.reload()
    });
  }

window.onload = async function () {
  let count = 0
  let url = "http://localhost:3000/user";
  async function getUsers(count) {
    try {
      let res = await fetch(`${url}?page=${count}`);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function renderUsers(count=0) {
    let users = await getUsers(count);
    return users;
  }

  const dados = await renderUsers();

  const divUsers = document.querySelector("#tdb");

  dados.data.map((value, index) => {
    const divUser = document.createElement("tr");
    divUser.className = `userClass-${index}`;

    const userId = document.createElement("td");
    userId.innerHTML = value._id;

    const userName = document.createElement("td");
    userName.innerHTML = value.name;

    const userEmail = document.createElement("td");
    userEmail.innerHTML = value.email;

    const buttonEdit = document.createElement("i");
    buttonEdit.className = `bi bi-pencil-square`;
    buttonEdit.onclick = () => {
      var editModal = new bootstrap.Modal(
        document.getElementById("updateBackdrop")
      );
      editModal.show();

      var inputID = document.querySelector("#inputID");
      var inputName = document.querySelector("#inputName");
      var inputEmail = document.querySelector("#inputEmail");

      inputID.value = value._id;
      inputName.value = value.name;
      inputEmail.value = value.email;
    };

    const buttonRemove = document.createElement("i");
    buttonRemove.className = `bi bi-trash3-fill`;
    buttonRemove.onclick = () => {
      var removeModal = new bootstrap.Modal(
        document.getElementById("removeBackdrop")
      );
      removeModal.show();

      var inputIDRemove = document.querySelector("#inputIDRemove");
      var inputNameRemove = document.querySelector("#inputNameRemove");
      var inputEmailRemove = document.querySelector("#inputEmailRemove");

      inputIDRemove.value = value._id;
      inputNameRemove.value = value.name;
      inputEmailRemove.value = value.email;
      
    };

    divUser.appendChild(userId);
    divUser.appendChild(userName);
    divUser.appendChild(userEmail);
    divUser.appendChild(buttonEdit);
    divUser.appendChild(buttonRemove);
    divUsers.appendChild(divUser);
  });
};
