// function favMovie(movie = "The Room", name = "world"){
//     console.log(`My name is ${name}, my favorite movie is ${movie}`);
// }

// favMovie("300","Matt");

let favMovie = (movie = 'The Room', name = 'world') => console.log(`My name is ${name}, my favorite movie is ${movie}`);
favMovie();

let getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName('Matt Cook'));

let getFirstName2 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName2('Matt Cook'))



    let newFunc = ((num1, num2) => ({
        squared: Math.pow(num1, num2),
        product: num1 * num2
    }
    ))(2,3);
    
console.log(`${newFunc.squared} ${newFunc.product}`);