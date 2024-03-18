const fecha= new Date()
const hora= fecha.getHours()
const body= document.querySelector('body')
const costado= document.getElementById('costado')
const descripcion= document.getElementById('descripcion')
const a= document.querySelector('a')
if(hora>=5 && hora<12){
    document.getElementById('saludo').innerHTML = 'Buenos dias'
    body.style.backgroundColor='#a4dcb9'
}else if(hora>=12 && hora<20){
    document.getElementById('saludo').innerHTML = 'Buenas tardes'

}else{
    document.getElementById('saludo').innerHTML = 'Buenas noches'

}
a.style.borderColor='#b7ffea'
saludo.style.backgroundColor='#ecffff'
saludo.style.borderColor='#d1fff4'       
descripcion.style.backgroundColor='#ecffff'
descripcion.style.borderColor='#d1fff4'
costado.style.backgroundColor='#ecffff'
costado.style.borderColor='#d1fff4'
body.style.backgroundColor='#b7ffea'