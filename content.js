/*
Finds all the occurences of a string (excluding HTML tags)
and replaces it with another string

The function is in the extension's folder in js/findAndReplaceDOMText.js

https://github.com/padolsey/findAndReplaceDOMText

*/
var word1 = "child";
var word1Cap = "Child";
var word2 = "baby";
var word2Cap = "Baby";
var word3 = "kid";
var word3Cap = "Kid";

findAndReplaceDOMText(document, { preset: 'prose', find: word1, find: word1Cap, replace: 'amazing ' + word1 } );
findAndReplaceDOMText(document, { preset: 'prose', find: word2, find: word2Cap, replace: 'beautiful ' + word2  } );
findAndReplaceDOMText(document, { preset: 'prose', find: word3, find: word3Cap, replace: 'wonderful ' + word1 } );

//regular expression example. Note: No '' marks
//Finds all the instances (g) of art case insensitive (i)
//findAndReplaceDOMText(document, { find: /Art/ig, replace: '###' } );


