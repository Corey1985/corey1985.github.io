// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//return the value unchanged
//no alterations or changes
_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

//return the datatype of the given value as a string
//accepts:string, array, object, undefined, number, boolean, null, or a function
_.typeOf = function(value){
    if(value === null){
        return "null";
    }
    else if(value === undefined){
        return "undefined";
    }
    else if(Array.isArray(value)){
        return "array";
    }
    else {
        return typeof(value);
    }
    
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

//function accepts an array and a number
//if array is not an array datatype or is empty return an empty array literal
//if number is not given return the first element in array
//if both exist return the first element(s) of the array that exists
//if number is greater array return the whole array
_.first = function(array, number){
    let empty = [];
        if(!Array.isArray(array)){
            return empty;
        }
        else if(typeof(number) !== "number" || number === undefined || number === null){
            return array[0];
        }
        else if(number < 0){
            return empty;
        }
        else if(number > array.length){
            return array;
        }
        else{
    for(let i = 0; i < number; i++){
        empty.push(array[i]);
        }
        return empty;    
        
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
//function accepts an array and a number
//if array is not an array datatype or is not given return an empty array literal
//if number is not given return the last element in array
//if number is greater than array return the whole array
//if both exist return the last element(s) of the array that exists
_.last = function(array, number){
    let empty = [];
        if(!Array.isArray(array)){
            return empty;
        }
        else if(typeof(number) !== "number" || !number || number === undefined || number === null){
            return array[array.length - 1];
        }
        else if(number < 0){
            return empty;
        }
        else if(number > array.length){
            return array;
        }
        else if(number > -1){
        return array.slice(number - 1, array.length);
        }
       
        
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//function accepts an array and a value
//return the index from array of the first occurence of value
//return -1 if value is not in the array
_.indexOf = function(array, value){
  for(let i = 0; i < array.length; i++){
      if(array[i] === value){
          return i;
        }
      }  
          return -1;
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//function accepts an array and a value
//if array has the value in it return true
//return false otherwise
_.contains = function(array, value){
    return array.includes(value) ?  true : false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
//function accepts an array or object and a value
//if it is an array use a for loop
//if it is an object use a for in loop
//in either case iterate and call the function parameter function on the element, index, and collection.
_.each = function (collection, func){
  if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
//accepts an array
//returns a new array of all uniuq elements
//use _.indexOf() 
_.unique = function(array){
    let uniqueArr = [];
     for(let i = 0; i < array.length; i++){ 
    if (_.indexOf(array, array[i]) === i){
      uniqueArr.push(array[_.indexOf(array, array[i])]); 
      } 
  }
  return uniqueArr;
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//takes an array and a function
//using _.each if the function returns true put it into a new array
//if false do nothing
//return the array of true elements
_.filter = function(array, func){
  let truthy = [];
 _.each(array,function(value,index,array){
        if(func(value,index,array) === true){
            truthy.push(value);
        }
    });
        return truthy;
};



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//takes an array and a function
//must use _.filter
//if false add it the new array
//return the array of false elements
_.reject = function(array, func){
  var falsy = [];
      _.filter(array, function(value,index,array){
          if(func(value,index,array) === false){
              falsy.push(value);
          }
      });
    return falsy;
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//takes an array and a function 
//for each value that is even put it into a truthy array
//for each odd value put it in a falsy array
//return both arrays (seperated) per array inside of another array
_.partition = function(array, func){
    var wholeArr = [];
    var truthy = [];
    var falsy = [];
      _.filter(array, function(value,index,array){
          if(func(value,index,array) !== true){
              falsy.push(value);
          }
          else{
              truthy.push(value);
          }
          
      });
    wholeArr.push(truthy, falsy);
    return wholeArr;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
//function takes a collection and a function
//iterate through the collection and put the value in a new array
//must be able to iterate arrays or objects
//return the new array
_.map = function(collection, func){
    let newArr = [];
     _.each(collection, function(element, index, collection){
         newArr.push(func(element, index, collection));
     });
    return newArr;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
///takes an array containing objects
//a property to compare
//return the values of the keys
_.pluck = function(array, value){
    return _.map(array, function(element, index, collection){
        return element[value];
    });
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//takes an object or array and a function to compare it
//if the value is not true for any  the collection return false
//return true if every element is true
_.every = function(collection, func){
    let result = true;
    if(func === undefined){
  _.each(collection, (element) => {
      if(!element){
          result = false;
      }
  });
} else {
  _.each(collection, (element, index, collection) => {
      if(!func(element, index, collection)){
          result = false;
      }
  });
}
  return result;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
//takes an object or array and a function to compare it
//if the value equals true for any value in the collection return true
//return false if all are not true
_.some = function(collection, func){
    let result = false;
    if(func === undefined){
  _.each(collection, (element) => {
      if(element){
          result = true;
      }
  });
} else {
  _.each(collection, (element, index, collection) => {
      if(func(element, index, collection)){
          result = true;
      }
  });
}
  return result;
};
  


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
//takes an array, a function, and a seed(a default starting value that may be incremented)
//use a number for your seed/startValue
//return the final number iterated
_.reduce = function(array, action, seed){
       let i = 0;
    let accumulator;
    if (seed === undefined){
        accumulator = array[0];
        i = 1;
    } else {
        accumulator = seed;
    }
    for(; i < array.length; i++) {
        accumulator = action(accumulator, array[i], i, array);
    }
    return accumulator;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
//takes one object that other objects may be added into
//should accept any number of arguments using a spread operator 
//for loop iterates through the array created by the spread operator
//for in loop iterates trough the main object 
//return the object with its new values inside
_.extend = function(obj1, ...objects){
    for (let i = 0; i < objects.length; i++){
        for(let key in objects[i]){
            obj1[key] = objects[i][key];
        }
    }
    return obj1;
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
