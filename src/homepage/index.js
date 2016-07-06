var page = require( 'page' );
var template = require( './template' );
var empty = require( 'empty-element' );
var request = require( 'superagent' );

function loadPictures( ctx , next ){
       request
        .get( '/api/pictures' )
        .end( function ( err , res ) {
           if( err ) return console.log( "error"  + err );
           
            ctx.pictures =  res.body;
            next( );  
        });
}

function loadPicturesFetch( ctx , next ){
    fetch( '/api/pictures' )
        .then( function( res ){
            return res.json( );
        })
        .then( function( pictures ){
            ctx.pictures =  pictures;
            next( ); 
        })
        .catch( function( err ){
            console.log( err );
        });
}

page('/', loadPicturesFetch , function( ctx , next ){
    
    var main = document.getElementById( 'main-container' );
    var pictures = ctx.pictures;
    
    var templatePictures = template( pictures );

    empty( main ).appendChild( templatePictures ); 
    
});
