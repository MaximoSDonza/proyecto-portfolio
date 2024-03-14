const fecha= new Date()
const hora= fecha.getHours()
if(hora>=5 && hora<12){
    document.getElementById('saludo').innerHTML = 'Buenos dias'
}else if(hora>=12 && hora<20){
    document.getElementById('saludo').innerHTML = 'Buenas tardes'
}else{
    document.getElementById('saludo').innerHTML = 'Buenas noches'
}       

console.log(hora)
