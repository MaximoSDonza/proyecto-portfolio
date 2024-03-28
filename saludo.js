const cancion = document.getElementById('cancion')
let candia = ['https://open.spotify.com/embed/album/2rIdWbXPjcq8K7BCccBhhC?utm_source=generator','https://open.spotify.com/embed/album/2hEnymoejldpuxSdTnkard?utm_source=generator','https://open.spotify.com/embed/album/3dtSst4EXjGeZVQ5Sco315?utm_source=generator','https://open.spotify.com/embed/album/4X6PQwYWxtGGtKjAfX6wa6?utm_source=generator','https://open.spotify.com/embed/album/2UJcKiJxNryhL050F5Z1Fk?utm_source=generator']
let cantarde = ['https://open.spotify.com/embed/album/75onhE4ne52iMHlVcpHUKR?utm_source=generator','https://open.spotify.com/embed/album/7LMidzEe6utRLx7hPiq2AL?utm_source=generator','https://open.spotify.com/embed/album/2tqxwMkehDRiz4gErUNZ0Q?utm_source=generator']
let cannoche = ['https://open.spotify.com/embed/album/03jnJ4DNoOPKYe1H3eW6Fz?utm_source=generator','https://open.spotify.com/embed/album/5bP82ZIls6rzhpf5Qu6AzC?utm_source=generator','https://open.spotify.com/embed/album/78bpIziExqiI9qztvNFlQu?utm_source=generator','https://open.spotify.com/embed/album/0DUCdIMPrlfPFPPKsNyzx3?utm_source=generator','https://open.spotify.com/embed/album/5kk3PbroAezGBPucpoN4oC?utm_source=generator','https://open.spotify.com/embed/album/1ffZ5xExmmOr15QQzYrXyf?utm_source=generator','https://open.spotify.com/embed/album/5zBPRXCAc801vyHWoRurNZ?utm_source=generator','https://open.spotify.com/embed/album/27xqCLyTHom0wyjtw08K12?utm_source=generator','https://open.spotify.com/embed/album/0omWExUGprwvcvYwGh3Vr0?utm_source=generator&theme=0']
const fecha= new Date()
const hora= fecha.getHours()
const body= document.querySelector('body')
const root= document.querySelector(':root')

function canrandom(array){
    const random= Math.floor(Math.random() * array.length);
    return random
}

if(hora>=5 && hora<12){
    document.getElementById('saludo').innerHTML = 'Buenos Dias'
    root.style.setProperty('--bgcolor','#daffff');
    root.style.setProperty('--bcolor','#c0ecf9');
    root.style.setProperty('--bodycolor','#a7d9f3');
    cancion.src = candia[canrandom(candia)];
}else if(hora>=12 && hora<20){
    document.getElementById('saludo').innerHTML = 'Buenas Tardes'
    root.style.setProperty('--bgcolor','#ffffb6');
    root.style.setProperty('--bcolor','#efdd6c');
    root.style.setProperty('--bodycolor','#e9d253');
    cancion.src = cantarde[canrandom(cantarde)];
}else{
    document.getElementById('saludo').innerHTML = 'Buenas Noches'
    root.style.setProperty('--bgcolor','#a7a7a7');
    root.style.setProperty('--bcolor','#545454');
    root.style.setProperty('--bodycolor','#2c2c2c');
    cancion.src = cannoche[canrandom(cannoche)];
}