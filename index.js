////////////////////////////////////////////// estructuras //////////////////////////////////


/////////////////////////// ESTRUCTURAS PARA LOS USUARIOS DE PARTE DEL ADMINISTRADOR


////////////////////////////////////////////////        USUARIOS ADMINISTRADOR ///////////////////////////////////////
class nodols{
    constructor(id,libro){
        this.libro=libro
        this.id=id;
        this.siguiente=null;
    }//Fin constructor
}//Fin nodo cola

class listaSimple{
    constructor(){
        this.primero=null;
        this.ultimo=null;
    }//Fin constructor

    insertar(id,libro){
        var nuevo = new nodols(id,libro)
        if(this.primero==null && this.ultimo==null){
            this.primero=nuevo;
            this.ultimo=nuevo;    
        }
        else{
            this.ultimo.siguiente=nuevo
            this.ultimo=this.ultimo.siguiente
        }
    }// fin insertar

    imprimir(){
        var aux = this.primero;
        if(aux==null){alert("No existen aun elementos en la pila")}
        while(aux!=null){
            alert(aux.id)
            aux=aux.siguiente
        }
    }// fin imprimir

    grafica(inicio,alternador){
        var nodoaux=this.primero;
        var strGraficaUno="\n\n"+inicio+"->"+(nodoaux.id+alternador)+";\n"
        while(nodoaux!=null){
        strGraficaUno+=(nodoaux.id+alternador)+"[label=\""+nodoaux.libro+"\"];\n"
        if(nodoaux.siguiente!=null){strGraficaUno+=(nodoaux.id+alternador)+"->"+(nodoaux.siguiente.id+alternador)+";\n"
        }
        nodoaux=nodoaux.siguiente;}
        return strGraficaUno
    } // graficauno




}//fin clase cola

class nodoDobleCircular{

    constructor(dpi,nombre_completo,nombre_usuario,correo,rol,contrasenia,telefono){
        //-----------Datos
        this.cantidadComprada=0
        this.dpi=dpi;
        this.nombre_completo=nombre_completo
        this.nombre_usuario=nombre_usuario;
        this.correo=correo;
        this.rol=rol;
        this.contrasenia=contrasenia;
        this.telefono=telefono
        //---------- Punteros
        this.siguiente=null;
        this.anterior=null;
        this.lista=new listaSimple()
    }//Fin constructor

}// Nodo doble circular

class listaDobleCircular{

    constructor(){
        this.primero=null;
        this.ultimo=null;
    }// fin constructor

    insertar(dpi,nombre_completo,nombre_usuario,correo,rol,contrasenia,telefono){
        var nuevoNodo = new nodoDobleCircular(dpi,nombre_completo,nombre_usuario,correo,rol,contrasenia,telefono);
        if(this.primero==null && this.ultimo==null){
            this.primero=nuevoNodo; this.ultimo=this.primero;
            this.primero.siguiente=this.primero; this.primero.anterior=this.ultimo;
        }// fin del if
        else{
            var auxNodo = this.primero;
            while(this.primero.siguiente!=auxNodo){this.primero=this.primero.siguiente;}
            this.ultimo=nuevoNodo;
            this.primero.siguiente=this.ultimo;
            this.ultimo.anterior=this.primero;
            this.primero=auxNodo;
            this.ultimo.siguiente=this.primero;
            this.primero.anterior=this.ultimo;
        }// else
    }// fin insertar

    retornoId(dpi){
        var aux = this.primero;
        var contador=0;
        if(aux.dpi==dpi){return aux}
        aux=aux.siguiente;
        while(aux!=null & aux!=this.primero){
            if(aux.dpi==dpi){return aux}
            aux=aux.siguiente
        }
        return null;
    }// retorno Id

    retornoEncontrado(usuario,contrasenia){
        var aux = this.primero;
        var contador=0;
        if(aux.nombre_usuario==usuario && aux.contrasenia==contrasenia){return aux}
        aux=aux.siguiente;
        while(aux!=null & aux!=this.primero){
            if(aux.nombre_usuario==usuario && aux.contrasenia==contrasenia){return aux}
            aux=aux.siguiente
        }
        return null;
    }// retorno Id


    insertarInterno(dpi,datoInterno,libro){
        this.retornoId(dpi).lista.insertar(datoInterno,libro)
    }// insertar interno


    grafica(){
        var strGraficaUno="digraph G { \n rankdir=\"LR\";\n"
        var nodoaux=this.primero;
        var contador=0;
        var alternador=101010
        if(contador==0){ 
            strGraficaUno+=contador+"[label=\""+nodoaux.dpi+"\n"+nodoaux.nombre_completo+"\n"+nodoaux.nombre_usuario+"\n"+nodoaux.correo+"\n"+nodoaux.rol+"\n"+nodoaux.contrasenia+"\n"+nodoaux.telefono+"\"];\n"
            //console.log(nodoaux.lista.grafica(contador,alternador))
        if(nodoaux.lista.primero!=null){
            strGraficaUno+=nodoaux.lista.grafica(contador,alternador)
            alternador=alternador+114324+Math.floor(Math.random()*9999)
         }
            nodoaux=nodoaux.siguiente;
        contador=contador+1;}
        while(nodoaux!=this.primero && contador!=0){
        strGraficaUno+=contador+"[label=\""+nodoaux.dpi+"\n"+nodoaux.nombre_completo+"\n"+nodoaux.nombre_usuario+"\n"+nodoaux.correo+"\n"+nodoaux.rol+"\n"+nodoaux.contrasenia+"\n"+nodoaux.telefono+"\"];\n"
        var miau=contador-1
        strGraficaUno+=miau+"->"+contador+";\n"
        strGraficaUno+=contador+"->"+miau+";\n"
        if(nodoaux.lista.primero!=null){
        strGraficaUno+=nodoaux.lista.grafica(contador,alternador)
        alternador=alternador+12342+Math.floor(Math.random()*9999)
        }
        contador=contador+1;
        nodoaux=nodoaux.siguiente;}
        strGraficaUno+="0->"+(miau+1)+";\n"
        strGraficaUno+=(miau+1)+"->0;\n"
        strGraficaUno+="}"
        return strGraficaUno
    } // graficauno


}// Fin lista doble circular

var listaUsuarios=new listaDobleCircular()
listaUsuarios.insertar("2354168452525","Wilfred Perez","Wilfred","sincorreo@gmail.com","Administrador","123","+502 (123) 123-4567")



////////////////////////////////// AUTORES

class nodoabb{
    constructor(id,nombre_autor,dpi,correo,telefono,direccion,biografia){
        this.nombre_autor=nombre_autor;
        this.dpi=dpi
        this.correo=correo
        this.telefono=telefono
        this.direccion=direccion
        this.biografia=biografia
        this.id=id
        //--- apuntadores
        this.izquierda=null;
        this.derecha=null;
        
    }
}//Fin nodo abb

class abb{
    constructor(){
        this.raiz=null;
        this.strGraphviz="digraph G { \n"
        this.tamaño=0
        this.regreso=0
    }//fin constructor

