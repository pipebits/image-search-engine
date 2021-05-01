const fetch = require("node-fetch");

const optionsParser = require('./OptionsManager.js')

function requestImage(query, options){
    query = encodeURIComponent(query)
    var url = `https://www.google.com/search?q=${query}&tbm=isch&ie=UTF-8&oe=UTF-8${optionsParser(options)}`;
    return new Promise( (resolve, reject) => {
        fetch(`https://www.google.com/search?q=${query}&tbm=isch&ie=UTF-8&oe=UTF-8${optionsParser(options)}`)
        .then( res => res.text() )
        .then( res => {
            resolve(res)
        })
        .catch( err => reject(err) )
    })
}

module.exports = requestImage;