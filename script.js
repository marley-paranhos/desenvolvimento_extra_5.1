let titulo = document.getElementById('titulo')
let link = document.querySelector('a');

titulo.innerText = 'Texto InnerText'

let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')

listaNaoOrdenada.innerHTML = `
  <li>Curso Proz</li>
  <li>AWS</li>
  <li>Front-end</li>
`

listaOrdenada.innerHTML = `
  <li><a href="https://about.meta.com/">Meta</a></li>
  <li><a href="https://www.aws.com">AWS</a></li>
  <li><a href="https://www.google.com">Google</a></li>
`
