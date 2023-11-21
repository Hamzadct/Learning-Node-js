var data = require('./script')
// console.log(data);
var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke()
console.log("getRandomJoke==>", getRandomJoke.body);

var getSpecificJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags':['dirty' , 'racist' , 'marriage']
})
console.log("getSpecificJoke==>", getSpecificJoke.body)
 var getMarriageRandomJoke = oneLinerJoke.getRandomJokeWithTag('marriage')
 console.log("getMarriageRandomJoke===>", getMarriageRandomJoke.body);