    insertarInterno(id,nombre_autor,raiz,dpi,correo,telefono,direccion,biografia){
        if(raiz==null){raiz = new nodoabb(id,nombre_autor,dpi,correo,telefono,direccion,biografia);}
        else{
            if(nombre_autor>raiz.nombre_autor){raiz.derecha = this.insertarInterno(id,nombre_autor,raiz.derecha,dpi,correo,telefono,direccion,biografia);}
            else{raiz.izquierda = this.insertarInterno(id,nombre_autor,raiz.izquierda,dpi,correo,telefono,direccion,biografia);}
        }// fin else
        return raiz
    }// fin insertar interno

    insertar(nombre_autor,dpi,correo,telefono,direccion,biografia){
        this.raiz = this.insertarInterno(this.tamaño,nombre_autor,this.raiz,dpi,correo,telefono,direccion,biografia)
        this.tamaño=this.tamaño+1
    }// Fin insertar

    anidarNodosGrafica(raiz){
        if (raiz!=null){
            this.strGraphviz+=String(raiz.nombre_autor).replace(/ /g, "")+"[label=\""+raiz.nombre_autor+"\n"+raiz.dpi+"\n"+raiz.correo+"\n"+raiz.telefono+"\n"+raiz.direccion+"\"];\n"
            if(raiz.izquierda!=null){this.strGraphviz+=String(raiz.nombre_autor).replace(/ /g, "")+"->"+String(raiz.izquierda.nombre_autor).replace(/ /g, "")+";\n"}
            if(raiz.derecha!=null){this.strGraphviz+=String(raiz.nombre_autor).replace(/ /g, "")+"->"+String(raiz.derecha.nombre_autor).replace(/ /g, "")+";\n"}
            this.anidarNodosGrafica(raiz.izquierda);
            this.anidarNodosGrafica(raiz.derecha);
        }
    }//fin anidacion nodos grafica

    graficar(){
        this.strGraphviz="digraph G { \n";
        this.anidarNodosGrafica(this.raiz);
        this.strGraphviz+="\n}"
        return this.strGraphviz        
    }//fin graficar

    retornoId(id){
        this.retornoIddos(this.raiz,id)
        return this.regreso
    }

    retornoIddos(raiz,id){
        if (raiz!=null){
            if(raiz.id==id){
            this.regreso=raiz
            }
            if(raiz.id!=id){
            this.retornoIddos(raiz.izquierda,id);
            this.retornoIddos(raiz.derecha,id);}
        }
    }
    
    



}// fin abb

var abbAutores = new abb()



///////////////////////////////////////7 ORTOGONAL//////////////////////////////////////////////////////////////////


// ---------------------- Composicion de los encabezados ------------------------------------------------------------------

class nodoTitulosOrtogonal{
    constructor(posfc){
        // posiciondel titulo - vertical u horizontal
        this.posfc=posfc;
        // apuntadores
        this.siguiente=null;
        this.anterior=null;
        this.interno=null;
    }
}// noto Titulos

class listaTitulosOrtogonal{
    constructor(foc){
        this.foc=foc;
        this.tamaño=0;
        // apuntadores
        this.primero=null;
        this.ultimo=null;
    }// constructor

    insertarTitulo(newTitulo){
        this.tamaño=this.tamaño+1
        /// --- Aca si esta vacio todo --- //
        if(this.primero==null){this.ultimo=newTitulo; this.primero=newTitulo;}
        else{
            // ---------------------------- Aca ire viendo si el nuevo tiene posicionamiento antes o despues del primero
            // se verificara por medio de la posicion 
            if(newTitulo.posfc<this.primero.posfc){
                newTitulo.siguiente = this.primero;
                this.primero.anterior = newTitulo;
                this.primero=newTitulo;
            }// posicion menor
            /// ---------------Si no cumple o el nuevo es mayor que el primero entonces se verificara si es mayor que el ultimo
            else if(newTitulo.posfc>this.ultimo.posfc){
                this.ultimo.siguiente=newTitulo;
                newTitulo.anterior=this.ultimo;
                this.ultimo=newTitulo;
            }// segunda condicion
            // --- Si en cambio se ecuentra en medio, es decir antes que el ultimo y despues del primero lo aplicara aca
            // con un auxiliar recorriendo todos los existentes hasta que encuentre un lugar vacio :3 soy la mera verga
            else{
                var auxiliar = this.primero;
                while(auxiliar!=null){
                    if(newTitulo.posfc<auxiliar.posfc){
                        newTitulo.siguiente=auxiliar;
                        newTitulo.anterior=auxiliar.anterior;
                        auxiliar.anterior.siguiente=newTitulo;
                        auxiliar.anterior = newTitulo;
                        break;
                    }//primer if
                    else if(newTitulo.posfc>auxiliar.posfc){auxiliar=auxiliar.siguiente;}
                    else{break;}
                }// while
            }// tercera condicion
        }// fin else luego de VER SI ESTA VACIO
    }//Insertar Titulo

    // -- Metodo para ver si existe ya el titulo o nel, por posicion -- // 
    existenciaporposicion(posfc){
        var aux = this.primero;
        while (aux!=null){
            if(posfc==aux.posfc){
                return aux
            }
            aux=aux.siguiente;
        }
        return null
    }// fin existencia por posicion

}//fin listaTitulos


// ----------------------------------   Composicion de la matriz dispersa -------------------------------------

// -- Nodos del contenido
class nodoContenidoOrtogonal{
    constructor(x,y,isbn,nombre_autor,nombre_libro,cantidad,paginas,categoria){
        this.isbn=isbn;
        this.nombre_autor=nombre_autor
        this.nombre_libro=nombre_libro;
        this.cantidad=cantidad;
        this.paginas=paginas;
        this.categoria=categoria;
        //-- Posicion
        this.x=x;
        this.y=y;
        // apuntadores
        this.izquierda=null;
        this.derecha=null;
        this.arriba=null;
        this.abajo=null;
    }// finconstructor
}// fin nodo contenido

//------------------------------------------------ MATRIZ COMPLETA ---------------------------------------------------

class matrizOrtogonal{
    constructor(tamaño){
        this.columnas = new listaTitulosOrtogonal("columnas");
        this.filas = new listaTitulosOrtogonal("filas");
        this.tamaño=tamaño;
        for(var a=1;a<tamaño+1;a++){
            for(var b=1;b<tamaño+1;b++){
                this.insertar(b,a," "," "," "," "," "," ");
            }
        }
    }//fin constructor

    //------------------------------------------------- Insertar --------------------------------------------------

