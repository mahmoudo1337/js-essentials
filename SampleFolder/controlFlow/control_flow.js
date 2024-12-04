
//Ternary Operator

let isAuthenticated = true
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated"



// Switch Cases
let userType = "sss"
let userCategory
switch (userType){
    case "admin":
        userCategory ="administrator"
        break
    case "manager":
        userCategory = "manager"
        break
    case "subscriber":
        userCategory= "sbuscriber"
        break
    default:
        userCategory = "Unknown"
}



// Nested If/Else
let isLoggedIn = true
let userMessage
if (isLoggedIn){
    if(userRole==='admin'){
        userMessage = "Welcome, Admin"
    } else{
        userMessage = "Welcome, User!"
    }
    
}else{
    userMessage = "Please login to access the system."
}

//If Else

let userRole = 'admin'
let accessLevel

if (userRole === 'admin'){
    accessLevel = "Full access level granted"
} else if( userRole === 'manager'){
    accessLevel = "Limited access level granted"
} else{
    accessLevel = "NO access granted"
}



console.log("Access Level: ", accessLevel)
console.log("User Message: ", userMessage)
console.log("User Category: ", userCategory)
console.log("Authentication Status: ", authenticationStatus)