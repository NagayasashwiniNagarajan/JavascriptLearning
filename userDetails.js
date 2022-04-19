var UserDetails = [];

// add User Details
var addUserDetails = (userName, userState) => {
  var userId = generateUniqueId(userName);
  var userDetail = {
    id: userId,
    fullName: userName,
    state: userState,
  };
  UserDetails.push(userDetail);
};

// function returns current date with name as userID
function generateUniqueId(name) {
    return Date.now() + name.toUpperCase();
}

// search user by state
var getUserByState = (state) => {
  let filteredUsers = UserDetails.filter(
    (value) => value.state.toLowerCase() === state.toLowerCase()
  );
  return filteredUsers.length == 0 ? "No users found  !" : filteredUsers;
};

// search user by name
var getUserByName = (name) => {
  let filteredUsers = UserDetails.filter(
    (value) => value.fullName.toLowerCase() === name.toLowerCase()
  );
  return filteredUsers.length == 0 ? "No users found !" : filteredUsers;
};

function removeUser(id){
    for(item in UserDetails){
        delete UserDetails[id];
    }
}

addUserDetails("Ram", "Coimbatore");
addUserDetails("Sam","Chennai");
console.log(getUserByState("coimbatore"));
console.log(getUserByName("ram"));
console.log(removeUser(1));
