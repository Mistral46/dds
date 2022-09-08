//var numeros = 10;
var arreglo =[]
//while (arreglo.length < numeros){
//var azar = math.floor(math.random())
var sumatoria=0
for (i=0;i<9;++i){
    arreglo[i]= Math.ceil(Math.random()*100)
    sumatoria+=arreglo[i]
}
console.log("arreglo -->",arreglo)
console.log("sumatoria ->",sumatoria)
console.log("promedio",sumatoria/10)