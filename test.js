const image_finder = require("./index")

async function main(){
    console.log(await image_finder.find("Hello!", {color: "black"}))

    console.log(await  image_finder.find("Pink Elephant", {size: "large", color: "pink"}))
}

main()