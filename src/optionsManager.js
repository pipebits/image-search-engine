let opIndex = require("./OptionsIndex.json")

function checkUnd(item, err){
    if(item==undefined){
        console.log(err)
    }
    return item
}

function parseOptions(options){
    var config = [];
    if(options.size){
        config.push(checkUnd(opIndex.size[options.size.toLowerCase()], `"${options.size}" is not a size option`))
    }
    if(options.color){
        config.push(checkUnd(opIndex.color[options.color.toLowerCase()], `"${options.color}" is not a color option`))
    }
    if(options.type){
        config.push(checkUnd(opIndex.type[options.type.toLowerCase()], `"${options.type}" is not a type option`))
    }
    /*if(options?.time){

    }*/
    return `${config.filter(item => item != undefined).length != 0? "&tbs=" : "" }${config.filter(item => item != undefined).join("%2C")}`
}

module.exports = parseOptions
