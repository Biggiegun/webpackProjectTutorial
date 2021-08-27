import Comentario from './comentario';
import './style.css';

async function inicio(){
    const com = new Comentario();
    const resp = await com.obtenerCategorias();
console.log(resp.categories);
}

inicio();
//console.log("Clase Webpack y Babel");
