
// To use file system module fs:
// const fs = require('fs');
// fs.copyFileSync("file.txt", "file2.txt");

var superheroes = require("superheroes");
var mySuperHeroName = superheroes.random();
console.log(mySuperHeroName);

var supervillians = require('supervillains');
var mySuperVillian = supervillians.random();
console.log(mySuperVillian);
