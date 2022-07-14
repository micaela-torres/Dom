///LISTA DE EPISODIOS

let listaepisodios = [
    {titulo:"Pilot", director:"Vince Gilligan", temporada: "1", episodio: "1", fecha:"20 de Enero", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"Cat's in the Bag", director:"Adam Bernstein", temporada: "1", episodio: "2", fecha:"27 de Enero", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"And the Bag's in the River", director:"Adam Bernstein", temporada: "1", episodio: "3", fecha:"10 de Febrero", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"Cancer Man", director:"Jim McKay", temporada: "1", episodio: "4", fecha:"17 de Febrero", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"Gray Matter", director:"Tricia Brock", temporada: "1", episodio: "5", fecha:"24 de Febrero", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"Craz Handful of Nothin", director:"Bronwen Hughes", temporada: "1", episodio: "6", fecha:"2 de Marzo", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"A No-Rough Stuff type Deal", director:"Tim Hunter", temporada: "1", episodio: "7", fecha:"9 de Marzo", año:"2008", imagen: 'imagenes/temp1.jpg'},
    {titulo:"Seven Thirty Seven", director:"Bryan Cranston", temporada: "2", episodio: "1", fecha:"8 de Marzo", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"Grilled", director:"Charles Haid", temporada: "2", episodio: "2", fecha:"15 de Marzo", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"Bit by a Dead Bee", director:"Terry McDonough", temporada: "2", episodio: "3", fecha:"22 de Marzo", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"Down", director:"John Dahl", temporada: "2", episodio: "4", fecha:"29 de Marzo", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"Breakage", director:"Johan Renck", temporada: "2", episodio: "5", fecha:"5 de Abril", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"Peekage", director:"Peter Medak", temporada: "2", episodio: "6", fecha:"12 de Abril", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"Negro y Azul", director:"Félix Alcalá", temporada: "2", episodio: "7", fecha:"19 de Abril", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"Better Call Saul", director:"Terry McDonough", temporada: "2", episodio: "8", fecha:"26 de Abril", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"4 Days Out", director:"Michelle MacLaren", temporada: "2", episodio: "9", fecha:"3 de Mayo", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"Over", director:"Phil Abraham", temporada: "2", episodio: "10", fecha:"10 de Mayo", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"Mandala", director:"Adam Bernstein", temporada: "2", episodio: "11", fecha:"17 de Mayo", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"Phoenix", director:"Colin Bucksey", temporada: "2", episodio: "12", fecha:"24 de Mayo", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"ABQ", director:"Adam Bernstein", temporada: "2", episodio: "13", fecha:"31 de Mayo", año:"2009", imagen: 'imagenes/temp2.jpg'},
    {titulo:"No Más", director:"Bryan Cranston", temporada: "3", episodio: "1", fecha:"21 de Marzo", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"Caballo sin nombre", director:"Adam Bernstein", temporada: "3", episodio: "2", fecha:"28 de Marzo", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"I.F.T", director:"Michelle MacLaren", temporada: "3", episodio: "3", fecha:"4 de Abril", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"Green Light", director:"Scott Winant", temporada: "3", episodio: "4", fecha:"11 de Abril", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"Mas", director:"Johan Renck", temporada: "3", episodio: "5", fecha:"18 de Abril", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"Sunset", director:"John Shiban", temporada: "3", episodio: "6", fecha:"25 de Abril", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"One Minute", director:"Michelle MacLaren", temporada: "3", episodio: "7", fecha:"2 de Mayo", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"I see You", director:"Colin Bucksey", temporada: "3", episodio: "8", fecha:"9 de Mayo", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"Kafkaesque", director:"Michael Slovis", temporada: "3", episodio: "9", fecha:"16 de Mayo", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"Fly", director:"Rian Johnson", temporada: "3", episodio: "10", fecha:"23 de Mayo", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"Abiquiu", director:"Michelle MacLaren", temporada: "3", episodio: "11", fecha:"30 de Mayo", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"Half Measures", director:"Adam Bernstein", temporada: "3", episodio: "12", fecha:"6 de Junio", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"Full Measures", director:"Vince Gilligan", temporada: "3", episodio: "13", fecha:"13 de Junio", año:"2010", imagen: 'imagenes/temp3.jpg'},
    {titulo:"Box Cutter", director:"Adam Bernstein", temporada: "4", episodio: "1", fecha:"17 de Julio", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Thirty-Eight Snub", director:"Michelle MacLaren", temporada: "4", episodio: "2", fecha:"24 de Julio", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Open House", director:"David Slade", temporada: "4", episodio: "3", fecha:"31 de Julio", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Bullet Points", director:"Colin Bucksey", temporada: "4", episodio: "4", fecha:"7 de Agosto", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Shotgun", director:"Michelle MacLaren", temporada: "4", episodio: "5", fecha:"14 de Agosto", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Cornered", director:"Michael Slovis", temporada: "4", episodio: "6", fecha:"21 de Agosto", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Problem Dog", director:"Peter Gould", temporada: "4", episodio: "7", fecha:"28 de Agosto", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Hermanos", director:"Johan Renck", temporada: "4", episodio: "8", fecha:"4 de Septiembre", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Bug", director:"Terry McDonough", temporada: "4", episodio: "9", fecha:"11 de Septiembre", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Salud", director:"Michelle MacLaren", temporada: "4", episodio: "10", fecha:"18 de Septiembre", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Crawl Space", director:"Scott Winant", temporada: "4", episodio: "11", fecha:"25 de Septiembre", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"End Times", director:"Vince Gilligan", temporada: "4", episodio: "12", fecha:"2 de Octubre", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Face off", director:"Vince Gilligan", temporada: "4", episodio: "13", fecha:"9 de Octubre", año:"2011", imagen: 'imagenes/temp4.jpg'},
    {titulo:"Live Free or Die", director:"Michael Slovis", temporada: "5 parte 1", episodio: "1", fecha:"15 de Julio", año:"2012", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Madrigal", director:"Michelle MacLaren", temporada: "5 parte 1", episodio: "2", fecha:"22 de Julio", año:"2012", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Hazard Pay", director:"Adam Bernstein", temporada: "5 parte 1", episodio: "3", fecha:"29 de Julio", año:"2012", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Fifty-one", director:"Rian Johnson", temporada: "5 parte 1", episodio: "4", fecha:"5 de Agosto", año:"2012", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Dead Freight", director:"George Mastras", temporada: "5 parte 1", episodio: "5", fecha:"12 de Agosto", año:"2012", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Buyout", director:"Colin Bucksey", temporada: "5 parte 1", episodio: "6", fecha:"19 de Agosto", año:"2012", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Say My Name", director:"Thomas Schnauz", temporada: "5 parte 1", episodio: "7", fecha:"26 de Agosto", año:"2012", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Gliding Over All", director:"Michelle MacLaren", temporada: "5 parte 1", episodio: "8", fecha:"2 de Septiembre", año:"2012", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Blood Money", director:"Bryan Cranston", temporada: "5 parte 2", episodio: "9", fecha:"11 de Agosto", año:"2013", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Buried", director:"Michelle MacLaren", temporada: "5 parte 2", episodio: "10", fecha:"18 de Agosto", año:"2013", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Confessions", director:"Michael Slovis", temporada: "5 parte 2", episodio: "11", fecha:"25 de Agosto", año:"2013", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Rabid dog", director:"Sam Catlin", temporada: "5 parte 2", episodio: "12", fecha:"1 de Septiembre", año:"2013", imagen: 'imagenes/temp5.jpg'},
    {titulo:"To'hajiilee", director:"Michelle MacLaren", temporada: "5 parte 2", episodio: "13", fecha:"8 de Septiembre", año:"2013", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Ozymandias", director:"Rian Johnson", temporada: "5 parte 2", episodio: "14", fecha:"15 de Septiembre", año:"2013", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Granite State", director:"Peter Gould", temporada: "5 parte 2", episodio: "15", fecha:"23 de Septiembre", año:"2013", imagen: 'imagenes/temp5.jpg'},
    {titulo:"Felina", director:"Vince Gilligan", temporada: "5 parte 2", episodio: "16", fecha:"30 de Septiembre", año:"2013", imagen: 'imagenes/temp5.jpg'},
]


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