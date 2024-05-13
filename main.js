class CJugador {
    constructor() {
      this.Jugador = [];
    }
  
    agregarJugador(Nombre, Posicion, Edad, Estatura, Peso, Nacionalidad) {
      this.Jugador.push({
        Nombre,
        Posicion,
        Edad,
        Estatura,
        Peso,
        Nacionalidad
      });
    }
  
    generarTablaJugador() {
      const tablaBody = document.querySelector('#TablaJugador tbody');
      tablaBody.innerHTML = '';
  
      for (const Jugador of this.Jugador) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${Jugador.Nombre}</td>
          <td>${Jugador.Posicion}</td>
          <td>${Jugador.Edad}</td>
          <td>${Jugador.Estatura}</td>
          <td>${Jugador.Peso}</td>
          <td>${Jugador.Nacionalidad}</td>
        `;
        tablaBody.appendChild(fila);
      }
    }
  
    listarNacionalidadArgentina() {
      let count = 0;
      for (const Jugador of this.Jugador) {
        if (Jugador.Nacionalidad === 'Argentina') {
          count++;
        }
      }
      return count;
    }
  
    entre75y80kg() {
      let count = 0;
      for (const Jugador of this. Jugador) {
        if (Jugador.Peso>= 75 && Jugador.Peso<= 80) {
          count++;
        }
      }
      return count;
    }
      
      JugadorAlto() {
        let max = 0;
        let nombre = '';
        for (const Jugador of this.Jugador) {
          if (Jugador.Estatura > max) {
            max = Jugador.Estatura;
            nombre = Jugador.Nombre;
          }
        }
        return nombre;
      }

  }
  const Jugador = new CJugador();

  Jugador.agregarJugador('Fabio1', 'G', 43, 1.88, 86, 'Brasil');
  Jugador.agregarJugador('Marlon4', 'D', 28, 1.83, 78, 'Brasil');
  Jugador.agregarJugador('Marcelo12', 'D', 35, 1.73, 72, 'Brasil');
  Jugador.agregarJugador('Nino33', 'D', 26, 1.88, 82, 'Brasil');
  Jugador.agregarJugador('John Kennedy9', 'A', 21, 1.73, 71, 'Brasil');
  Jugador.agregarJugador('Keno11', 'A', 34, 1.78, 72, 'Brasil');
  Jugador.agregarJugador('German Cano 14', 'A', 35, 1.78, 81, 'Argentina');
 
  // Generar la tabla de los jugadores
  Jugador.generarTablaJugador();

  document.getElementById("resultado1").textContent = "Listar todos los Jugadores que sean de Nacionalidad Argentina:" + Jugador.listarNacionalidadArgentina();
  
  document.getElementById("resultado2").textContent = "Listar todos los Jugadores que tengan peso entre 75 y 80 kg: " + Jugador.entre75y80kg();

  document.getElementById("resultado3").textContent = "Mostrar el Jugador mas alto :  " + Jugador.JugadorAlto();
