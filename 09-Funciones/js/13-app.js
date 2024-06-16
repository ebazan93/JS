const reproductor = {
  cancion: '',
  reproducir: id  => console.log(`Reproduciendo canción con el id ${id}...`),
  pausar: () => console.log('pausando...'),
  borrar: id => console.log(`Borrando canción... ${id}`),
  crearPlayList: nombre => console.log(`Creamdo la playlist ${nombre}`),
  reproducirPlayList: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

  set nuevaCancion (cancion) {
    this.cancion = cancion;
    console.log (`Añadiendo ${cancion}`);
  },

  get obtenerCancion (){
    console.log (`${this.cancion}`)
  }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList('Heavy Metal');
reproductor.crearPlayList('Rock 90s');
reproductor.reproducirPlayList('Heavy Metal');