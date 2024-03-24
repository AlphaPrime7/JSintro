// SYNTAX 1

/**
 * A basic hello function in JS
 * @param {String} stri {
 *   A simple string saying anything you want to say to GOD.
 * }
 * @returns {String} A string based on the user input.
 */

var hello = function(stri) {
    if(stri !== undefined) {
        return console.log(stri);
    } else {
        return console.warn("Enter a string");
    }
}

var hello_adj = function(stri) {
    if(stri !== undefined) {
        //console.log(typeof stri)
        return console.log(stri);
    } else {
        //npm install prompt-sync; optional is 
        var prompt = require('prompt-sync')(); //In JS define variables or funtions using packages and no added logic
        let  msg = prompt("Enter a message here:"); //Use defined prompt, value defined by user input; prompt(ask,value,opts)
        return console.log(msg);
    }
}

var hello_adjt = function(stri) {
    var stri = stri || console.warn('Small brain enter something?'); //OK Got it 🤣
    return console.log(stri !== null ? stri : 2);
}

var hello_adj_adv = function() {
    //my first method after understanding this concept, obviously console threw an error 😂
    var complete = require('prompt-sync-history');

    var prompt = require('prompt-sync')({
        history: require('prompt-sync-history')(),
        autocomplete: complete([]),
        sigint: false
      });
    
   var msg = prompt("Enter a message here:"); 
   console.log('enter echo * password');
   var pw = prompt({echo: '*'});
   var autocompleteTest = prompt('custom autocomplete: ', {
    autocomplete: complete([]) //i am guessing my list of passwords should come from the prompt_hist_file
  });

  prompt.history.save();

  var autocompleteTest = require('prompt-sync-history')

  console.log('\nmsg: %s\nPassword *: %s', msg, pw);
  console.log('autocomplete2: ', autocompleteTest);

   function complete(commands) {
    return function (str) {
      var i;
      var ret = [];
      for (i=0; i< commands.length; i++) {
        if (commands[i].indexOf(str) == 0)
          ret.push(commands[i]);
      }
      return ret;
    };
  };
}

//CONCLUSION: As can be seen here this syntax looks very similar to R except the var @ the beginning of the function name


//TESTS
//run hello
hello('what is this?');
hello();

//run hello_adj
hello_adj('what is this?');
hello_adj();

//run hello_adj2
hello_adjt('what is this?');
hello_adjt();

//run hello_adj_adv
hello_adj_adv();