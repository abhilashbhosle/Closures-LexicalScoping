// In lexical scoping we have seen the outside of the parent funtion we doesn't have access to 
// the variables of the function ie. it returns all its lexical scope

function outer(){
    let username='abhilash'
    function inner(){
        console.log(username)
    }
    return inner // here we are returning the function hence it returns all the lexical scope of the function
}
const outerfn=outer()
outerfn()