    insertar(x,y,isbn,nombre_autor,nombre_libro,cantidad,paginas,categoria){
        if(x>this.tamaño || y>this.tamaño){
            alert("Error el dato con x: "+x+" y y: "+y+" y contenido: "+contenido+" Es mayor al tamaño permitido")
        }
        else{
        // -- nodo con contenido nuevo
        var contenidoNuevo = new nodoContenidoOrtogonal(x,y,isbn,nombre_autor,nombre_libro,cantidad,paginas,categoria)
        // --- Se verificara si existen los titulos en las posiciones correspondientes al nuevo contenido
        var auxx = this.columnas.existenciaporposicion(x);
        var auxy = this.filas.existenciaporposicion(y);
        // ------   Para las columnas
        if (auxy==null){
            auxy= new nodoTitulosOrtogonal(y)
            this.filas.insertarTitulo(auxy)
        }
        // -- para las filas
        if(auxx==null){
            auxx= new nodoTitulosOrtogonal(x)
            this.columnas.insertarTitulo(auxx)
        }
        // -------------------------------------- Agregar contenido por fila y columna ---------------------
        // Por filas :3 
        // Si el apuntador interno de y esta vacio
        if(auxy.interno==null){auxy.interno=contenidoNuevo;}
        // Si el apuntador interno del contenido de y no esta vacio
        else{
            if(contenidoNuevo.x<auxy.interno.x){
                contenidoNuevo.derecha = auxy.interno;
                auxy.interno.izquierda = contenidoNuevo;
                auxy.interno=contenidoNuevo;
            }// if primero
            else{
                var auxiliarNodoy = auxy.interno;
                while(auxiliarNodoy!=null){
                    if(contenidoNuevo.x < auxiliarNodoy.x){
                        contenidoNuevo.derecha = auxiliarNodoy;
                        contenidoNuevo.izquierda=auxiliarNodoy.izquierda;
                        auxiliarNodoy.izquierda.derecha=contenidoNuevo;
                        auxiliarNodoy.izquierda=contenidoNuevo;
                        break;
                    }// primer if del while
                    else if (contenidoNuevo.y == auxiliarNodoy.y && contenidoNuevo.x == auxiliarNodoy.x){
                        auxiliarNodoy.isbn=isbn
                        auxiliarNodoy.nombre_autor=nombre_autor
                        auxiliarNodoy.nombre_libro=nombre_libro
                        auxiliarNodoy.cantidad=cantidad
                        auxiliarNodoy.paginas=paginas
                        auxiliarNodoy.categoria=categoria

                        break;}// segundo if del while
                    else{
                        if(auxiliarNodoy.derecha==null){
                            auxiliarNodoy.derecha = contenidoNuevo;
                            contenidoNuevo.izquierda=auxiliarNodoy;
                            break;
                        }// fin del primer if del else
                        else{ auxiliarNodoy = auxiliarNodoy.derecha;}
                    }// else del while
                }// fin while
            }// else del primer if
        }// else de apuntador interno no vacio
        // por columnas -- ya toy cansadito viera :,v
        if (auxx.interno==null){auxx.interno=contenidoNuevo;}
        // si no esta apuntando ya 
        else{
            if(contenidoNuevo.y<auxx.interno.y){
                contenidoNuevo.abajo=auxx.interno;
                auxx.interno.arriba=contenidoNuevo;
                auxx.interno=contenidoNuevo;
            }// primer if del else
            else{
                var nodoauxx=auxx.interno;
                while(nodoauxx!=null){
                    if(contenidoNuevo.y < nodoauxx.y){
                        contenidoNuevo.abajo=nodoauxx;
                        contenidoNuevo.arriba=nodoauxx.arriba;
                        nodoauxx.arriba.abajo=contenidoNuevo;
                        nodoauxx.arriba=contenidoNuevo;
                        break;
                    }//if del while
                    else if(contenidoNuevo.y==nodoauxx.y && contenidoNuevo.x == nodoauxx.x){
                        break;}
                    else{
                        if(nodoauxx.abajo ==null){
                            nodoauxx.abajo=contenidoNuevo;
                            contenidoNuevo.arriba=nodoauxx;
                            break;
                        }
                        else{nodoauxx=nodoauxx.abajo}
                    }//else interno del while
                }//while
            }// else interno del else
        }//else de las columnas
    }
    }// fin insertar

    //////////////////////////// ---------------- Graficar //////////////////////////////// -------------------------     

    graficar(){
        // ------------------------------- Nodo inicial y configuraciones -----------------------
        var strGrafica="digraph G{ \n"
        strGrafica+="graph[bgcolor=transparent]"
        strGrafica+="node[shape=box, width=0.5, height=0.5, fontname=\"Times New Roman\", fillcolor=\"white\", style=filled];\n"
        strGrafica+="edge[style = \"bold\"];\n";
        strGrafica+="node[label = \"0,0\" fillcolor=\"gray38\" pos = \"-1,1!\"]raiz;\n"
        strGrafica += "label = \"- Fantasia -\" \nfontname=\"Times New Roman\" \nfontsize=\"20pt\" \n \n"
        /// ----------------------------- Titulos ------------------------------------------
        // -- Se crean los nodos de los titulos de las filas -- 
        var auxfilas=this.filas.primero;
        var idy=0;
        while(auxfilas!=null){
            strGrafica+="\n\tnode[label = \""+auxfilas.posfc+"\" fillcolor=\"gray38\" pos=\"-1,-"+idy+"!\" shape=box]x"+auxfilas.posfc+";"
            auxfilas=auxfilas.siguiente;
            idy=idy+1;
        }// fin del while
        /// ----------  -- Se unen los nodos de los titulos de las filas
        auxfilas=this.filas.primero;
        while(auxfilas.siguiente!=null){
            strGrafica+= "\n\tx"+auxfilas.posfc+"->x"+auxfilas.siguiente.posfc+";"
            strGrafica+= "\n\tx"+auxfilas.posfc+"->x"+auxfilas.siguiente.posfc+"[dir=back];"
            auxfilas = auxfilas.siguiente
        }// fin while
        strGrafica += "\n\traiz->x"+this.filas.primero.posfc +";";
        ///-------------------------------------------------------------------------
        // --- Se crean los nodos de los titulos de las columnas -- 
        var auxcolumnas = this.columnas.primero;
        var idx=0;
        while(auxcolumnas!=null){
            strGrafica+="\n\tnode[label = \""+auxcolumnas.posfc+"\" fillcolor=\"gray38\" pos = \""+idx+",1!\" shape=box]y"+auxcolumnas.posfc+";";
            auxcolumnas=auxcolumnas.siguiente;
            idx=idx+1;
        }//while
        // ------ Se unen los nodos de los titulos de las columnas
        auxcolumnas = this.columnas.primero;
        while(auxcolumnas.siguiente!=null){
            strGrafica += "\n\ty"+auxcolumnas.posfc+"->y"+auxcolumnas.siguiente.posfc+";"
            strGrafica += "\n\ty"+auxcolumnas.posfc+"->y"+auxcolumnas.siguiente.posfc+"[dir=back];"
            auxcolumnas = auxcolumnas.siguiente
        }//while
        strGrafica += "\n\traiz->y"+this.columnas.primero.posfc+";"
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// --- Creando los nodos de contenidos desde las filas
        var auxfilass = this.filas.primero;
        var idyy =0;
        while(auxfilass!=null){
            var auxB = auxfilass.interno;
            while(auxB!=null){
                var auxye = this.columnas.primero;
                var idB=0;
                while(auxye!=null){
                    if(auxye.posfc==auxB.x){break;}
                    idB=idB+1;
                    auxye=auxye.siguiente;
                }//tercer while
                if(auxB.isbn!=""){
                    strGrafica += "\n\tnode[label=\""+auxB.nombre_libro+"\" fillcolor=\"white\" pos=\""+idB+",-"+idyy+"!\" shape=box]i"+auxB.y+"_"+auxB.x+";" 
                }
                auxB=auxB.derecha;
            }// segundo while
            // ----------------------- Union de celdas con titulos de filas
            auxB=auxfilass.interno;
            while(auxB!=null){
                if(auxB.derecha!=null){
                    strGrafica += "\n\ti"+auxB.y+"_"+auxB.x+"->i"+auxB.derecha.y+"_"+auxB.derecha.x+";"
                    strGrafica += "\n\ti"+auxB.y+"_"+auxB.x+"->i"+auxB.derecha.y+"_"+auxB.derecha.x+"[dir=back];"
                }
                auxB=auxB.derecha;
            }// while
            strGrafica += "\n\tx"+auxfilass.posfc+"->i"+auxfilass.interno.y+"_"+auxfilass.interno.x+";"
            strGrafica += "\n\tx"+auxfilass.posfc+"->i"+auxfilass.interno.y+"_"+auxfilass.interno.x+"[dir=back];"
            auxfilass = auxfilass.siguiente
            idyy = idyy+1
        }//while auxfilass
        /// ----------------- Se unen las columnas de los titulos con los contenidos anteriormente creados
        var auxColumn = this.columnas.primero;
        while(auxColumn!=null){
            var auxC = auxColumn.interno;
            while(auxC!=null){
                if(auxC.abajo!=null){
                    strGrafica += "\n\ti"+auxC.y+"_"+auxC.x+"->i"+auxC.abajo.y+"_"+auxC.abajo.x+";"
                    strGrafica += "\n\ti"+auxC.y+"_"+auxC.x+"->i"+auxC.abajo.y+"_"+auxC.abajo.x+"[dir=back];"
                }
                auxC=auxC.abajo;
            }//auxC!=null
            strGrafica += "\n\ty"+auxColumn.posfc+"->i"+auxColumn.interno.y+"_"+auxColumn.interno.x+";"
            strGrafica += "\n\ty"+auxColumn.posfc+"->i"+auxColumn.interno.y+"_"+auxColumn.interno.x+"[dir=back];"
            auxColumn=auxColumn.siguiente;
        }//auxcolumn != null
        strGrafica+="\n\n}" 
        return strGrafica;       
    }// Fin graficar


}// fin matriz ORTOGONAL


