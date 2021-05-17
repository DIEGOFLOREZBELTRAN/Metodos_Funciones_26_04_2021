


let lista = [];
function Saludar(p1,p2,p3)
{
    console.log(lista);
    return `Hola ${p1} ${p2} Como Estas Tu Edad Es: ${p3}`;
}
console.log(Saludar.call(null, "Diego","Florez",31));
console.log(Saludar.apply(null, ["Diego","Florez",31]));
let ejecutar = Saludar.bind(null, "Diego","Florez",31);
lista.push("datos");
console.log(ejecutar());


