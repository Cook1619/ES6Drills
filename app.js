// function favMovie(movie = "The Room", name = "world"){
//     console.log(`My name is ${name}, my favorite movie is ${movie}`);
// }

// favMovie("300","Matt");

let favMovie = (movie = 'The Room', name = 'world') => console.log(`My name is ${name}, my favorite movie is ${movie}`);
favMovie();

let getFirstName = (fullName) => {
    //spilt indentifies the space between the words and separates them into it's own index in an array
    //then I grabb the first index [0] which would be my first name
    return fullName.split(' ')[0];
}
console.log(getFirstName('Matt Cook'));

let getFirstName2 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName2('Matt Cook'))



    let newFunc = ((num1, num2) => ({
        //squares the numbers
        squared: Math.pow(num1, num2),
        //multplies the numbers together
        product: num1 * num2
    }
    //First I tried calling the function normally, both came up undefined.
    //Why do I need to use an IFFE to get this to work?
    ))(2,3);
    
console.log(`${newFunc.squared} ${newFunc.product}`);

let spreadFunc = (name, location, favFood) =>{
    return (name, location, favFood);
} 
let arr1 = ['Matt','Mayer','Mexican']

spreadFunc(...arr1);

let name = "Matt";

let getName = (str) => {
    let arr2 = [...str];

}
getName(name);
