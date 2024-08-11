let carro = {
    marca: "Toyota",
    modelo: "Corolla"
  };
  
  // Criando um novo objeto carroEsportivo
  let carroEsportivo = {
    cor: "vermelho"
  };
  
  // Estabelecendo a relação de prototipagem entre carroEsportivo e carro
  carroEsportivo.__proto__ = carro;
  
  // Agora, vamos acessar uma propriedade que está no protótipo do objeto carro
  console.log(carroEsportivo.modelo);