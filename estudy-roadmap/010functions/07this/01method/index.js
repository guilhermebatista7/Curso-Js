const person = {
    firstName: "Guilherme",
    age: 18,
    allInformation: function () {
        return this.firstName + ', ' + this.age; 
    }
};

let res = person.allInformation();
console.log(res);

