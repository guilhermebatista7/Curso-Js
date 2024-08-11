const obj = [ 
    {
        nome: "Guilherme",
        idade: 30,
        estaEstudando: true,
        detalhesEstudo: [
            {
                aprendeu: "html e css",
                aprendendo: "javascript"
            }
        ],
        hobbies: ["jogar", "sair", "programar"]
    },
    {
        nome: "Luan",
        idade: 10,
        estaEstudando: true,
        detalhesEstudo: [
            {
                aprendeu: "marketing",
                aprendendo: "design"
            }
        ],
        hobbies: ["cantar", "ler", "academia"]
    }
]

//converte obj para json
const jsonData = JSON.stringify(obj);
console.log(jsonData);
console.log(typeof(jsonData));

//converte json para obj, mesma coisa que const obj criado
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof(objData));