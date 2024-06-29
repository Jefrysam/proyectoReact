// Login simple por ahora                             <jeffry Guerrero>

import style from "./logIn.module.css"

function Content4(){
    return(<>   <main className={style.content4}>
                    <form className={style.formContainer}>
                        <label className={style.lavel} for="username">Nombre de usuario:</label> <br />
                        <input type="text" id="usernameUsser" name="username" /> <br />
                        <label className={style.lavel} for="password">Contraseña:</label> <br />
                        <input type="password" id="passwordUsser" name="password" /> <br />
                        <input type="submit" value="Entrar" onClick={ (event) => {event.preventDefault()}}/> <br />
                    </form>
                </main>
            </>);
}
export default Content4