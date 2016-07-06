/**
 * incialización de dependencias
 */
var express = require('express');
var multer = require( 'multer' );
var ext = require( 'file-extension' );
 

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now( ) + '.' + ext( file.originalname ))
  }
})


var upload = multer( { dest : storage } ).single( 'picture' );

/**
 * inicialización de variables
 */
var app = express();

app.set( 'view-engine' , 'pug' );
app.use( express.static('public') );


app.get( '/' , function ( req , res ) {
    res.render( 'index.pug' , { title : "Platzigram" } );
}); 

app.get( '/signup' , function ( req , res ) {
    res.render( 'index.pug' , { title : "Platzigram - Signup" } );
});

app.get( '/signin' , function ( req , res ) {
    res.render( 'index.pug' , { title : "Platzigram - Signin" } );
});

app.get( "/api/pictures" , function( req , res ){
   var pictures = [ 
        {
          user : {
              username : 'dcalle',
              avatar : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c170.50.621.621/s160x160/483458_548411288511475_1882827118_n.jpg?oh=b4829b83fe90a000a238566be8cc6a72&oe=57F307EC&__gda__=1476319218_fd3dd01da4074da0f0f58a3855a92f04'
          },
          likes : 0,
          liked : false,
          url : 'office.jpg',
          //createdAt : new Date( )
        },
        {
          user : {
              username : 'dcalle',
              avatar : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c170.50.621.621/s160x160/483458_548411288511475_1882827118_n.jpg?oh=b4829b83fe90a000a238566be8cc6a72&oe=57F307EC&__gda__=1476319218_fd3dd01da4074da0f0f58a3855a92f04'
          },
          likes : 1,
          liked : false,
          url : 'office.jpg',
          //createdAt : new Date().setDate( new Date( ).getDate( ) - 10 )
        },
        {
          user : {
              username : 'dcalle',
              avatar : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c170.50.621.621/s160x160/483458_548411288511475_1882827118_n.jpg?oh=b4829b83fe90a000a238566be8cc6a72&oe=57F307EC&__gda__=1476319218_fd3dd01da4074da0f0f58a3855a92f04'
          },
          likes : 5,
          liked : true,
          url : 'office.jpg',
          //createdAt : new Date().setDate( new Date( ).getDate( ) - 10 )
        }
    ];
    
    //simular db
    setTimeout( function() {
        res.send( pictures );    
    }, 500 );
    
});

app.post( '/api/pictures' , function( req , res ){
        upload(req, res, function (err) {
        if (err) {
        // An error occurred when uploading 
        return
        }
    
        // Everything went fine 
    })
   
   
});

app.listen( 3000 , function(err){
    if( err ) console.log("Error Fatal");
    
    console.log("Aplicacion escuchando en el puerto 3000")
});