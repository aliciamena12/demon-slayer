const navbar = document.querySelectorAll("li a");

function removeActiveClass(){
    navbar.forEach(element => {
        element.classList.remove('active');
    })
}

window.addEventListener('scroll', function (e) {
    let currentPosition = window.scrollY;//guarda la posicion en la que va
    navbar.forEach(element => {
        let id = element.getAttribute('href');//aca obtengo cada href de los enlaces
        let target = document.querySelector(id); //aca obtengo los elementos que apuntan los enlaces como en el href queda el id esta funcion si le pasas #hola obtiene el elemento que tenga el id="hola" funciona como css o jquery
        let top = 0;//inicializo las variables por costumbre
        let height = 0;//javascript para si hay algun error, entonces por ejemplo uno de los enlaces lo cogi de la pagina de bootstrap y tenia href="#mierda" por ejemplo, entonces iba a quedar en null y luego intentaba obtener la posicion en Y de null por eso paso el error mientras que si haces if(null) no entra al if
        if (target){//pregunto si se pudo encontrar el elemento porque ahora no pudo y salio un error y dejo de funcionar el evento
            top = target.offsetTop;//obtengo la posicion en Y del elemento
            height = target.offsetHeight;//y su alto
            if(currentPosition < top + height && currentPosition > top-90){//miro si el scroll esta en el rango del elemento
                removeActiveClass();//despinto todos los enlaces de rojo
                element.classList.add('active')//pinto el enlace actual pues el scroll esta dentro del elemento al que hace referencia
            }
        } 
    });
});

navbar.forEach(element => {//parecido solo que este hace scroll buscando el elemento cuando clickean un enlace
    element.addEventListener('click', (e) => {
        e.preventDefault();//esto para que no haga el efecto predeterminado de irse al elemento asi brusco, previenes el comportamiento por defecto de un evento
        let id = element.getAttribute('href');//el resto lo sabes
        let top = 40;
        let target = document.querySelector(id);
        console.log(target);
        if (target) top = target.offsetTop;
        window.scroll({
            top: top - 40,
            left: 0,
            behavior: 'smooth'
        });
    });

});


//var myModal = document.getElementById('myModal')
//var myInput = document.getElementById('myInput')

//myModal.addEventListener('shown.bs.modal', function () {
//  myInput.focus()
//}



//entonces que te parecio?una duda
//queda claro pregunto si la variable target tiene algo si es null no entra al if y que tiene la variable target
//esta buscando el elemento al que hace referencia el enlace que acaban de clickear como te digo si pasara esto
//pues cuando clickee el enlace va a intentar buscar la section id="mienrda" y va a soltar null porque no existe entonces luego estas lineas
//van a fallar porque voy a intentar sacar attributos de null entiendes? si, creo que lo que me liaba es la forma de ponerlo
// y que te ha parecido como programo?muy bien pero muy dificil 
//entonces ya casi me superas? xdnoo lol
//vale bien entonces debo irme, espero haberte ayudadogracias, y lo siento por hacerte resolverlo
//otra cosa prueba importando de nuevo bootstrap, puede que como ya estoy parando el evento por defecto no se dañe y puedas hacer lo de la modal mas facilbff no se le  jhoed erc oitgido una mania
//es que da rabia porque encima en el curso no lo explicaba bien, lo ponia a lo facil pero luego no da ni copioando lo suyo, tal vez algo mal hacias por ejemplo el curso usa bootstrap 4 y tu tenias importado unas cosas del 5
//en todo caso ya se que da rabia cuando no dan las cosas pero pues por lo menos intentavale entonces algo ultimo que decir?sobre esto?no, antes de irmete quierolol yo tambien tengo algo
// ahora con lo que te acabo de ayudar espero que mandes pack xd bye¬¬