////////////////////////////////check user is login or not/////////////////

let uuid = localStorage.getItem("uuidkey");

import loginORNot from "../components/checkUserLoginOrNot.js";

loginORNot();

///////////////////////////////////////end of check user is login or not //////////////////

////////////////adding navbar//////////////////

import navbar from "../components/userNavbar.js";

let navabar = document.getElementById("navabar");

navabar.innerHTML = navbar;
/////////////////end of adding navbar///////////

let profileDeatils = document.getElementById("profileDeatils");

let userProfile = JSON.parse(localStorage.getItem("userDeatils")) || null;

let displayProfile = () => {
  let name = document.createElement("p");
  name.innerText = `Name: ${userProfile.name}`;

  let mobileNumber = document.createElement("p");
  mobileNumber.innerText = `Mobile Number: ${userProfile.mobileNo}`;

  let email = document.createElement("p");
  email.innerText = `Email Address: ${userProfile.email}`;

  let changePassword = document.createElement("button");
  changePassword.setAttribute("class", "btn btn-primary btn-lg");
  changePassword.setAttribute("type", "button");
  changePassword.style.marginLeft = "10px";
  changePassword.innerText = "Change Password";

  let logoutButton = document.createElement("button");
  logoutButton.setAttribute("class", "btn btn-danger btn-lg");
  logoutButton.setAttribute("type", "button");
  logoutButton.style.marginLeft = "10px";
  logoutButton.innerText = "Logout";

  profileDeatils.append(
    name,
    mobileNumber,
    email,
    changePassword,
    logoutButton
  );

  logoutButton.addEventListener("click", async (event) => {
    let url = `http://localhost:8085/api/V1/userLogout?key=${uuid}`;
    let data = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
    });

    let confirmation = confirm("Are you sure to Logout");
    if (confirmation) {
      localStorage.removeItem("uuidkey");

      alert("Logout successful");

      window.location.href = "../index.html";
    }
  });

  changePassword.addEventListener("click", (event) => {
    window.location.href = "../forgetPasswordUserPage.html";
  });
};

displayProfile();
