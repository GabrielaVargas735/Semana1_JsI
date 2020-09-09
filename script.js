function click(event){
    const id = event.currentTarget.getAttribute('href').substring(1);
    console.log(id);
}
const enlaces = document.querySelectorAll('.tabs-tablist-item');
const contenido = document.querySelectorAll('.tabs-content-item');
for (let i = 0; i < contenido.length; i++){
    contenido[i].style.display = 'none';
    if(contenido[i].getAttribute('id') == id){
        contenido[i].style.display = 'block';
    }
}
for (let i = 0; i < contenido.length; i++){
    contenido[i].style.display = 'none';
}

for (let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener('click', click);
}
contenido[0].style.display = 'block';