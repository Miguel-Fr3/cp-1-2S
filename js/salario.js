// Crie um array contendo 10 valores de salário e utilizando o método map() atribua
// um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima
// de 2000.

const  salarios = [1800, 1350, 2000, 2500, 1500, 3000, 2900, 5000, 800, 3000]

const salarioAtualizado = salarios.map((salario)=>{
    if(salario <= 2000){
        return salario * 1.15;
    }
    else{
        return salario * 1.10
    }
});

const salarioAtualizadoFormatado = salarioAtualizado.map(valor =>
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  );
  
  console.log(`Os salários atualizados são: ${salarioAtualizadoFormatado}`);




// Utilizando o array de resultado do exercício anterior, crie um novo array, usando o
// método filter(), contendo somente os salários superiores a 2500.


const salariosSuperiores2500 = salarioAtualizado.filter(valor => valor > 2500);

const salariosSuperiores2500Formatados = salariosSuperiores2500.map(valor =>
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  );
  
  console.log(`Os salários superiores a 2500 são: ${salariosSuperiores2500Formatados}`);





  
// Utilizando o array de resultado do exercício anterior, usando o método reduce(),
// some os valores.

const somaSalariosSuperiores2500 = salariosSuperiores2500.reduce((acumulador, valor) => acumulador + valor, 0);

const somaSalariosFormatada = somaSalariosSuperiores2500.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

console.log(`A soma dos salários com valor superior a 2500 é de ${somaSalariosFormatada}`);