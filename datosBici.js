let fs = require ('fs');

let manejadorDeJson = {
    readJson: function(){
        let bicicletas = fs.readFileSync(__dirname + '/bicicletas.json', 'utf-8')
        return JSON.parse(bicicletas)
}
}
module.exports = manejadorDeJson
