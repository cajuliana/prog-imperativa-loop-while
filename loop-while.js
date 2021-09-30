//1. Programa em Javascript que mostra os números ímpares
//Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.

let i = 1
while (i < 100) {
  console.log("Volta " + i);
  i += 2
}

//2. Programa em Javascript que mostra os números pares
//Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.

let x = 1
while (x < 100) {
    if (x % 2 == 0) {
        console.log(x)
    }
    x++
}

//3. Programa em Javascript que mostra os números pares e ímpares 
//Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.

function ParOuImpar() {
    let a = 1
    console.log('Pares')
    while (a < 100) {
      if (a % 2 == 0) {
        console.log(a)
      }
      a++
    }
    console.log('Ímpares')
    let b = 1
    while (b < 100) {
      console.log(b)
      b += 2
    }
  }
  
ParOuImpar()