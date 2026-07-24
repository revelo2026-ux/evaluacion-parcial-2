let nombre1 = "leche",nombre2="switch";
let precio1 = 4.5,precio2=1.3;
let producto1 = true;
let producto2 = false;

console.log(`El precio de ${nombre1} es de: ${precio2}`);
console.log(`El precio de ${nombre2} es de: ${precio1}`);


let precio3=5;
const descuento=0.15;

let calculo;
calculo = precio3*0.15;

let des;
des=precio3-calculo;

console.log(`El precio final es de : ${des}`);
console.log(`Usted a ahorrado: ${calculo}`);

function cal(edad){
    if(edad <18){
        console.log(`Eres menor de edad`);
    }else if(edad>=18 && edad<65){
        console.log(`Eres un adulto`);
    }else{
        console.log(`Eres un adulto mayor`);
    }
}

let edad = 64;
cal(edad);