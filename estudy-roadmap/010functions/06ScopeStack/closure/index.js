function createCounter() {
    let counter = 0;

    const myFunction = function(){
        counter += 1;
        return counter;
    }
    return myFunction;
}

const increment = createCounter();
console.log(increment());
console.log(increment());