import "./styles.css";

let btnEnv = document.getElementById("btnEnv");

btnEnv?.addEventListener("click", function () {
  let dato: number = Number(prompt("Ingrese un numero"));
  let parImpar = (numero: number): string => {
    if (numero === 0) {
      return "Par";
    } else if (numero === 1) {
      return "impar";
    } else {
      return parImpar(numero - 2);
    }
  };

  //0 Y 1 ES UN CASO BASE
  console.log(parImpar(dato));
  resultado.innerHTML = parImpar(dato);
});

function isEven(num: number): boolean {
  if (num === 0) return true; //caso base, llega a 0 es par
  if (num === 1) return false; //caso base, llega a 1 es impar
  if (num < 0) return isEven(-num);
  return isEven(num - 2); //0
}
console.log(isEven(54));
