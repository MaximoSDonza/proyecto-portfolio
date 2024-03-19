const fecha= new Date()
const hora= fecha.getHours()
const body= document.querySelector('body')
const root= document.querySelector(':root')

if(hora>=5 && hora<12){
    document.getElementById('saludo').innerHTML = 'Buenos dias'
    root.style.setProperty('--bgcolor','#daffff');
    root.style.setProperty('--bcolor','#c0ecf9');
    root.style.setProperty('--bodycolor','#a7d9f3');
}else if(hora>=12 && hora<20){
    document.getElementById('saludo').innerHTML = 'Buenas tardes'
    root.style.setProperty('--bgcolor','#ffffb6');
    root.style.setProperty('--bcolor','#efdd6c');
    root.style.setProperty('--bodycolor','#f4e985');
}else{
    document.getElementById('saludo').innerHTML = 'Buenas noches'
    root.style.setProperty('--bgcolor','#a7a7a7');
    root.style.setProperty('--bcolor','#545454');
    root.style.setProperty('--bodycolor','#2c2c2c');
}
