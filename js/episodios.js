
let listaepisodios = [
    {titulo:"Pilot", director:"Vince Gilligan", temporada: "1", episodio: "1", fecha:"20 de Enero", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"Cat's in the Bag", director:"Adam Bernstein", temporada: "1", episodio: "2", fecha:"27 de Enero", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"And the Bag's in the River", director:"Adam Bernstein", temporada: "1", episodio: "3", fecha:"10 de Febrero", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"Cancer Man", director:"Jim McKay", temporada: "1", episodio: "4", fecha:"17 de Febrero", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"Gray Matter", director:"Tricia Brock", temporada: "1", episodio: "5", fecha:"24 de Febrero", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"Craz Handful of Nothin", director:"Bronwen Hughes", temporada: "1", episodio: "6", fecha:"2 de Marzo", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"A No-Rough Stuff type Deal", director:"Tim Hunter", temporada: "1", episodio: "7", fecha:"9 de Marzo", año:"2008", imagen: 'imagenes/temp1.jpg'},
]

/*
const episodio8 = new episodios(8, 2, 1, "Seven Thirty Seven", "Bryan Cranston", "8 de Marzo", 2009)
const episodio9 = new episodios(9, 2, 2, "Grilled", "Charles Haid", "15 de Marzo", 2009)
const episodio10 = new episodios(10, 2, 3, "Bit by a Dead Bee", "Terry McDonough", "22 de Marzo", 2009)
const episodio11 = new episodios(11, 2, 4, "Down", "John Dahl", "29 de Marzo", 2009)
const episodio12 = new episodios(12, 2, 5, "Breakage", "Johan Renck", "5 de Abril", 2009)
const episodio13 = new episodios(13, 2, 6, "Peekage", "Peter Medak", "12 de Abril", 2009)
const episodio14 = new episodios(14, 2, 7, "Negro y Azul", "Félix Alcalá", "19 de Abril", 2009)
const episodio15 = new episodios(15, 2, 8, "Better Call Saul", "Terry McDonough", "26 de Abril", 2009)
const episodio16 = new episodios(16, 2, 9, "4 Days Out", "	Michelle MacLaren", "3 de Mayo", 2009)
const episodio17 = new episodios(17, 2, 10, "Over", "Phil Abraham", "10 de Mayo", 2009)
const episodio18 = new episodios(18, 2, 11, "Mandala", "Adam Bernstein", "17 de Mayo", 2009)
const episodio19 = new episodios(19, 2, 12, "Phoenix", "Colin Bucksey", "24 de Mayo", 2009)
const episodio20 = new episodios(20, 2, 13, "ABQ", "Adam Bernstein", "31 de Mayo", 2009)
*/

let episodioslista = document.getElementById ('ListadeEpisodios')

listaepisodios.forEach(productoArray => {
    episodioslista.innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${productoArray.imagen}" class="img-fluid rounded-start" alt="">
            </div>    
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title"> ${productoArray.titulo}</h3>
                        <p class="card-text">Dirigido por ${productoArray.director}</p>
                        <p class="card-text">Temporada ${productoArray.temporada} Capitulo ${productoArray.episodio}</p>
                        <p class="card-text">Fecha de estreno ${productoArray.fecha} del año ${productoArray.año} </p>
                    </div> 
                </div>
        </div>
    </div>                                             
    `
})