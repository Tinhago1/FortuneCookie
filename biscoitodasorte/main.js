const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset") 

let randomluck = [
  "A vida é feita de escolhas. Escolha ser feliz!",
  "Seu sorriso é seu melhor cartão de visita.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Confie em si mesmo e em seu potencial.",
  "A felicidade não é um destino, é uma forma de viajar.",
  "Hoje é um ótimo dia para começar algo novo.",
  "Acredite em milagres, mas não dependa deles.",
  "Você está a um passo de uma grande realização.",
  "O melhor ainda está por vir.",
  "Não espere por oportunidades, crie-as.",
  "Seja a mudança que você quer ver no mundo.",
  "A persistência é o caminho para o sucesso.",
  "Sua atitude determina sua direção.",
  "Cada dia é uma nova oportunidade.",
  "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
  "Você é capaz de realizar coisas incríveis.",
  "O momento de brilhar é agora.",
  "Acredite nos seus sonhos e eles se tornarão realidade.",
  "Cada desafio é uma oportunidade disfarçada."
];


let phrases = Math.floor(Math.random()*randomluck.length)

btnReset.addEventListener('click', ResetButton)


function coockieClick(){
  toggleScreen()
  screen2.querySelector('#luck').innerText = randomluck[phrases]

  
}
function ResetButton () {
  toggleScreen()
  phrases = Math.floor(Math.random()*randomluck.length)
  
  screen2.querySelector('#luck').innerText = randomluck[phrases]
  
}

function toggleScreen(){

  screen1.classList.toggle("hide")  
  screen2.classList.toggle("hide")

}

