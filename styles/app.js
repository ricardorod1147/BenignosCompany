let imagen = 0;
 
 // Función para cambiar la imagen de fondo del header
 const changeHeaderBackground= () => {
    const head = document.getElementById('containerh');
    if(imagen==0){
        head.classList.remove('headerUno');
        head.classList.add('headerDos');
        imagen++;
    }else{
        head.classList.remove('headerDos');
        head.classList.add('headerUno');
        imagen--;
    }
  }

  // Cambiar la imagen de fondo inicial al cargar la página

  document.addEventListener('DOMContentLoaded', function() {
    // Aquí dentro puedes llamar a la función que quieres ejecutar
    //changeHeaderBackground();
  });
  // Cambiar la imagen de fondo cada 5 segundos (5000 milisegundos)
 setInterval(changeHeaderBackground, 5000);


const ChangeSection=(parametro)=>{
    const about = document.getElementById('about');
    const services = document.getElementById('services');
    const proyects = document.getElementById('proyects');
    const contact = document.getElementById('contact');

    try {
        about.classList.forEach(className => {
            about.classList.remove(className);
          });
          services.classList.forEach(className => {
            services.classList.remove(className);
          });
          proyects.classList.forEach(className => {
            proyects.classList.remove(className);
          });
          contact.classList.forEach(className => {
            contact.classList.remove(className);
          });
        
    } catch (error) {
        console.log(error);
    }

    if(parametro=="services"){
        about.classList.add('noshow');
        proyects.classList.add('noshow')
        contact.classList.add('noshow')
    }else if(parametro=="about"){
        services.classList.add('noshow');
        proyects.classList.add('noshow')
        contact.classList.add('noshow')
    }else if(parametro=="proyects"){
        proyects.classList.add('proyects')
        services.classList.add('noshow');
        contact.classList.add('noshow');
        about.classList.add('noshow');
    }else if(parametro=="contact"){
        proyects.classList.add('noshow')
        services.classList.add('noshow');
        about.classList.add('noshow');
        contact.classList.add('contact');
    }

}


const ShowMenu = () =>{
    const menu = document.getElementById('id-title-btn');
    if(menu.style.height == ""){
        menu.style.height = "auto";
    }else{
        menu.style.height = "";
    }
}

const saludar = () =>{
    console.log("Hola");
}