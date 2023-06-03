
//Pedir al usuario que ingrese su nombre y apellido
  let nombreUsuario = prompt("Por favor ingrese su nombre")
  let apellidoUsuario = prompt("Ahora ingrese su apellido")
  alert(" Hola " + nombreUsuario + " " + apellidoUsuario + " aqui veras las mejores motos! ")

// Definir un objeto
function MotoAgua(nombre, marca, potencia, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.potencia = potencia;
    this.precio = precio;
  }
  
  // Crear un array
  var motosDeAgua = [];
  
  // Agrego algunas motos de agua al array
  motosDeAgua.push(new MotoAgua("Cruiser", "Yamaha", 1812, "$" + 500000));
  motosDeAgua.push(new MotoAgua("Limited", "Yamaha", 1150, "$" + 300000));
  motosDeAgua.push(new MotoAgua("Premium", "Kawasaki", 1900, "$" + 600000));
  
  // Función para buscar una moto de agua por nombre
  function buscarMoto(nombre) {
    for (var i = 0; i < motosDeAgua.length; i++) {
      if (motosDeAgua[i].nombre === nombre) {
        return motosDeAgua[i];
      }
    }
    return null;
  }
  
  // Función para filtrar las por marca
  function filtrarMotosPorMarca(marca) {
    return motosDeAgua.filter(function(moto) {
      return moto.marca === marca;
    });
  }
  
  // Pedir al usuario que ingrese el nombre de una moto de agua
  var nombreMoto = prompt("Ingrese el nombre de la moto de agua:");
  
  // Buscar la moto por nombre
  var motoEncontrada = buscarMoto(nombreMoto);
  
  if (motoEncontrada) {
    console.log("Moto de agua encontrada: ", motoEncontrada);
  } else {
    console.log("No se encontró ninguna moto de agua con ese nombre.");
  }
  
  // Pedir al usuario que ingrese una marca de moto
  var marcaMoto = prompt("Ingrese la marca de las motos de agua que desea filtrar:");
  
  // Filtrar las motos de agua por marca
  var motosFiltradas = filtrarMotosPorMarca(marcaMoto);
  
  if (motosFiltradas.length > 0) {
    console.log("Motos de agua encontradas con la marca ", marcaMoto, ": ", motosFiltradas);
  } else {
    console.log("No se encontraron motos de agua con esa marca.");
  }
  