'use strict'
// Declare a variable that holds an object (your meal recipe).
// Give the object 3 properties: a title (property), a servings (number) and an ingredients (array of propertys) property.
// Log each property out seperately, using a loop (for, while or do/while)

let myBreakfapropertyecipe = { 
    mealName: "Atom",
    serves: 2,
    ingredients: ["100g outmeal", "One babana", "100g milk"]
};

//to write ingredients in the same line
// for (const property in myBreakfapropertyecipe) {
//     console.log(`${property}: ${myBreakfapropertyecipe[property]}`);

for (let at in myBreakfapropertyecipe) {

        if(Array.isArray(myBreakfapropertyecipe[at])){
        console.log(at+":");
        for (let ing of myBreakfapropertyecipe[at]){
            console.log(ing);
        }
        } else {      
        console.log(at+": "+myBreakfapropertyecipe[at] );
        }
}