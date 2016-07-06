
var yo = require( 'yo-yo' );
var landing = require( '../landing');
var translate = require( '../translate' );

var signinForm = yo`
               <div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="platzigram"> Platzigram </h1>
                                    <form action="" class="signup-form">
                                        <h2> ${ translate.message( 'signup.have-account' ) } </h2>
                                        <div class="section">
                                            <a class="btn btn-fb hide-on-small-only"> ${ translate.message( 'signup.facebook' ) } </a>
                                            <a class="btn btn-fb hide-on-med-and-up"> ${ translate.message( 'signup.text' ) } </a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="section">
                                            <input type="text" name="username" placeholder="${ translate.message( 'signup.username' ) }" />
                                            <input type="text" name="password" placeholder="${ translate.message( 'password' ) }" />
                                            <button class="btn waves-effect waves-light" type="submit"> ${ translate.message( 'signin' ) } </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                   ${ translate.message( 'signin.not-have-account' ) } <a href="/signup"> ${ translate.message( 'signup.text' ) } </a>
                                </div>
                            </div>
                        </div>`;

module.exports = landing( signinForm );