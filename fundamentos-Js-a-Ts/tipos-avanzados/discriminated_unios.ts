// Discrimination Unions:
//Patron que combina uniones de tipos con una propiedad discriminadora
type GatoType = {
  tipo: 'gato';
  maulla: () => void;
}

type PerroType = {
  tipo: 'perro';
  ladra: () => void;
}

type AnimalTipos = GatoType | PerroType;

function hacerSonido(animal: AnimalTipos) {
  if(animal.tipo === 'gato') {
    animal.maulla();
  } else if(animal.tipo === 'perro') {
    animal.ladra();
  }
}

// Pruebas:
const animalGato: GatoType = {
  tipo: "gato",
  maulla: function (): void {
    console.log("El gato esta maullando");
  },
};

const animalPerro: PerroType = {
  tipo: "perro",
  ladra: function (): void {
    console.log("El perro esta lladrando");
  }
}

hacerSonido(animalGato);
hacerSonido(animalPerro);
// La clave es la propiedad "tipo" que discrimina el comportamiento


