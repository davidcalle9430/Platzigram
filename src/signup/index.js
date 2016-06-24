
var page = require( 'page' );
var empty = require( 'empty-element' );
var template = require( './template' );

page('/signup', function( ctx , next ){
    var mainContainer = document.getElementById( 'main-container' );
    empty( mainContainer ).appendChild( template );
});