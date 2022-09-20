
class Inventario{
    constructor(){
        this._productos = new Array();
    }

    agregar(producto){
        this._productos.push(producto);
    } 
    
    buscar(codigo){
        let i = 0;
        while(i< this._productos.length){
            if(this._productos[i].getCodigo() === codigo){
                return this._productos[i];
            }
            i++;
        }
        return null;
    }

    eliminar(codigo){
        let c = 0;
        let aux = 0;
        let num = 0;
        let e = false;
        
        while(c < this._productos.length){
            if(this._productos[c].getCodigo() === codigo){
                num = c;
                aux = this._productos[c];
                e = true;
            }
            c++;
        }

        if(e === false){
            return -1;
        }else{
            for(let i = num; i <= this._productos.length - 1; i++){
                this._productos[i] = this._productos[i + 1];
            }
            this._productos.pop();
            return 1;
        }
    }

    listado(){
        let lista = '';

        if(this._productos.length === 0){
            return -1;
        }else{
            for(let i = 0; i < this._productos.length; i++){
                lista += `<br>${this._productos[i].getInfo()}`; 
            }
            return lista;
        }
    }

    listadoInverso(){
        let lista = "";

        if(this._productos.length === 0){
            return -1;
        }else{
            for(let i = this._productos.length-1; i >= 0; i--)
            {
                lista += `<br>${this._productos[i].getInfo()}`; 
            }
            return lista;
        }
    }

    cantidad(){
        return this._productos.length;
    }
}

//Ramos Macías Carmen Shaireni 3°G