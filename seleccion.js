
var arreglo123=[]; 
var c=0;
var m=0;
function menuPrincipal() {
       
    do
    {
        var menu = parseInt(prompt(
            `INGRESE LA OPCIÓN REQUERIDA:
           1.- PARA INGRESAR LOS ELEMENTOS
           2.- PARA MOSTRAR ELEMENTOS
           3.- ORDEN: BURBUJA Y SELECCION
           4.- MAYOR Y MENOR ELEMENTO
           5.- SALIR
           `))
        switch (menu) {
            case 1:
                console.log("BIENVENIDO CASO 1");
                var n = parseInt(prompt("INGRESE EL TAÑANO"));
                ingresarDatos(arreglo123,n);
                console.log("El tamaño del arreglo es de : "+n);
                break;
            case 2:
                console.log("BIENVENIDO CASO 2");
                console.log("Elementos ingresados: "+ arreglo123);
                break;
            case 3:
                console.log("BIENVENIDO CASO 3");
                console.log("METODO ORDENAMIENTO BURBUJA");
                //ingresarDatos(arreglo123,n);
                var t =arreglo123.length;//almacena el tamanio
                console.log("Arreglo inicial: "+ arreglo123);//arreglo inicial
                Burbuja(arreglo123,t);
                console.log("Arreglo ordenado por burbuja: "+ arreglo123);
                console.log("METODO ORDENAMIENTO POR SELECCION");
                var t =arreglo123.length;//almacena el tamanio
                Seleccion(arreglo123,t);
                console.log("Arreglo ordenado por seleccion: "+ arreglo123);
                
                console.log("Comparaciones: "+ c);
                console.log("Movimientos: "+ m);

                break;
            case 4:
                console.log("BIENVENIDO CASO 4");
                mayor ();
                menor();

                break;
                case 5:
                console.log("SALIR....GRACIAS!");
                break;
            default:
                console.log("OPCIÓN INCORRECTA");
                break;
        }
    }
    while(menu!=5)
    
}
menuPrincipal();

//INGRESO DE LOS ELEMENTOS PARA LOS ORDENAMIENTOS

function ingresarDatos (arreglo,n){
    for(var k=0; k<n; k++)
    {
        var datos = parseInt( prompt("INGRESA LOS ELEMENTOS"));//LINEA COMO UN COUT CUADRO DE TEXTO
        arreglo[k]= datos;
    }

}

//METODO BURBUJA

function Burbuja(arreglo,n)
{
    var i,k,aux
    for (k  = 0; k < n; k++) {
       for  (i=0;i<(n-k);i++){
           if(arreglo[i]>arreglo[i+1]){
               aux = arreglo[i];
               arreglo[i]=arreglo[i+1];
               arreglo[i+1]=aux;

           }


       }
        
    }

    
}



function PrincipalBurbuja ()
{
    var arreglo123=[];
    var n = parseInt( prompt("INGRESA EL TAMAÑO"));
    ingresarDatos(arreglo123,n);
    var t =arreglo123.length;//almacena el tamanio
    console.log(arreglo123);//arreglo inicial
   
    Burbuja(arreglo123,t);
    console.log(arreglo123);//arreglo burbuja

}

//METODO POR SELECCION

function Seleccion( arreglo, n)
{
    //comparaciones y movimientos
    
	var k,j,aux
	for( k=0; k<n; k++)
	{
		for( j=k+1; j<n; j++)
		{
            c=c+1;			
			if	(arreglo[k]>arreglo[j])
			{
                m=m+1;
				aux=arreglo[k];
				arreglo[k]=arreglo[j];
				arreglo[j]=aux;
			}
        }
        
	}
	


}


function PrincipalSeleccion ()
{
    var arreglo123=[];
    var n = parseInt( prompt("INGRESA EL TAMAÑO"));
    ingresarDatos(arreglo123,n);
    var t =arreglo123.length;//almacena el tamanio
    console.log(arreglo123);//arreglo inicial
   
    Seleccion(arreglo123,t);
    console.log(arreglo123);//arreglo burbuja

} 

//NUMERO MENOR

function menor (n)
{
    
    var vec= arreglo123
    
    var menor=vec[0];
    for (var i=0; i < n;i++)
    {
        
        if(vec[i]<menor)
        {
            menor= vec[i];
        }

    }
    
    console.log("El numero Menor es: "+menor);
}


//NUMERO MAYOR

function mayor(){
var arreglo = arreglo123;
var mayor = 0;
 
for(i = 0; i < arreglo.length; i++){
    if (arreglo[i] > mayor)
    {
        mayor = arreglo[i];
    } 
}
 
console.log("El numero Mayor es: "+mayor);
}


    
