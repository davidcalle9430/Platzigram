var page = require('page');
var yo = require('yo-yo');

var main = document.getElementById('main-container');


page('/', function( ctx , next ){
    
});

page('/signup', function( ctx , next ){
    var mainContainer = document.getElementById('main-container');
    
    var el = 'Saludo';
       mainContainer.innerHTML = el ;
});

page.start();



