
# IMAGE SEARCH ENGINE

This module allows you to easily find the URL of images of any query as well as filtering between size, colors and types of images (You do not need a google API-key)

# Installation
To do the installation correctly you need to have [node](https://nodejs.org/en/)  installed
```
npm:
npm i discord-image-finder
```

## Usage

```js
const  image_finder  =  require("image-search-engine")
```
```js
async  function  printUrl(query){
	console.log(await  image_finder.find(query))
}
//This will return an image url
```
```js
console.log(await  image_finder.find("Pink Elephant", {size: "large", color: "pink"}))
//This will return an image of a pink elephant
```
## Options
 **Query**: Query to search **default**: none 
**Size** (optional): Image size **default**: all 
**Color** (optional): Color of the images **default**: all 
**Type** (optional): Type of the images **default**: all 
### Constraints :
#### Size:
 > **Large** | **Medium** | **Small**
#### Color:
>**b&w**: Black & White | **transparent** | **red** | **orange** | **yellow** | **green** | **teal** | **blue** | **purple** | **pink** | **white** | **gray** | **black** | **brown**
#### Type:
>**cp**: Clip Art
>**ld**: Line Art  
>**gf**: Gif (It will get the first frame of the gif)
