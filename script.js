function calculaBhaskara() {

let a = +prompt("Qual valor de a?");
let b = +prompt("Qual valor de b?");
let c = +prompt("Qual valor de c?");
  
  let delta = Math.pow(b, 2) * (-4 * a * c);



  if (a === 0) {

    console.log("O valor de 'a' não pode ser 0.");
    return;
  }


  if (delta < 0) {

    alert("Não há raízes reais");
    return;
  }

  let x1 = Math.ceil((-b + Math.sqrt(delta)) / (2 * a));
  let x2 = Math.ceil((-b - Math.sqrt(delta)) / (2 * a));

  console.log("O valor de Delta é: ", delta);
  console.log("o valor de x1 é:", x1);
  console.log("o valor de x2 é:", x2);

}

calculaBhaskara();
