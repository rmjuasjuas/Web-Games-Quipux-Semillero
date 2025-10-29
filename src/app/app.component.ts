import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {
  paginaActual: string = 'inicio'; 
  filtroActual: string = 'Todas';
  carrito: any[] = []; // TODO: crear interface para los juegos después

  // catalogo de juegos
  juegos = [
    {
      id: 1,
      nombre: 'Spider-Man 2',
      precio: 279000,
      consola: 'PlayStation',
      img: 'image/spiderman2.jpg'
    },
    {
      id: 2,
      nombre: 'God of War Ragnarök',
      precio: 249000,
      consola: 'PlayStation',
      img: 'image/GodofWarRagnarök.jpg'
    },
    {
      id: 3,
      nombre: 'Horizon Forbidden West',
      precio: 229000,
      consola: 'PlayStation',
      img: 'image/HorizonForbiddenWest.jpg'
    },
    {
      id: 4,
      nombre: 'Forza Horizon 5',
      precio: 189000,
      consola: 'Xbox',
      img: 'image/ForzaHorizon5.jpg'
    },
    {
      id: 5,
      nombre: 'Halo Infinite',
      precio: 169000,
      consola: 'Xbox',
      img: 'image/HaloInfinite.jpg'
    },
    {
      id: 6,
      nombre: 'Starfield',
      precio: 269000,
      consola: 'Xbox',
      img: 'image/Starfield.jpg'
    },
    {
      id: 7,
      nombre: 'Zelda: Tears of the Kingdom',
      precio: 259000,
      consola: 'Nintendo',
      img: 'image/TheLegendofZeldaTearsoftheKingdom.jpg'
    },
    {
      id: 8,
      nombre: 'Mario Kart 8',
      precio: 219000,
      consola: 'Nintendo',
      img: 'image/MarioKart8.jpg'
    },
    {
      id: 9,
      nombre: 'Pokémon Scarlet',
      precio: 239000,
      consola: 'Nintendo',
      img: 'image/PokemonScarlet.jpg'
    },
    {
      id: 10,
      nombre: 'Elden Ring',
      precio: 179000,
      consola: 'PC',
      img: 'image/EldenRing.jpg'
    },
    {
      id: 11,
      nombre: 'Cyberpunk 2077',
      precio: 149000,
      consola: 'PC',
      img: 'image/Cyberpunk2077.jpg'
    },
    {
      id: 12,
      nombre: 'Baldurs Gate 3',
      precio: 209000,
      consola: 'PC',
      img: 'image/BaldursGate3.jpg'
    }
  ];

  // cambiar entre paginas
  cambiarPagina(pagina: string) {
    this.paginaActual = pagina;
    window.scrollTo(0, 0); // para que siempre empiece arriba
  }

  // filtrar por consola
  filtrarJuegos() {
    if (this.filtroActual === 'Todas') {
      return this.juegos;
    }
    
    let juegosFiltrados = [];
    for(let i = 0; i < this.juegos.length; i++) {
      if(this.juegos[i].consola === this.filtroActual) {
        juegosFiltrados.push(this.juegos[i]);
      }
    }
    return juegosFiltrados;
  }

  // agregar juego al carrito
  agregarAlCarrito(juego: any) {
    // primero verifico si ya esta en el carrito
    let yaEsta = false;
    for(let i = 0; i < this.carrito.length; i++) {
      if(this.carrito[i].id === juego.id) {
        yaEsta = true;
        break;
      }
    }
    
    if (yaEsta) {
      alert('Este juego ya está en tu carrito!');
      return;
    }
    
    this.carrito.push(juego);
    alert('¡Juego agregado al carrito!');
  }

  // quitar del carrito
  quitarDelCarrito(indice: number) {
    this.carrito.splice(indice, 1);
  }

  // calcular el total del carrito
  calcularTotal() {
    let total = 0;
    for (let item of this.carrito) {
      total += item.precio;
    }
    return total;
  }

  // finalizar compra
  finalizarCompra() {
    if (this.carrito.length === 0) {
      alert('Tu carrito está vacío');
      return;
    }
    
    const total = this.calcularTotal();
    alert('¡Compra realizada con éxito! Total: $' + total.toLocaleString());
    this.carrito = [];
    this.paginaActual = 'inicio';
  }

  // enviar formulario contacto
  enviarContacto() {
    alert('¡Gracias por tu mensaje! Te responderemos pronto.');
  }
}