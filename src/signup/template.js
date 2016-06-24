var yo = require( 'yo-yo' );
module.exports = yo`
        <div class="container">
            <div class="row">
                <div class="col s10 push-s1">
                    <div class="row">
                        <div class="col m5 hide-on-small-only">
                            <img src="iphone.png" class="iphone" alt="">
                        </div>
                        <div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="platzigram"> Platzigram </h1>
                                    <form action="" class="signup-form">
                                        <h2> Regístrate para ver fotos de todas las personas </h2>
                                        <div class="section">
                                            <a class="btn btn-fb hide-on-small-only"> Iniciar Sesión con Facebook</a>
                                            <a class="btn btn-fb hide-on-med-and-up"> Inicar Sesión </a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="section">
                                            <input type="email" name="email" placeholder="Correo Electrónico" />
                                            <input type="text" name="name" placeholder="Nombre Completo" />
                                            <input type="text" name="username" placeholder="Nombre de Usuario" />
                                            <button class="btn waves-effect waves-light" type="submit"> Regístrate </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                    ¿Tienes una cuenta ? <a href="/signin">Entrar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 </div>`;