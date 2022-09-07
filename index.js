function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function (object){
        document.body.innerHTML = object["id"]
    })
    .catch(function (error) {
        document.body.innerHTML = error.message
    })
}
//     const formData = {
//         name: userName,
//         email: userEmail,
//     };

//     const configurationObject = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             },
//             body: JSON.stringify(formData)
//         };

//     return fetch("http://localhost:3000/users", configurationObject)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object){
//         console.log(object);
//     })
//     .catch(function(error) {
//         console.log(error.message);
//     });
// }

//     fetch("http://localhost:3000/users", configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     }),


// function submitData(name, email) {
//     method: "POST",

//     fetch("http://localhost:3000/users", {

//     }),
//     .then(),
//     .then();
//     },
