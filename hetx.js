let num = 10;

if (num % 5 === 0){
    console.log(num+"es mod de 5");
}else{
    console.log(num+"no es mod de 5");
}

for (let i=0 ; i<10 ; i++){
    console.log(i);
}

let contador =0;

while (contador < 5 ){
    contador ++;
    console.log(contador)
}



let suma = 7+7;
let resta = 7-2;
let multiplicacion = 7*7;
let divicion = 2/4;
let modulo = 2%5;

let mayQue = 10>5;
let mayIgualQue= 10>=5;
let menQue= 10<5;
let menIgualQue= 10<=5;
let igualQue = "hola" === "Hola"
let diferenteQue = "hola" != "hola"

let and = true && true;
let or = true || false;
let not = !false;

let sumaMultiplicacionModulo = 2+4*3%3;
let restaMultiplicacionDivicion = 5-7*8/2+3;


//estructura de datos
//objetos 

const persona={
    nombre:"jorge",

    edad:"20",

    ocupacion:"desperuanizador master "
}

persona["Apellido"]="Perez";

persona["CI"]="10099569";

persona.nombre="papu";

persona.edad="30".ocupacion="catador";

console.log(persona.edad)

console.log("Mi nombre es "+persona.nombre+" y mi edad es "+persona.edad)

//Arrays

const colors = ["verde","rojo","azul"]

console.log(colors.flat)

colors.push("amarillo");
colors.push("negro");
colors.push("Magenta")
colors.reverse();
colors.sort();

colors.push(2);

colors.push(true);

colors.push(1.2);

colors.push(6,8,3,77)

console.log(colors[1])

for ( let i=0 ; i<colors.length ; i++){
    console.log("Elemento "+colors[i]+"indice " + i)
}

console.log(colors)

console.log(colors.reverse())
console.log(colors.sort())

var elementoEliminado=colors.pop()

console.log(elementoEliminado)
console.log(colors)

console.log(colors.find("amarillo"))
console.log(colors.findeIndex("amarillo"))