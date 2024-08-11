function hello(){
    console.log("Hello " + this.name);
}

const person = {
    name: 'Guilherme',
    lastName: 'Batista',
    sayHello: hello
}

const anothePerson = {
    name: 'Yasmin',
    lastName: 'Osti'
}

hello();
person.sayHello();
hello.call(anothePerson);
hello.call(person);