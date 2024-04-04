var a = 1 //global scope

function test(){
    if(true){
        var b = 2; //function scope
        let c = 3; //block scope
        const d = 4; //block scope
    }
    console.log("Dentro função");
    console.log(a); //global scope
    console.log(b); //funcrion scope
    console.log(c); //block scope
    console.log(d); //block scope
}

test()