var librosOrtogonal = new matrizOrtogonal(25)






////////////////////////////////////      DISPERSA ////////////////////////////////////////////////////////////////////
// ---------------------- Composicion de los encabezados ------------------------------------------------------------------

class nodoTitulos{
    constructor(posfc){
        // posiciondel titulo - vertical u horizontal
        this.posfc=posfc;
        // apuntadores
        this.siguiente=null;
        this.anterior=null;
        this.interno=null;
    }
}// noto Titulos

class listaTitulos{
    constructor(foc){
        this.foc=foc;
        this.tamaño=0;
        // apuntadores
        this.primero=null;
        this.ultimo=null;
    }// constructor

    insertarTitulo(newTitulo){
        this.tamaño=this.tamaño+1
        /// --- Aca si esta vacio todo --- //
        if(this.primero==null){this.ultimo=newTitulo; this.primero=newTitulo;}
        else{
            // ---------------------------- Aca ire viendo si el nuevo tiene posicionamiento antes o despues del primero
            // se verificara por medio de la posicion 
            if(newTitulo.posfc<this.primero.posfc){
                newTitulo.siguiente = this.primero;
                this.primero.anterior = newTitulo;
                this.primero=newTitulo;
            }// posicion menor
            /// ---------------Si no cumple o el nuevo es mayor que el primero entonces se verificara si es mayor que el ultimo
            else if(newTitulo.posfc>this.ultimo.posfc){
                this.ultimo.siguiente=newTitulo;
                newTitulo.anterior=this.ultimo;
                this.ultimo=newTitulo;
            }// segunda condicion
            // --- Si en cambio se ecuentra en medio, es decir antes que el ultimo y despues del primero lo aplicara aca
            // con un auxiliar recorriendo todos los existentes hasta que encuentre un lugar vacio :3 soy la mera verga
            else{
                var auxiliar = this.primero;
                while(auxiliar!=null){
                    if(newTitulo.posfc<auxiliar.posfc){
                        newTitulo.siguiente=auxiliar;
                        newTitulo.anterior=auxiliar.anterior;
                        auxiliar.anterior.siguiente=newTitulo;
                        auxiliar.anterior = newTitulo;
                        break;
                    }//primer if
                    else if(newTitulo.posfc>auxiliar.posfc){auxiliar=auxiliar.siguiente;}
                    else{break;}
                }// while
            }// tercera condicion
        }// fin else luego de VER SI ESTA VACIO
    }//Insertar Titulo

    // -- Metodo para ver si existe ya el titulo o nel, por posicion -- // 
    existenciaporposicion(posfc){
        var aux = this.primero;
        while (aux!=null){
            if(posfc==aux.posfc){
                return aux
            }
            aux=aux.siguiente;
        }
        return null
    }// fin existencia por posicion

}//fin listaTitulos


// ----------------------------------   Composicion de la matriz dispersa -------------------------------------

// -- Nodos del contenido
class nodoContenido{
    constructor(x,y,isbn,nombre_autor,nombre_libro,cantidad,paginas,categoria){
        this.isbn=isbn;
        this.nombre_autor=nombre_autor
        this.nombre_libro=nombre_libro;
        this.cantidad=cantidad;
        this.paginas=paginas;
        this.categoria=categoria;
        //-- Posicion
        this.x=x;
        this.y=y;
        // apuntadores
        this.izquierda=null;
        this.derecha=null;
        this.arriba=null;
        this.abajo=null;
    }// finconstructor
}// fin nodo contenido

//------------------------------------------------ MATRIZ COMPLETA ---------------------------------------------------

class matrizDispersa{
    constructor(){
        this.columnas = new listaTitulos("columnas");
        this.filas = new listaTitulos("filas");
    }//fin constructor

    //------------------------------------------------- Insertar --------------------------------------------------

