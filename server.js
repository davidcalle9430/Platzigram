/**
 * incialización de dependencias
 */
var express = require('express');

/**
 * inicialización de variables
 */
var app = express();

app.set( 'view-engine' , 'pug' );
app.use( express.static('public') );


app.get( '/' , function ( req , res ) {
    res.render( 'index.pug' );
});

app.get( '/signup' , function ( req , res ) {
    res.render( 'index.pug' );
});

app.get( '/signin' , function ( req , res ) {
    res.render( 'index.pug' );
});

app.listen( 3000 , function(err){
    if( err ) console.log("Error Fatal");
    
    console.log("Aplicacion escuchando en el puerto 3000")
})