console.log("hello world!");

let  hello : string ="hello world!";
console.log(hello);

// varible in programming example 1

let FavouriteDish ="biryani";
console.log(FavouriteDish);

// example 2

let flowerName :  string =" rose";
console.log(flowerName);

//example 1 non programming            / print second value

let studentName : string =" bilal"; 
//studentName = 234 error
studentName = "umer";
console.log(studentName);

// example 2 

let ColorName : any = "#ffEcDo"; 
ColorName =" #ffDoEc";
console.log(ColorName);

// example 1 data types in typescript 

let userName : string = "bilal ";
let lastName : string =" anwar ";
let contact : number = 920313456;
let websit : any  = " httpps // www. bilal anwar.com";
let anotherInformation : null = null;
let male : boolean = true;

console.log(userName,lastName);
console.log(contact,websit);
console.log(anotherInformation);
console.log(male);

// example 2 data types

let fullName :string = "umer anwar";
let work : string =" checker";
let IdNumber :  number = 12347;
let off : any = " 4 days";
let leave : null = null ;
let reason : boolean = false ;

console.log(fullName);
console.log(work);
console.log(IdNumber);
console.log(off);
console.log(leave);
console.log(reason);

// simple calculator arthimetic opertaor
// fixed value
const first_num= 4;
const second_num=7;
console.log("the answer of sum is :", first_num +second_num);
console.log( "the answer of division is :", first_num  / second_num);
console.log("the answer of multiplication is :" , first_num *second_num);
console.log("the answer of subtract is :" ,first_num - second_num);

//example 2 concatination     

let three_num = "8";
let four_num = "5";
let five_num = "3";

console.log(three_num+five_num +four_num);
console.log(four_num + five_num + three_num);

//example 3 
// non fixed value

let firstName = "bilal";
let secondName = " umer";
let thirdName = "anwar";
let fourthName ="hamza";
let fifth = " imran";

console.log(firstName + thirdName);
console.log(secondName + thirdName + fifth + fourthName);
console.log(fourthName+fifth);

//  cases camelCase personName ,snake_case person_name , pascalCase PersonName

let animalName : string =" cat ";
let nick_name : null = null;
let FavouriteFood : any = " fish ";
let Age : number  = 3;
let FavoriteDrinkMilk : boolean = true;

console.log(animalName);
console.log(nick_name);
console.log(FavouriteFood);
console.log(Age);
console.log(FavoriteDrinkMilk);

// example 2 

let favouriteCricketerName : string = " babar azam ";
let his_age : number  = 30;
let FavouriteColor : any =" black";
let  his_biggest_dream : null = null ;
let HeIsMarried : boolean = false;

console.log(favouriteCricketerName);
console.log(his_age,FavouriteColor);
console.log(his_biggest_dream,HeIsMarried);

//arrays[] o,1,2,3....
//example 1

const fruitName : string [] = [ "apple","banana","mango" ,"orango"]
for(  const fruits of fruitName ){
console.log(fruitName);
}
//example 2

let BirdsName : string [] = ["peacock","duck","eagle","owl","parrot" ,"crow"]
let one =BirdsName[1]
console.log(one);
let zero = BirdsName[0]
console.log(zero);
let three = BirdsName[3]
console.log(three);
let four = BirdsName[4]
console.log(four);
let five = BirdsName[5]
console.log(five);
let two = BirdsName[2]
console.log(two);

//example 2

let Data : any [] = ["35788990", "bilal","25","5.8","ada",true,null,]
let IdCardNo = Data[0]
console.log(IdCardNo);
let personName = Data[1]
console.log(personName);
let age = Data[2]
console.log(age);
let height = Data[3]
console.log(height);
let Education = Data[4]
console.log(Education);
let Experience10Year = Data[5]
console.log(Experience10Year);
let salary = Data[6]
console.log(salary);






