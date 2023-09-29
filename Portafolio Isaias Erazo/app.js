//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let python = document.getElementById("python");
crearBarra(python);
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let django = document.getElementById("django");
crearBarra(django);
let sql = document.getElementById("sql");
crearBarra(sql);
let nosql = document.getElementById("nosql");
crearBarra(nosql);
let ingles = document.getElementById("ingles");
crearBarra(ingles);
let español = document.getElementById("español");
crearBarra(español);
//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalPython = setInterval(function(){
            pintarBarra(python, 13, 0, intervalPython);
        },100);
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 11, 1, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 9, 2, intervalJavascript);
        },100);
        const intervalDjango = setInterval(function(){
            pintarBarra(django, 8, 3, intervalDjango);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 8, 4, intervalSql);
        },100);
        const intervalNosql = setInterval(function(){
            pintarBarra(nosql, 8, 5, intervalNosql);
        },100);
        const intervalIngles = setInterval(function(){
            pintarBarra(ingles, 4, 6, intervalIngles);
        },100);
        const intervalEspañol = setInterval(function(){
            pintarBarra(español, 17, 7, intervalEspañol);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}