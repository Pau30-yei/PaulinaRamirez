//Cambia el color a un texto
function CambiarColor()
{
    //var  es una variable no tipada(es una variable a la que no se le indica que es)
    //document es el objeto DOM
    //Metodo getElementById modifica el documento DOM
    var elemento= document.getElementById("colorjs");
    if(elemento.style.color=="black")
    {
        elemento.style.color="red";
        
    }
    else
    {
        elemento.style.color="black";
    }
    
}
//Cambia el fondo
function CambiarFondo()
{
    //var  es una variable no tipada(es una variable a la que no se le indica que es)
    //document es el objeto DOM
    //Metodo getElementById modifica el documento DOM
    var elemento= document.getElementById("colorjs");
    if(elemento.style.backgroundColor=="gray")
        {
            elemento.style.backgroundColor="white";
            
        }
        else
        {
            elemento.style.backgroundColor="gray";
        }
}
