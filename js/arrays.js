//INDEXING IN JS
function first_element(arr){
    fe = arr[0]
    return console.log(fe)
}

//TESTS
const arr = [45,1,2,3,4,5,6] //arrays in JS are []
first_element(arr)

//ARRAYS IN JS
//Arrays as will be the case with masscode
//correct
const cararr = [
    {
        car: {
            make: 'Honda',
            model:'Accord', 
            year:1998}
        },
    {
        car: {
            make:'chevy',
            model:'Equninox', 
            year:2014}
        }

]

//MODIFYING AN ARRAY OF DICTIONARIES
function mod_car(arr,make,model,year) { //push,unshift,concat
    arr.car = {}
    {arr.car = {make:make, model:model, year:year}}
    console.log(arr)
  }

//TESTS
new_arr = mod_car(cararr, "Toyota","Corolla", 1990)
//new_arr = mod_car(new_arr, "Mercedes","Benz", 1990)

//ASSIGNING TO AN ARRAY OF DICTIONARIES
const cararr_mod = cararr.map(object => {
    return Object.assign(object , {make:'Toyota', model:'Corolla', year:1998})
});

//TESTS
console.log(cararr_mod)
  
//LOOP THROUGH AN ARRAY
var arrs = ["Hi", "Hello", "Bonjour", "Hola"];
arrs.push("Salut", "Hey");
console.log(cararr)
for (var i = 0; i < cararr.length; i++) {
    console.log(cararr[i]);
  }