    insertar(x,y,isbn,nombre_autor,nombre_libro,cantidad,paginas,categoria){
        // -- nodo con contenido nuevo
        var contenidoNuevo = new nodoContenido(x,y,isbn,nombre_autor,nombre_libro,cantidad,paginas,categoria)
        // --- Se verificara si existen los titulos en las posiciones correspondientes al nuevo contenido
        var auxx = this.columnas.existenciaporposicion(x);
        var auxy = this.filas.existenciaporposicion(y);
        // ------   Para las columnas
        if (auxy==null){
            auxy= new nodoTitulos(y)
            this.filas.insertarTitulo(auxy)
        }
        // -- para las filas
        if(auxx==null){
            auxx= new nodoTitulos(x)
            this.columnas.insertarTitulo(auxx)
        }
        // -------------------------------------- Agregar contenido por fila y columna ---------------------
        // Por filas :3 
        // Si el apuntador interno de y esta vacio
        if(auxy.interno==null){auxy.interno=contenidoNuevo;}
        // Si el apuntador interno del contenido de y no esta vacio
        else{
            if(contenidoNuevo.x<auxy.interno.x){
                contenidoNuevo.derecha = auxy.interno;
                auxy.interno.izquierda = contenidoNuevo;
                auxy.interno=contenidoNuevo;
            }// if primero
            else{
                var auxiliarNodoy = auxy.interno;
                while(auxiliarNodoy!=null){
                    if(contenidoNuevo.x < auxiliarNodoy.x){
                        contenidoNuevo.derecha = auxiliarNodoy;
                        contenidoNuevo.izquierda=auxiliarNodoy.izquierda;
                        auxiliarNodoy.izquierda.derecha=contenidoNuevo;
                        auxiliarNodoy.izquierda=contenidoNuevo;
                        break;
                    }// primer if del while
                    else if (contenidoNuevo.y == auxiliarNodoy.y && contenidoNuevo.x == auxiliarNodoy.x){break;}// segundo if del while
                    else{
                        if(auxiliarNodoy.derecha==null){
                            auxiliarNodoy.derecha = contenidoNuevo;
                            contenidoNuevo.izquierda=auxiliarNodoy;
                            break;
                        }// fin del primer if del else
                        else{ auxiliarNodoy = auxiliarNodoy.derecha;}
                    }// else del while
                }// fin while
            }// else del primer if
        }// else de apuntador interno no vacio
        // por columnas -- ya toy cansadito viera :,v
        if (auxx.interno==null){auxx.interno=contenidoNuevo;}
        // si no esta apuntando ya 
        else{
            if(contenidoNuevo.y<auxx.interno.y){
                contenidoNuevo.abajo=auxx.interno;
                auxx.interno.arriba=contenidoNuevo;
                auxx.interno=contenidoNuevo;
            }// primer if del else
            else{
                var nodoauxx=auxx.interno;
                while(nodoauxx!=null){
                    if(contenidoNuevo.y < nodoauxx.y){
                        contenidoNuevo.abajo=nodoauxx;
                        contenidoNuevo.arriba=nodoauxx.arriba;
                        nodoauxx.arriba.abajo=contenidoNuevo;
                        nodoauxx.arriba=contenidoNuevo;
                        break;
                    }//if del while
                    else if(contenidoNuevo.y==nodoauxx.y && contenidoNuevo.x == nodoauxx.x){break;}
                    else{
                        if(nodoauxx.abajo ==null){
                            nodoauxx.abajo=contenidoNuevo;
                            contenidoNuevo.arriba=nodoauxx;
                            break;
                        }
                        else{nodoauxx=nodoauxx.abajo}
                    }//else interno del while
                }//while
            }// else interno del else
        }//else de las columnas
    }// fin insertar

    //////////////////////////// ---------------- Graficar //////////////////////////////// -------------------------     

    graficar(){
        // ------------------------------- Nodo inicial y configuraciones -----------------------
        var strGrafica="digraph G{ \n"
        strGrafica+="graph[bgcolor=transparent]"
        strGrafica+="node[shape=box, width=0.5, height=0.5, fontname=\"Times New Roman\", fillcolor=\"white\", style=filled];\n"
        strGrafica+="edge[style = \"bold\"];\n";
        strGrafica+="node[label = \"0,0\" fillcolor=\"gray38\" pos = \"-1,1!\"]raiz;\n"
        strGrafica += "label = \"- Thriller -\" \nfontname=\"Times New Roman\" \nfontsize=\"20pt\" \n \n"
        /// ----------------------------- Titulos ------------------------------------------
        // -- Se crean los nodos de los titulos de las filas -- 
        var auxfilas=this.filas.primero;
        var idy=0;
        while(auxfilas!=null){
            strGrafica+="\n\tnode[label = \""+auxfilas.posfc+"\" fillcolor=\"gray38\" pos=\"-1,-"+idy+"!\" shape=box]x"+auxfilas.posfc+";"
            auxfilas=auxfilas.siguiente;
            idy=idy+1;
        }// fin del while
        /// ----------  -- Se unen los nodos de los titulos de las filas
        auxfilas=this.filas.primero;
        while(auxfilas.siguiente!=null){
            strGrafica+= "\n\tx"+auxfilas.posfc+"->x"+auxfilas.siguiente.posfc+";"
            strGrafica+= "\n\tx"+auxfilas.posfc+"->x"+auxfilas.siguiente.posfc+"[dir=back];"
            auxfilas = auxfilas.siguiente
        }// fin while
        strGrafica += "\n\traiz->x"+this.filas.primero.posfc +";";
        ///-------------------------------------------------------------------------
        // --- Se crean los nodos de los titulos de las columnas -- 
        var auxcolumnas = this.columnas.primero;
        var idx=0;
        while(auxcolumnas!=null){
            strGrafica+="\n\tnode[label = \""+auxcolumnas.posfc+"\" fillcolor=\"gray38\" pos = \""+idx+",1!\" shape=box]y"+auxcolumnas.posfc+";";
            auxcolumnas=auxcolumnas.siguiente;
            idx=idx+1;
        }//while
        // ------ Se unen los nodos de los titulos de las columnas
        auxcolumnas = this.columnas.primero;
        while(auxcolumnas.siguiente!=null){
            strGrafica += "\n\ty"+auxcolumnas.posfc+"->y"+auxcolumnas.siguiente.posfc+";"
            strGrafica += "\n\ty"+auxcolumnas.posfc+"->y"+auxcolumnas.siguiente.posfc+"[dir=back];"
            auxcolumnas = auxcolumnas.siguiente
        }//while
        strGrafica += "\n\traiz->y"+this.columnas.primero.posfc+";"
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// --- Creando los nodos de contenidos desde las filas
        var auxfilass = this.filas.primero;
        var idyy =0;
        while(auxfilass!=null){
            var auxB = auxfilass.interno;
            while(auxB!=null){
                var auxye = this.columnas.primero;
                var idB=0;
                while(auxye!=null){
                    if(auxye.posfc==auxB.x){break;}
                    idB=idB+1;
                    auxye=auxye.siguiente;
                }//tercer while
                if(auxB.contenido!=""){
                    strGrafica += "\n\tnode[label=\""+auxB.nombre_libro+"\" fillcolor=\"white\" pos=\""+idB+",-"+idyy+"!\" shape=box]i"+auxB.y+"_"+auxB.x+";" 
                }
                auxB=auxB.derecha;
            }// segundo while
            // ----------------------- Union de celdas con titulos de filas
            auxB=auxfilass.interno;
            while(auxB!=null){
                if(auxB.derecha!=null){
                    strGrafica += "\n\ti"+auxB.y+"_"+auxB.x+"->i"+auxB.derecha.y+"_"+auxB.derecha.x+";"
                    strGrafica += "\n\ti"+auxB.y+"_"+auxB.x+"->i"+auxB.derecha.y+"_"+auxB.derecha.x+"[dir=back];"
                }
                auxB=auxB.derecha;
            }// while
            strGrafica += "\n\tx"+auxfilass.posfc+"->i"+auxfilass.interno.y+"_"+auxfilass.interno.x+";"
            strGrafica += "\n\tx"+auxfilass.posfc+"->i"+auxfilass.interno.y+"_"+auxfilass.interno.x+"[dir=back];"
            auxfilass = auxfilass.siguiente
            idyy = idyy+1
        }//while auxfilass
        /// ----------------- Se unen las columnas de los titulos con los contenidos anteriormente creados
        var auxColumn = this.columnas.primero;
        while(auxColumn!=null){
            var auxC = auxColumn.interno;
            while(auxC!=null){
                if(auxC.abajo!=null){
                    strGrafica += "\n\ti"+auxC.y+"_"+auxC.x+"->i"+auxC.abajo.y+"_"+auxC.abajo.x+";"
                    strGrafica += "\n\ti"+auxC.y+"_"+auxC.x+"->i"+auxC.abajo.y+"_"+auxC.abajo.x+"[dir=back];"
                }
                auxC=auxC.abajo;
            }//auxC!=null
            strGrafica += "\n\ty"+auxColumn.posfc+"->i"+auxColumn.interno.y+"_"+auxColumn.interno.x+";"
            strGrafica += "\n\ty"+auxColumn.posfc+"->i"+auxColumn.interno.y+"_"+auxColumn.interno.x+"[dir=back];"
            auxColumn=auxColumn.siguiente;
        }//auxcolumn != null
        strGrafica+="\n\n}" 
        return strGrafica;       
    }// Fin graficar


}// fin matriz dispersa

