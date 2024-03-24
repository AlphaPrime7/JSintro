//SYNTAX 2

//for developers the syntax below works:
// export function hello(){}
function helloworld(stri){
    var stri = stri || console.warn('Small brain enter something?'); //OK Got it 🤣
    return console.log(stri !== null ? stri : 2);
    }

//TESTS
//run helloworld
helloworld('what is this?');
helloworld();