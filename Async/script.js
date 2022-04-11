// Asynchronous JavaScript
// Promise - Амлалт
// 1. Pending
// Resolve
// Reject

// function TestPromise (nas) {
//     return new Promise((amjilttai , amjiltgui) => {
//         if(nas >= 18){
//             amjilttai("Welcome")
//         } else {
//             amjiltgui("Handah bolomjgui bna")
//         }
//     })
// }

// function Level2Promise (bla) {
//     return new Promise((a , b) => {
//         if(bla === "gg"){
//             a("Done!")
//         } else {
//             b("Error")
//         }
//     })
// }

// TestPromise(24)
//     .then(function(result){
//         console.log(result);
//         return Level2Promise("gg");
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(function(err){
//         console.log(err)
//     });

// fetch
// Client => Request => ( Get , Post , Put , Patch , Delete )
// Server => Response => 1. Static HTML, 2. JSON data

// query string
// url + ? + params=value
// document.body.insertAdjacentHTML('afterbegin' , '<h1>loading...</h1>')
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response){
//         if(!response.ok){
//             throw new Error("hgsdkjfhgkldsf")
//         }
//         return response.json()
//     })
//     .then(function(result){
//         result.forEach((user) => {
//             document.body.insertAdjacentHTML('afterbegin' , `
//                 <h1>${user.name}</h1>
//             `)
//         })
//     })
//     .catch(function(err){
//         alert(err.message)
//     })
// function checkAge (nas) {
//     try {
//         if(nas < 18){
//             throw new Error("Handah erhgui bna,!!!")
//         }
    
//         alert("Welcome")
//     } catch (err) {
//         alert(err.message)
//     }
// }

// Async JS

function _getData() {
    return {
        req: async function(url , method){
            try {
                const response = await fetch(url , {
                    method: method ? method : 'GET'
                });
                if(!response.ok){
                    switch(response.status){
                        case 404: 
                            throw new Error("Not Found");
                        case 401: 
                            throw new Error("UnAuthorized");
                        default: throw new Error("Network Error")
                    }
                }
                const data = await response.json();
                return {data , error: null}
            } catch (err) {
                return {error: err.message};
            }
        }
    }
}

const request = _getData();

class DOM {
    userContainer = document.querySelector('.users');
    constructor(){
        this.init();
        this.eventListener();
    }

    async updateUI(data){
        this.userContainer.innerHTML = '';
        data.forEach(user => {
            this.userContainer.insertAdjacentHTML('afterbegin' , `
                <div class="user">
                    <h1 class="username" id=${user.id}>${user.name}</h1>
                    <div>
                        <a href="./posts.html?userId=${user.id}&name=${user.name}">
                            read posts
                        </a>
                    </div>

                </div>
            `)
        })
    }

    async init(){
        this.userContainer.innerHTML = "loading";
        const {data , error} = await request.req("https://jsonplaceholder.typicode.com/users");
        if(data){
            this.updateUI(data);
        }

        if(error){
            this.userContainer.innerHTML = error;
        }
    }

    async getPost(id){
        const postList = await request.req("https://jsonplaceholder.typicode.com/posts?userId=" + id);
        console.log(postList);
    }

    eventListener () {
        document.addEventListener('click' , e => {
            if(e.target.id == "posts"){
                const userId = e.target.previousElementSibling.id;
                this.getPost(userId);
            }
        })
    }
}

new DOM();

// todos , albums


// let obj = {}
// obj["bla"] = 123;
