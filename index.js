// // Add your code here

// function submitData(name, email){
//    return fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             Accept: 'application/json',
//         },
//         body: JSON.stringify({
//             name,
//             email
//         })

//     })
//     .then(res => res.json())
//     .then(data => document.body.innerHTML = data["id"])
//     .catch(err => document.body.append(err.message))
//  }

// console.log(submitData("steve", "steve@steve.com"))

function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name,
            email
        }),
    }) .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function
 ( error ) {
        document.body.innerHTML = error.message
      } )
}