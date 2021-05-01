const requestImage = require("./src/request.js")
const parser = require("./src/parser.js")

/**
 * @param {String} query Query to search
 * @param {{size: "large" | "medium" | "small", color: "b&w" | "transparent" | "See documentation", type: "cp" | "ld" | "gf"}} options options to customize your query
 * @return {["Urls"]} Url of images
 * See documentation to read more...
*/

function find(query, options) {
    return new Promise( (resolve, reject) => {
        requestImage(query, options).then((res) => {
            resolve(parser(res))
        })
    })
}

module.exports.find = find;
