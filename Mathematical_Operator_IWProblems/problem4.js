//Given stored username and password and input username and password, Print if the user can login or not.
let stored_username = "Mahi";
let stored_password = "Mahi123";
let login_username = "mahi";
let login_password = "Mahi123";
if(stored_username == login_username)
  if(stored_password == login_password)
    console.log("Login successful");
  else
    console.log("Incorrect Password");
else
  console.log("Username not matching");