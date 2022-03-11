const catalogo = require('./database/catalogo.json')


function buscarFilme(identificador) {
  const filme = catalogo.find(filme => filme.codigo === identificador)
  return filme
}

function listarFilmesLongos(duracaoEmHoras) {
  const filmesLongos = catalogo.filter((filmesLongos) => filmesLongos.duracao > duracaoEmHoras)
  return filmesLongos
}

function adicionarHttp(url) {
  return `http://${url}`
}


function processar(listaDeSites, callback) {
  const sitesAlterados = listaDeSites.map(function(site) {
    return callback(site)
  })

  return sitesAlterados
}

const listaDeSites = ["www.twitter.com", "www.facebook.com", "www.globo.com", "www.youtube.com"]

// console.log(processar(listaDeSites, adicionarHttp))


const listaDeNumeros = [20, 34, 2, 53, 64]
let total = 0

for(let i = 0; i < listaDeNumeros.length; i = i + 1) {
  total = total + listaDeNumeros[i]
}

// corrente: 64
// acumulador: 109
// total: 173

const somaTotal = listaDeNumeros.reduce((corrente, acumulador) => { 
  return corrente + acumulador
}, 0)

// console.log('resultado do reduce: ', somaTotal)


const lista2 = [20, 34, 2, 53, 64]
// const obj = {
//   nome: "Joao",
//   idade: 29,
//   cidade: "São Paulo"
// }

// const primeiraForma = obj.cidade
// const segundaForma = obj[cidade]

// for(let dados of lista2) {
//   console.log(dados)
// }


// const data = '2022-03-11T13:20:30.226Z'

// const dataQuebrada = data.split('T')
// const dataCompleta = dataQuebrada[0]

// const dataCompletaEmArray = dataCompleta.split('-')

// const dataCorrigida = dataCompletaEmArray.reverse()
// const dataFormatada = dataCorrigida.join('-')

// console.log(dataFormatada)
// console.log(dataCompleta)
// console.log(typeof data)
// const dia = data.getDate()
// const mes = data.getMonth()
// const ano = data.getFullYear()
// const dataCompleta = `${dia}/${mes}/${ano}`

const [ , , terceiro , , ] = [1, 2, 3, 4, 5]

const { endereco: { logradouro, numero, bairro } } = {
  nome: "Joao",
  idade: 29,
  endereco: {
    logradouro: 'Rua Ratatata',
    numero: 18,
    bairro: 'Hahahaha'
  }
}


// function usuario(...resto) {
//   console.log('Meu resto é:', resto)

//   resto.forEach((any) => {
//     console.log(any)
//   })
// }



// usuario('Ana', 21, 'Uberlândia', 'Bairro')


const arrayBase = ['Cassio', 'Jonnata', 'Rodrigo', 'Ana']
const arrayNumero = [1, 2, 3, 4]
const arrayModificado = [...arrayBase, ...arrayNumero]

console.log(arrayModificado)