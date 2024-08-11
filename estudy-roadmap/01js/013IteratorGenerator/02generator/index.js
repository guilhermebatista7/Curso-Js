function* doSomething(){
    const msg = yield 'Awesome';
    console.log(msg);
}


function main(){
    const generator = doSomething();
    const result = generator.next()
    console.log(result)
    console.log(generator.next())
}

main();