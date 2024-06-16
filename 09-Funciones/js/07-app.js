
iniciarApp();

function iniciarApp() {
  console.log('Iniciando app ...');
  
  segundaFuncion();
}

function segundaFuncion() {
  console.log('Desde la segunda función');

  usuarioAuntenticado('Pablo');
}

function usuarioAuntenticado (usuario){
  console.log('Autenticando usuario ... espere ...');
  console.log(`${usuario} autenticado exitosamente.`);

}