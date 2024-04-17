let carro = {
    marca: "Toyota",
    modelo: "Corolla"
  };
  
  // Criando um novo objeto com carro como protótipo
  let carroEsportivo = Object.create(carro);
  carroEsportivo.cor = "vermelho";
  
  console.log(carroEsportivo.marca); // Saída: Toyota
  console.log(carroEsportivo.modelo); // Saída: Corolla