// Implementación de Recursividad

// Factorial
let numero
function factorial(numero){
  if(numero === 0){
    return 1
  } else{
    return numero * factorial(numero - 1)
  }
}
//console.log(factorial(5))
//console.log(factorial(0))

// Número par o impar
function parImpar(numero){
    if(numero === 0){
      return "Es par"
    } if(numero === 1){
      return "Es impar"
    }
    return parImpar(numero - 2)
}
//console.log(parImpar(20))
//console.log(parImpar(5))
//console.log(parImpar(8))

// Fibonaci
function fibonaci(numero){
  if(numero === 0){
    return 0
  } if(numero === 1){
    return 1
  } else{
    return fibonaci(numero - 1) + fibonaci(numero - 2)
  }
}
for(let i=1; i<=7; i++){
  console.log(fibonaci(i))
}