var librosDispersa = new matrizDispersa()

class nodolibros{
    constructor(id,isbn,nombre_autor,nombre_libro,cantidad,paginas,categoria){
        this.id=id
        this.isbn=isbn;
        this.nombre_autor=nombre_autor
        this.nombre_libro=nombre_libro;
        this.cantidad=cantidad;
        this.paginas=paginas;
        this.categoria=categoria;
        this.siguiente=null;
    }//Fin constructor
}//Fin nodo cola

class listaLibros{
    constructor(){
        this.primero=null;
        this.ultimo=null;
        this.tamaño=0
    }//Fin constructor

    insertar(isbn,nombre_autor,nombre_libro,cantidad,paginas,categoria){
        var nuevo = new nodolibros(this.tamaño,isbn,nombre_autor,nombre_libro,cantidad,paginas,categoria)
        if(this.primero==null && this.ultimo==null){
            this.primero=nuevo;
            this.ultimo=nuevo;    
        }
        else{
            this.ultimo.siguiente=nuevo
            this.ultimo=this.ultimo.siguiente
        }
        this.tamaño=this.tamaño+1
    }// fin insertar

    imprimir(){
        var aux = this.primero;
        while(aux!=null){
            console.log(aux.isbn)
            aux=aux.siguiente
        }
    }// fin imprimir

    retornar(id){
        var aux = this.primero;
        while(aux!=null){
            if(aux.id==id){return aux}
            aux=aux.siguiente
        }
    }// fin imprimir

}
var listaLb=new listaLibros()




class nodoPila{
    constructor(id){
        this.id=id;
        this.siguiente=null;
    }//Fin constructor
}//Fin nodo cola

class pila{
    constructor(){
        this.primero=null;
        this.ultimo=null;
    }//Fin constructor

    insertar(id){
        var nuevo = new nodoPila(id)
        if(this.primero==null && this.ultimo==null){
            this.primero=nuevo;
            this.ultimo=nuevo;    
        }
        else{
            this.ultimo.siguiente=nuevo
            this.ultimo=this.ultimo.siguiente
        }
    }// fin insertar

    imprimir(){
        var aux = this.primero;
        if(aux==null){alert("No existen aun elementos en la pila")}
        while(aux!=null){
            alert(aux.id)
            aux=aux.siguiente
        }
    }// fin imprimir

    grafica(){
        var strGraficaUno="digraph G { \n rankdir=\"TB\";\n"
        var nodoaux=this.primero;
        while(nodoaux!=null){
        strGraficaUno+=nodoaux.id+"[label=\""+nodoaux.id+"\"];\n"
        if(nodoaux.siguiente!=null){strGraficaUno+=nodoaux.id+"->"+nodoaux.siguiente.id+";\n"}
        nodoaux=nodoaux.siguiente;}
        strGraficaUno+="}"
        console.log(strGraficaUno)
        return strGraficaUno
    } // graficauno




}//fin clase cola



class nodoCola{
    constructor(id,cliente,nombre_libro){
        this.id=id;
        this.cliente=cliente
        this.nombre_libro=nombre_libro
        this.cantidad=0
        this.siguiente=null;
    }//Fin constructor
}//Fin nodo cola

class cola{
    constructor(){
        this.primero=null;
        this.ultimo=null;
        this.tamaño=0
    }//Fin constructor

    insertar(cliente,nombre_libro,cantidad){
        var nuevo = new nodoCola(this.tamaño,cliente,nombre_libro,cantidad)
        nuevo.cantidad=1
        if(this.primero==null && this.ultimo==null){
            this.primero=nuevo;
            }
        else{
            nuevo.siguiente=this.primero;
            this.primero=nuevo;
        }
        this.tamaño=this.tamaño+1
    }// fin insertar

    imprimir(){
        var aux = this.primero;
        if(aux==null){alert("No existen aun elementos en la cola")}
        while(aux!=null){
            alert(aux.id)
            aux=aux.siguiente
        }
    }// fin imprimir

    sumarCantidad(cliente,libro){
        var aux = this.primero;
        while(aux!=null){
            if(aux.cliente==cliente && aux.nombre_libro==libro){aux.cantidad=aux.cantidad+1
            return true}
            aux=aux.siguiente
        }
    }

    grafica(){
        var strGraficaUno="digraph G { \n rankdir=\"RL\";\n"
        var nodoaux=this.primero;
        while(nodoaux!=null){
        strGraficaUno+=nodoaux.id+"[label=\""+nodoaux.cliente+"\n"+nodoaux.nombre_libro+"\n"+nodoaux.cantidad+"\"];\n"
        if(nodoaux.siguiente!=null){strGraficaUno+=nodoaux.id+"->"+nodoaux.siguiente.id+";\n"}
        nodoaux=nodoaux.siguiente;}
        strGraficaUno+="}"
        console.log(strGraficaUno)
        return strGraficaUno
    } // graficauno




}//fin clase cola


var colaVentas = new cola()








//////////////////////////////////////////////////////////////////////////////////////////////


// ----------------------- Variables globales ---------------------------- //
// -----------------------    ADMINISTRADOR      ---------------------------- //
var barraAdministrador = document.getElementById("barraAdministrador")
barraAdministrador.style.display="none"
var principalAdmin = document.getElementById("principalAdmin")
principalAdmin.style.display="none"
var usuariosAdmin = document.getElementById("usuariosAdmin")
usuariosAdmin.style.display="none"
var autoresAdmin = document.getElementById("autoresAdmin")
autoresAdmin.style.display="none"
var librosAdmin = document.getElementById("librosAdmin")
librosAdmin.style.display="none"
// -----------------------    SIN LOGIN      ---------------------------- //
// ----------------------- PAGINA sin login ---------------------------- //
var paginaPrincipal = document.getElementById("paginaPrincipal")
var login = document.getElementById("login")
login.style.display="none"
var navBarInicial = document.getElementById("navBarInicial")
var librossinlogin=document.getElementById("librosSinLogin")
librossinlogin.style.display="none"
// --------------------- PARA EL LOGIN ---------------------------------
var userLogin = document.getElementById("userLogin").value
var passwordLogin = document.getElementById("passwordLogin").value
// ----------------------- Fin variables globales ----------------------------- //
var dpiLogeado=""

