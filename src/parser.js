var htmlparser = require('htmlparser2');

function parser(html){
    var result = [];

    var parser = new htmlparser.Parser({
        onopentag: function(name, attributes){
            if(attributes.class == "t0fcAb"){
                result.push(attributes.src)
                //console.log(attributes.src)
            }
        }
    }, {decodeEntities: true});

    parser.write(html);
    parser.end();

    return result[0];
}

module.exports = parser
