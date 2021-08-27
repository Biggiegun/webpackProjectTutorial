class Comentario{
    
   async obtenerCategorias(){
        const resp = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories');
        const categorias = await resp.json();
        return categorias;
    }
}
export default Comentario;
