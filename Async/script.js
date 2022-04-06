// Asynchronous JavaScript
// Promise - Амлалт
// 1. Pending
// Resolve
// Reject

function TestPromise (nas) {
    return new Promise((amjilttai , amjiltgui) => {
        if(nas >= 18){
            amjilttai("Welcome")
        } else {
            amjiltgui("Handah bolomjgui bna")
        }
    })
}

function Level2Promise (bla) {
    return new Promise((a , b) => {
        if(bla === "gg"){
            a("Done!")
        } else {
            b("Error")
        }
    })
}

TestPromise(24)
    .then(function(result){
        console.log(result);
        return Level2Promise("gg");
    })
    .then(res => {
        console.log(res);
    })
    .catch(function(err){
        console.log(err)
    });

// fetch
// Client => Request => ( Get , Post , Put , Patch , Delete )
// Server => Response => 1. Static HTML, 2. JSON data

// query string
// url + ? + params=value
// document.body.insertAdjacentHTML('afterbegin' , '<h1>loading...</h1>')
fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        return response.json()
    })
    .then(function(result){
        result.forEach((user) => {
            document.body.insertAdjacentHTML('afterbegin' , `
                <h1>${user.name}</h1>
            `)
        })
    })