var UserDetails = [];

// this is function constructor
// this constructor builds User object
function User(name, state) {
   this.name = name;
   this.state = state;
}

// pass the User object as parameter to the function.
var addUserDetails = (User) => {
  var userId = generateUniqueId(User.name);
  var userDetail = {
    id: userId,
    fullName: User.name,
    state: User.state,
  };
  UserDetails.push(userDetail);
}

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

user1 = new User('Ram','Coimbatore');
user2 = new User('Sam', 'Chennai');

addUserDetails(user1);
addUserDetails(user2);

console.log(UserDetails);

console.log(getUserByState("Bangalore"));
console.log(getUserByName("Sam"));
console.log(removeUser(1));

console.log(UserDetails);
