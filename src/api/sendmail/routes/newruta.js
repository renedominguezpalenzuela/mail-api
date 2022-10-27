// Crear ruta para customAction
// /routes/-- crear fichero nuevo ejemplo: rutas.js
module.exports = {
   routes: [
       {
             method: 'POST', 
             path: '/sendemail',
             handler:'newsendmail.customAction',    //'nombre_tabla.nombre_funcion'
             config: {
                     auth: false,       //se puede acceder sin estar autenticado
             }
       }
   ]
 }
// Dar accesos al endpoint email  Public/Tabla/Nombre_Funcion