////////////////////////// USUARIO /////////////////////////////////////////
var navUsuario = document.getElementById("navUsuario")
navUsuario.style.display="none"
var principalUsuario=document.getElementById("principalUsuario")
principalUsuario.style.display="none"
var autoresUsuario = document.getElementById("usuarioAutores")
autoresUsuario.style.display="none"
var busquedaAutor=document.getElementById("busquedaAutor")
busquedaAutor.style.display="none"
var librosUsuario =document.getElementById("librosUsuario")

var librosusuarios2 =document.getElementById("librosusuarios2")
librosusuarios2.style.display="none"
////////////////////////////////////////// Funciones para el usuario
function irAutoresUsuario(){
    principalUsuario.style.display="none"
    autoresUsuario.style.display="block"
    mostrarAutoresUsuario()
    busquedaAutor.style.display="block"
    librosusuarios2.style.display="none"
}


function iraLibrosUsuario(){
    principalUsuario.style.display="none"
    autoresUsuario.style.display="none"
    busquedaAutor.style.display="none"
    mostrarLibros()
    librosusuarios2.style.display="block"
}

function logoutUsuario(){
        login.style.display="block"
        navBarInicial.style.display="block"
        navUsuario.style.display="none"
        principalUsuario.style.display="none"
        autoresUsuario.style.display="none"
        busquedaAutor.style.display="none"
        librosusuarios2.style.display="none"
        
}



//////////////////////AUTORES USUARIO
function mostrarAutoresUsuario(){
    var l=0
    var strAutores=""
    while(l<abbAutores.tamaño){
    var retornado = abbAutores.retornoId(l)
    strAutores+='<div class="col-xl-2 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" ><img src="http://www.capitalmexico.com.mx/wp-content/uploads/2017/05/autor.png" width="50" ></div><div class="h5 mb-0 font-weight-bold text-gray-800">'+retornado.nombre_autor+'<hr><button  class="btn btn-success btn-sm" onclick="verDatosAutor('+l+')">Ver datos</input></div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
    l=l+1
    }
    document.getElementById("autoresUsuario").innerHTML=strAutores
}

function verDatosAutor(id){
    var uso = abbAutores.retornoId(id)
    document.getElementById("autoresUsuario").innerHTML='<hr>   <hr>  <div class="col-xl-2 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"> <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Biografia</div> <div class="h5 mb-0 font-weight-bold text-gray-800">'+uso.nombre_autor+'</div></div><div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div><hr><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Datos</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+uso.dpi+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+uso.correo+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+uso.telefono+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+uso.direccion+'</div> </div><div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div><hr><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Biografia</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+uso.biografia+'¿</div></div><div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i> </div></div></div></div></div>  <div class="h5 mb-0 font-weight-bold text-gray-800"><button  id="fileAutores" class="btn btn-success btn-sm" onclick="mostrarAutoresUsuario()">Regresar</input></div>'
}

function buscandoAutor(){
    var autorbuscar = document.getElementById("autorBusqueda").value
    var aunNo=false
    var n=0
    while(aunNo==false){
        var buscando = abbAutores.retornoId(n)
        if(buscando.nombre_autor==autorbuscar){
            console.log("yaaa")
            document.getElementById("resultadoBusquedaAutor").innerHTML='<div class="col-xl-2 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" ><img src="http://www.capitalmexico.com.mx/wp-content/uploads/2017/05/autor.png" width="50" ></div><div class="h5 mb-0 font-weight-bold text-gray-800">'+buscando.nombre_autor+'<hr><button  class="btn btn-success btn-sm" onclick="verDatosAutor('+n+')">Ver datos</input></div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
            aunNo=true
        }        
        if(abbAutores.tamaño==n){aunNo=true}
        n=n+1
    }
}








//////////// LIBROS





function mostrarLibros(){
    var l=0
    var strLibros='<button  class="btn btn-success btn-sm" onclick="verCola()">Ver Cola</button><hr><hr>'
    while(l<listaLb.tamaño){
    var retornado = listaLb.retornar(l)
    strLibros+='<div class="col-xl-2 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="h5 mb-0 font-weight-bold text-gray-800" ><img src="http://www.capitalmexico.com.mx/wp-content/uploads/2017/05/autor.png" width="50" ></div><div class="h5 mb-0 font-weight-bold text-gray-800">'+retornado.nombre_libro+'<hr><button  class="btn btn-success btn-sm" onclick="verDatosLibros('+l+')">Ver datos</button><hr><button  class="btn btn-success btn-sm" onclick="verPila('+l+')">Ver Pila</button><hr><button  class="btn btn-success btn-sm" onclick="comprarLibro('+l+')">Comprar</button></div></div> <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div>    '
    l=l+1
    }
    document.getElementById("librosUsuario").innerHTML=strLibros
    }

    function verDatosLibros(id){
        var uso = listaLb.retornar(id)
        document.getElementById("librosUsuario").innerHTML='<hr> <hr>   <hr>   <hr>  <div class="col-xl-2 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"> <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Biografia</div> <div class="h5 mb-0 font-weight-bold text-gray-800">'+uso.nombre_libro+'</div></div><div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div><hr><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Datos</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+uso.isbn+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+uso.nombre_autor+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+uso.cantidad+'</div></div></div></div></div><hr><hr><div class="col-xl-8 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">'+uso.categoria+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+uso.paginas+'</div></div><div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i> </div></div></div></div></div>  <div class="h5 mb-0 font-weight-bold text-gray-800"><button  class="btn btn-success btn-sm" onclick="mostrarLibros()">Regresar</input></div>'
}

function comprarLibro(idLibro){
    listaUsuarios.insertarInterno(dpiLogeado.dpi,listaLb.retornar(idLibro).isbn,listaLb.retornar(idLibro).nombre_libro)
    listaUsuarios.retornoId(dpiLogeado.dpi).cantidad=listaUsuarios.retornoId(dpiLogeado.dpi).cantidad+1
    listaLb.retornar(idLibro).cantidad=listaLb.retornar(idLibro).cantidad-1
    //////////////////////////////////////////////////
    if(colaVentas.sumarCantidad(dpiLogeado.nombre_usuario,listaLb.retornar(idLibro).nombre_libro)==true){}
    else{colaVentas.insertar(dpiLogeado.nombre_usuario,listaLb.retornar(idLibro).nombre_libro)}
}

function verPila(idLibro){
    var pilaLibros = new pila()
    var cantidadpila = listaLb.retornar(idLibro).cantidad
    document.getElementById("librosUsuario").innerHTML='<h1>'+listaLb.retornar(idLibro).nombre_libro+'</h1><button  class="btn btn-success btn-sm" onclick="mostrarLibros()">Regresar</button></div> <div class="h5 mb-0 font-weight-bold text-gray-800" id="graficapilaLibros"></div>'
    for(var s=0;s<cantidadpila;s++){
        pilaLibros.insertar(s)
    }
    var strpila=pilaLibros.grafica()
    d3.select("#graficapilaLibros").graphviz()
    .width(2000)
    .height(1000)
    .renderDot(strpila) 
}

function verCola(){
    document.getElementById("librosUsuario").innerHTML='<h1>Cola de libros</h1><button  class="btn btn-success btn-sm" onclick="mostrarLibros()">Regresar</button></div> <div class="h5 mb-0 font-weight-bold text-gray-800" id="graficacolaLibros"></div>'
    var strcola=colaVentas.grafica()
    d3.select("#graficacolaLibros").graphviz()
    .width(2000)
    .height(1000)
    .renderDot(strcola) 
}



