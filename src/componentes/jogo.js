import "./jogo.css"


let Jogo = () => {
  let dados = [1,2,3,4,5,6,7,8,9]
  let alter = 1
  let play1 = []
  let play2 = []

  let boot = true
  let playBoot = []

  function jogar([e,n]) {
    if(dados.indexOf(n) !== -1){ // 1.verificar se é uma op valida
      let p = dados.indexOf(n)
      dados.splice(p,1)
      
      if(alter === 1) { // 2.verificar de quem é a vez
        e.target.textContent = 'X'
        e.target.classList.remove('d')
        play1.push(n)
        verificador(alter)
        boot ? setTimeout(bootOn,1000): alter = 2;
        

      } else if (alter === 2) { // 2.verificar de quem é a vez
        e.target.textContent = '0'
        play2.push(n)
        verificador(alter)
        alter = 1
      }

      console.log(`Jogadas play1: ${play1} | Jogadas play2: ${play2} | Opções disponiveis: ${dados}`)

    } else {
      alert('Posição já ocupada!')
    }

    
  }

  function verificador(vez) {
    let combinacoes = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,4,7],
      [2,5,8],
      [3,6,9],
      [3,5,7],
      [1,5,9]
    ]
    let qtdAcertos = 0

    if(vez === 1){
      console.log("Vez: Play1")

      for(let c in combinacoes){
        console.log(`Combinação em analise: ${combinacoes[c]}`)

        for(let d in combinacoes[c]){
          console.log(`Valor em analise: ${combinacoes[c][d]}`) 
          if(play1.indexOf(combinacoes[c][d]) != -1){
            qtdAcertos++
            console.log(`Play1 acertou: ${combinacoes[c][d]}, qtdAcertos: ${qtdAcertos}`)
          }
        }
        if(qtdAcertos == 3){
          alert('Play1 Venceu!!')
          return 0
        }
        qtdAcertos = 0
      }
      

    } else if (vez === 2) {
      console.log("Vez: Play2")
      console.log(`Jogadas feitas:${play2}`)

      for(let c in combinacoes){
        console.log(`Combinação em analise: ${combinacoes[c]}`)

        for(let d in combinacoes[c]){
          console.log(`Valor em analise: ${combinacoes[c][d]}`) 
          if(play2.indexOf(combinacoes[c][d]) != -1){
            qtdAcertos++
            console.log(`Play2 acertou: ${combinacoes[c][d]}, qtdAcertos: ${qtdAcertos}`)
          }
        }
        if(qtdAcertos == 3){
          alert('Play2 Venceu!!')
          return 0
        }
        qtdAcertos = 0
      }
    } else if (vez === 3) {
      console.log("Vez: Boot")
      console.log(`Jogadas feitas:${playBoot}`)

      for(let c in combinacoes){
        console.log(`Combinação em analise: ${combinacoes[c]}`)

        for(let d in combinacoes[c]){
          console.log(`Valor em analise: ${combinacoes[c][d]}`) 
          if(playBoot.indexOf(combinacoes[c][d]) != -1){
            qtdAcertos++
            console.log(`Boot acertou: ${combinacoes[c][d]}, qtdAcertos: ${qtdAcertos}`)
          }
        }
        if(qtdAcertos == 3){
          alert('Boot Venceu!!')
          return 0
        }
        qtdAcertos = 0
      }
    }
    
  }

  function bootOn() {
        /*
        e.target.textContent = '0' |
        play2.push(n) |
        verificador(alter) |
        alter = 1 | v
    */
        alter = 3
        let divs = document.querySelectorAll('.d')
        let escolha = Math.floor(Math.random()*(dados.length -1))
        console.log(`Boot escolheu: ${escolha}, disponiveis: ${dados}`)
        console.log(divs)

        
        divs[escolha].textContent = 'B'
        divs[escolha].classList.remove('d')
        dados.splice(escolha,1)
        playBoot.push(dados[escolha])
        verificador(alter)
        alter = 1

  }


  return (
    <div className="container">
      <div className="d1 d" onClick={(y) => {jogar([y,1])}} ></div>
      <div className="d2 d" onClick={(y) => {jogar([y,2])}} ></div>
      <div className="d3 d" onClick={(y) => {jogar([y,3])}} ></div>
      <div className="d4 d" onClick={(y) => {jogar([y,4])}} ></div>
      <div className="d5 d" onClick={(y) => {jogar([y,5])}} ></div>
      <div className="d6 d" onClick={(y) => {jogar([y,6])}} ></div>
      <div className="d7 d" onClick={(y) => {jogar([y,7])}} ></div>
      <div className="d8 d" onClick={(y) => {jogar([y,8])}} ></div>
      <div className="d9 d" onClick={(y) => {jogar([y,9])}} ></div>
    </div>
  )
}

export default Jogo