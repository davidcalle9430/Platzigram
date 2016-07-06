
var page = require( 'page' );
var empty = require( 'empty-element' );
var template = require( './template' );
var title = require( 'title' );


page('/signup', function( ctx , next ){
    title( 'Platzigram - Signup' );
    var mainContainer = document.getElementById( 'main-container' );
    console.log( template  );
    empty( mainContainer ).appendChild( template );
});

console.log("carg");