/// ------------------------------------- Funciones para las paginas sin login

function iraLogin(){
    paginaPrincipal.style.display="none"
    login.style.display="block"    
    librossinlogin.style.display="none"
}

function iraPrincipal(){
    paginaPrincipal.style.display="block"
    login.style.display="none"    
    librossinlogin.style.display="none"
}

function iralibrossinLogin(){
    paginaPrincipal.style.display="none"
    login.style.display="none"    
    librossinlogin.style.display="block"
    var miaud=librosOrtogonal.graficar()
    d3.select("#thrillerSinLogin")
    .graphviz()
    .engine("neato")
    .width(2000)
    .height(4000)
    .dot(miaud)
    .render()
    var miau=librosDispersa.graficar()
d3.select("#fantasiaSinLogin")
.graphviz()
.engine("neato")
.width(2000)
.height(1000)
.dot(miau)
.render()

}

function verificarLogin(){
    userLogin = document.getElementById("userLogin").value
    passwordLogin = document.getElementById("passwordLogin").value
    // ---------------- Verificador ------------------------ /
    var verificarUser = listaUsuarios.retornoEncontrado(userLogin,passwordLogin)
    // --------------- Administrador ------------------------ /
    if(verificarUser.rol=="Administrador"){
        barraAdministrador.style.display="block"
        principalAdmin.style.display="block"
        login.style.display="none"
        navBarInicial.style.display="none"
        document.getElementById("nameadmin").innerHTML='<div class="sidebar-brand-text mx-3">'+verificarUser.nombre_usuario+'</div>'
        document.getElementById("datosAdmin").innerHTML='<div class="h5 mb-0 font-weight-bold text-gray-800">'+verificarUser.nombre_completo+'\n'+verificarUser.dpi+'\n'+verificarUser.correo+'\n'+verificarUser.contrasenia+'\n'+verificarUser.telefono+'</div>'
    }
    if(verificarUser.rol=="Usuario"){
        dpiLogeado=verificarUser
        navBarInicial.style.display="none"
        login.style.display="none"
        navUsuario.style.display="block"
        principalUsuario.style.display="block"
        principalUsuario.innerHTML=' <hr>   <hr>  <div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"> <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Bienvenido a la Biblioteca</div> <div class="h5 mb-0 font-weight-bold text-gray-800">'+verificarUser.nombre_completo+'</div></div><div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div><hr><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Datos</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+verificarUser.dpi+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+verificarUser.nombre_usuario+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+verificarUser.correo+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+verificarUser.rol+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+verificarUser.contrasenia+'</div><div class="h5 mb-0 font-weight-bold text-gray-800">'+verificarUser.telefono+'</div> </div><div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div></div></div></div></div><hr><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Compras</div><div class="h5 mb-0 font-weight-bold text-gray-800"> -- aki va el numero </div></div><div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i> </div></div></div></div></div>'
    }  
    
}// fin verificar login


// --------------------------------------- Fin para las funciones de paginas sin login

// ------------------------------------- Funciones para el administrador ---------------------------

function logout(){
    barraAdministrador.style.display="none"
        principalAdmin.style.display="none"
        login.style.display="block"
        navBarInicial.style.display="block"
        usuariosAdmin.style.display="none"
        autoresAdmin.style.display="none"
        librosAdmin.style.display="none"
}

function irAusuariosAdmin(){
    principalAdmin.style.display="none"
    usuariosAdmin.style.display="block"
    autoresAdmin.style.display="none"
    librosAdmin.style.display="none"
}

function irAautoresAdmin(){
    principalAdmin.style.display="none"
    usuariosAdmin.style.display="none"
    autoresAdmin.style.display="block"
    librosAdmin.style.display="none"
}

function irAlibrosAdmin(){
    principalAdmin.style.display="none"
    usuariosAdmin.style.display="none"
    autoresAdmin.style.display="none"
    librosAdmin.style.display="block"
    
}


/// -----------------------------------------------------------------------

//usuarios
function lectorUsuarios(event){
    var archivo=event.target;
    var lector=new FileReader();
    lector.onload=function(){
        var json_contenido=lector.result
        usuariosjson=JSON.parse(json_contenido)
        usuariosjson.forEach(usuario => {
            listaUsuarios.insertar(usuario.dpi,usuario.nombre_completo,usuario.nombre_usuario,usuario.correo,usuario.rol,usuario.contrasenia,usuario.telefono)
            
        });
    }
    lector.readAsText(archivo.files[0])
}
document.getElementById('fileUsuarios').addEventListener('change',lectorUsuarios,false);

function graficaEstructuraUsers(){
var miau=listaUsuarios.grafica()
d3.select("#graficaEstructuraUsuarios").graphviz()
.width(1050)
.height(350)
.renderDot(miau)
}

//autores
function lectorAutores(event){
    var archivo=event.target;
    var lector=new FileReader();
    lector.onload=function(){
        var json_contenido=lector.result
        usuariosjson=JSON.parse(json_contenido)
        usuariosjson.forEach(autores => {
            abbAutores.insertar(autores.nombre_autor,autores.dpi,autores.correo,autores.telefono,autores.direccion,autores.biografia)            
        });
    }
    lector.readAsText(archivo.files[0])
}
document.getElementById('fileAutores').addEventListener('change',lectorAutores,false);



function graficaAutores(){
var miau=abbAutores.graficar()
d3.select("#graficaautores").graphviz()
.width(2050)
.height(1000)
.renderDot(miau)
}


function lectorLibros(event){
    var archivo=event.target;
    var lector=new FileReader();
    lector.onload=function(){
        var json_contenido=lector.result
        usuariosjson=JSON.parse(json_contenido)
        usuariosjson.forEach(libros => {
            if(libros.categoria=="Thriller" || libros.categoria=="Fantasia"){
                listaLb.insertar(libros.isbn,libros.nombre_autor,libros.nombre_libro,libros.cantidad,libros.paginas,libros.categoria)
            }
            if(libros.categoria=="Thriller"){
                librosDispersa.insertar(libros.columna,libros.fila,libros.isbn,libros.nombre_autor,libros.nombre_libro,libros.cantidad,libros.paginas,libros.categoria)
            }
            else if(libros.categoria=="Fantasia"){
                librosOrtogonal.insertar(libros.columna,libros.fila,libros.isbn,libros.nombre_autor,libros.nombre_libro,libros.cantidad,libros.paginas,libros.categoria)
            }   
            else{console.log("No tiene categoria")}                    
        });
    }
    lector.readAsText(archivo.files[0])
}
document.getElementById('fileLibros').addEventListener('change',lectorLibros,false);






function graficaOrtogonal(){
    var miau=librosOrtogonal.graficar()
    d3.select("#graficalibros")
    .graphviz()
    .engine("neato")
    .width(2000)
    .height(3000)
    .dot(miau)
    .render()
    }

function graficaDispersa(){
var miau=librosDispersa.graficar()
d3.select("#graficalibros")
.graphviz()
.engine("neato")
.width(2000)
.height(3000)
.dot(miau)
.render()
}