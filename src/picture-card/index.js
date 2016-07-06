
var yo = require( 'yo-yo' );
var translate = require( '../translate' )




module.exports = function pictureCard( pic ){
    
    var el;
    
    function render( picture ){
        var card = yo`
        <div class="card ${ picture.liked ? 'liked' : '' }">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="" src="${ picture.url }">
            </div>
            <div class="card-content">
                <a href="${ picture.user.username }" class="card-title">
                    <img src="${ picture.user.avatar }" class="avatar"/>
                    <span class="username"> ${ picture.user.username } </span>
                    <small class="right time"> ${ translate.date.format( picture.createdAt ) } </small>
                </a>
                <p>
                        <a class="left" href="#" onclick=${ like }> <i class="fa fa-heart-o" aria-hidden="true"></i> </a>
                        <a class="left" href="#" onclick=${ like }> <i class="fa fa-heart" aria-hidden="true"></i> </a>
                        <span class="left likes"> ${ translate.message( 'likes' , { likes : picture.likes } ) }  </span>
                </p>
            </div>
        </div>`;
        return card;
    }
    
    function like( ){
        pic.likes += pic.liked ? -1 : 1;
        pic.liked = !pic.liked;
        var newEl = render( pic );
        yo.update( el , newEl );
        return false;        
    }
    
    el = render( pic );
    return el;
}