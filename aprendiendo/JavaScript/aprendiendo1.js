const usuario = {
  nombre: "",
  edad: "",
  estilo: "",
  arma: "",
  escudo: "",
};

usuario.nombre = "Danselix95";
usuario.edad = 27;
usuario.estilo = {
  nombre: "mago",
  energia: "10000",
  elemento: "aire",
  experiencia: "10000",
};
usuario.arma = {
  nombre: "telekinesis",
  poder: 10,
  tipo: "mental",
  alcance: "medio",
};
usuario.escudo = "libro mágico";

/* console.log(usuario.nombre);
console.log(usuario.estilo.elemento);
console.log(usuario.estilo); */

usuario.arma.poder = 100; // cambiandole valor a una propiedad agregada a la calse usuario

console.log(usuario);
