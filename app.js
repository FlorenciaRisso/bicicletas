let datosBici = require("./datosBici");

let dhBici = {
    bicicletas: datosBici.readJson(),
    buscarBici: function(id){
        return this.bicicletas.filter(bici => bici.id == id)[0] || null;
        /*let resultado = this.bicicletas.filter(bici => bici.id == id);
    if(resultado.length==0){
        resultado=null;
       
    } return resultado*/
    },
    venderBici: function(id){
        let resultado;
        let biciEncontrada = this.buscarBici(id)
        if(biciEncontrada){
            if(!biciEncontrada.vendida){
                biciEncontrada.vendida = true
                resultado = biciEncontrada
            }else{
                resultado = "Bicicleta Vendida"
            }
        }else{
            resultado = "Bicicleta no encontrada"
        }
        return resultado
    },
    biciParaLaVenta: function(){
        return this.bicicletas.filter(bici => !bici.vendida);
    },
    totalDeVentas: function(){
        return this.bicicletas.filter(bici => bici.vendida).reduce((total, bici) => total + bici.precio, 0);
    }
    
}
//console.log(dhBici.buscarBici(1));
console.log(dhBici.venderBici(3));
//console.log(dhBici.biciParaLaVenta());
//console.log(dhBici.totalDeVentas());
//console.log(dhBici.bicicletas);