// Here all the functions enclosed inside the parent function have an access to all the properties of parent.
//But doesn't have the access among themselves (child / enclosed functions)
//And parent doesn't have access to the variables declared inside the child function.


function outer(){
    let name='abhilash'
    // console.log(secret) // Reference error (As parent doesn't have access to it's child property variables)
    function inner1(){
        console.log(name) //child function has an access of its parent variable
    }
    function inner2(){
        let secret='password'
        console.log(name) //child function has an access of its parent variable
    }
    inner1()
    inner2()
}
outer()