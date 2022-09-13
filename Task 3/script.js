/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

//const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", () => {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((users) => {
        //
        const login = document.createElement("h2");
        const avatar = document.createElement("p");
        const container = document.createElement("div");

        //textContent
        login.textContent = users.login;
        avatar.textContent = users.avatar_url;

        //style
        container.style.display = "flex";
        container.style.justifyContent = "space-around";

        // Appending
        container.append(login, avatar);

        const output = document.getElementById("output");
        output.append(container);

        //Hide message
        var element = document.getElementById("message");
        element.style.display = "none";
      });
    });
});
