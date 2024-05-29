const varSelectDe = document.querySelector('#selectDE')
// Colocar o Digitado no Parágrafo #pum
const varpum = document.querySelector('#pum')

//Nome das Moedas
const varNomeMoedaA = document.querySelector('.NomedaMoedaA')
const varNomeMoedaB = document.querySelector('.NomedaMoedaB')

// colocar o Resultado no Paragrafo #pdois para DOL
const varpdois = document.querySelector('#pdois')

// imagens
const varimagemUm = document.querySelector('#bandeiraum')
const varimagemDois = document.querySelector('#bandeiradois')

const varValorDigitadonoInput = document.querySelector('.inputdigitado')

const varbotaoConverter = document.querySelector('button')
varbotaoConverter.addEventListener('click', funcaoCliquei)
async function funcaoCliquei() {
  const varSelectPara = document.querySelector('#selectPara')

  const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,BRL-USD,EUR-USD,BTC-USD,BRL-EUR,USD-EUR,BTC-EUR,ARS-BRL,ARS-USD,ARS-EUR,BRL-ARS').then((response) => response.json())


  const realDolar = data.USDBRL.high
  const realEuro = data.EURBRL.high
  const realBitcoin = data.BTCBRL.high
  const realPeso = data.ARSBRL.high

  const dolarReal = data.BRLUSD.high
  const dolarEuro = data.EURUSD.high
  const dolarBitcoin = data.BTCUSD.high
  const dolarPeso = data.ARSUSD.high

  const euroReal = data.BRLEUR.high
  const euroDolar = data.USDEUR.high
  const euroBitcoin = data.BTCEUR.high
  const euroPeso = data.ARSEUR.high

  const pesoReal = data.BRLARS.high
  const pesoDolar = data.BRLARS.high
  const pesoEuro = data.BRLARS.high
  const pesoBitcoin = data.BRLARS.high
  
   // REAL
  // Real para Dollar //
  if (varSelectDe.value == 'real' && varSelectPara.value == 'doleta') {
    varpum.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(varValorDigitadonoInput.value)
    const varResultadoRD = varValorDigitadonoInput.value / realDolar
    varpdois.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(varResultadoRD)
    varNomeMoedaA.innerHTML = 'Real'
    varNomeMoedaB.innerHTML = 'Dólar'
    varimagemUm.src = './assets/midia/imgBrasil.png'
    varimagemDois.src = './assets/midia/imgDollar.png'
  }
  // Real para Euro //
  if (varSelectDe.value == 'real' && varSelectPara.value == 'euro') {
    varpum.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(varValorDigitadonoInput.value)
    varpdois.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(varValorDigitadonoInput.value / realEuro)
    varNomeMoedaA.innerHTML = 'Real'
    varNomeMoedaB.innerHTML = 'Euro'
    varimagemUm.src = './assets/midia/imgBrasil.png'
    varimagemDois.src = './assets/midia/imgEuro.png'
  }
  // Real para Bitcoin //
  if (varSelectDe.value == 'real' && varSelectPara.value == 'bitcoin') {
    varpum.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(varValorDigitadonoInput.value)
    varpdois.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BIT',
      maximumFractionDigits: 10,
    }).format(varValorDigitadonoInput.value / realBitcoin)
    varNomeMoedaB.innerHTML = 'Bitcoin'
    varNomeMoedaA.innerHTML = 'Real'
    varimagemUm.src = './assets/midia/imgBrasil.png'
    varimagemDois.src = './assets/midia/imgBitcoin.png'
  }
  // Real para Real //
  if (varSelectDe.value == 'real' && varSelectPara.value == 'real') {
    varpum.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(varValorDigitadonoInput.value)
    varpdois.innerHTML = ' '
    varNomeMoedaB.innerHTML = 'You are God damn right'
    varNomeMoedaA.innerHTML = 'Real'
    varimagemUm.src = './assets/midia/imgBrasil.png'
    varimagemDois.src = './assets/midia/imgWalter.PNG'
  }
   // Real para Peso
  if (varSelectDe.value == 'real' && varSelectPara.value == 'peso') {
    varpum.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(varValorDigitadonoInput.value)
    varpdois.innerHTML = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(varValorDigitadonoInput.value / realPeso)
    varNomeMoedaB.innerHTML = 'Peso'
    varNomeMoedaA.innerHTML = 'Real'
    varimagemUm.src = './assets/midia/imgBrasil.png'
    varimagemDois.src = './assets/midia/imgPeso.png'
  }
  // Do Dollar para Real //
  if (varSelectDe.value == 'doleta' && varSelectPara.value == 'real') {
    varpum.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(varValorDigitadonoInput.value)
    const varResultadoDR = varValorDigitadonoInput.value / dolarReal
    varpdois.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(varResultadoDR)
    varNomeMoedaA.innerHTML = 'Dólar'
    varNomeMoedaB.innerHTML = 'Real'
    varimagemUm.src = '../assets/midia/imgDollar.png'
    varimagemDois.src = '../assets/midia/imgBrasil.png'
  }
  // do Dollar para Euro //
  if (varSelectDe.value == 'doleta' && varSelectPara.value == 'euro') {
    varpum.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(varValorDigitadonoInput.value)
    const varResultadoDE = varValorDigitadonoInput.value / dolarEuro
    varpdois.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(varResultadoDE)
    varNomeMoedaA.innerHTML = 'Dólar'
    varNomeMoedaB.innerHTML = 'Euro'
    varimagemUm.src = '../assets/midia/imgDollar.png'
    varimagemDois.src = '../assets/midia/imgEuro.png'
  }
  // do Dollar para Bictoin //
  if (varSelectDe.value == 'doleta' && varSelectPara.value == 'bitcoin') {
    varpum.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(varValorDigitadonoInput.value)
    const varResultadoDB = varValorDigitadonoInput.value / dolarBitcoin
    varpdois.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BIT',
      maximumFractionDigits: 10,
    }).format(varResultadoDB)
    varNomeMoedaA.innerHTML = 'Dólar'
    varNomeMoedaB.innerHTML = 'Bitcoin'
    varimagemUm.src = './assets/midia/imgDollar.png'
    varimagemDois.src = './assets/midia/imgBitcoin.png'
  }
  // do Dollar para Peso //
  if (varSelectDe.value == 'doleta' && varSelectPara.value == 'peso') {
    varpum.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(varValorDigitadonoInput.value)
    const varResultadoDB = varValorDigitadonoInput.value / dolarPeso
    varpdois.innerHTML = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(varResultadoDB)
    varNomeMoedaA.innerHTML = 'Dólar'
    varNomeMoedaB.innerHTML = 'Peso'
    varimagemUm.src = './assets/midia/imgDollar.png'
    varimagemDois.src = './assets/midia/imgPeso.png'
  }
  // do Dollar para Dollar
  if (varSelectDe.value == 'doleta' && varSelectPara.value == 'doleta') {
    varpum.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(varValorDigitadonoInput.value)
    varpdois.innerHTML = ' '
    varNomeMoedaB.innerHTML = 'You are God damn right'
    varNomeMoedaA.innerHTML = 'Dólar'
    varimagemUm.src = './assets/midia/imgDollar.png'
    varimagemDois.src = './assets/midia/imgWalter.PNG'
  }
   // EURO
  // do Euro para Dollar
  if (varSelectDe.value == 'euro' && varSelectPara.value == 'doleta') {
    varpum.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(varValorDigitadonoInput.value)
    const varResultadoED = varValorDigitadonoInput.value / euroDolar
    varpdois.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(varResultadoED)
    varNomeMoedaA.innerHTML = 'Euro'
    varNomeMoedaB.innerHTML = 'Dólar'
    varimagemUm.src = './assets/midia/imgEuro.png'
    varimagemDois.src = './assets/midia/imgDollar.png'
  }
  // do Euro para Euro
  if (varSelectDe.value == 'euro' && varSelectPara.value == 'euro') {
    varpum.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(varValorDigitadonoInput.value)
    varpdois.innerHTML = ' '
    varNomeMoedaB.innerHTML = 'You are God damn right'
    varNomeMoedaA.innerHTML = 'Euro'
    varimagemUm.src = './assets/midia/imgEuro.png'
    varimagemDois.src = './assets/midia/imgWalter.PNG'
  }
  // do Euro para Bitcoin
  if (varSelectDe.value == 'euro' && varSelectPara.value == 'bitcoin') {
    varpum.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(varValorDigitadonoInput.value)
    const varResultadoED = varValorDigitadonoInput.value / euroBitcoin
    varpdois.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 10,
    }).format(varResultadoED)
    varNomeMoedaA.innerHTML = 'Euro'
    varNomeMoedaB.innerHTML = 'Bitcoin'
    varimagemUm.src = './assets/midia/imgEuro.png'
    varimagemDois.src = './assets/midia/imgBitcoin.png'
  }
  // do Euro para Real
  if (varSelectDe.value == 'euro' && varSelectPara.value == 'real') {
    varpum.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(varValorDigitadonoInput.value)
    const varResultadoED = varValorDigitadonoInput.value / euroReal
    varpdois.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(varResultadoED)
    varNomeMoedaA.innerHTML = 'Euro'
    varNomeMoedaB.innerHTML = 'Real'
    varimagemUm.src = './assets/midia/imgEuro.png'
    varimagemDois.src = './assets/midia/imgBrasil.png'
  }
    // do Euro para Peso
    if (varSelectDe.value == 'euro' && varSelectPara.value == 'peso') {
      varpum.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(varValorDigitadonoInput.value)
      const varResultadoED = varValorDigitadonoInput.value / euroPeso
      varpdois.innerHTML = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
      }).format(varResultadoED)
      varNomeMoedaA.innerHTML = 'Euro'
      varNomeMoedaB.innerHTML = 'Peso'
      varimagemUm.src = './assets/midia/imgEuro.png'
      varimagemDois.src = './assets/midia/imgPeso.png'
    }

  // BITCOIN
  // do Bitcoin para Dollar //
  if (varSelectDe.value == 'bitcoin' && varSelectPara.value == 'doleta') {
    varpum.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BIT',
    }).format(varValorDigitadonoInput.value)
    const varResultadoBD = dolarBitcoin / varValorDigitadonoInput.value
    varpdois.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(varResultadoBD)
    varNomeMoedaA.innerHTML = 'Bitcoin'
    varNomeMoedaB.innerHTML = 'Dólar'
    varimagemUm.src = './assets/midia/imgBitcoin.png'
    varimagemDois.src = './assets/midia/imgDollar.png'
  }
  // do Bitcoin para Euro //
  if (varSelectDe.value == 'bitcoin' && varSelectPara.value == 'euro') {
    varpum.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BIT',
    }).format(varValorDigitadonoInput.value)
    const varResultadoBE = euroBitcoin / varValorDigitadonoInput.value
    varpdois.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(varResultadoBE)
    varNomeMoedaA.innerHTML = 'Bitcoin'
    varNomeMoedaB.innerHTML = 'Euro'
    varimagemUm.src = './assets/midia/imgBitcoin.png'
    varimagemDois.src = './assets/midia/imgEuro.png'
  }
  // do Bitcoin para Bitcoin //
  if (varSelectDe.value == 'bitcoin' && varSelectPara.value == 'bitcoin') {
    varpum.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BIT',
    }).format(varValorDigitadonoInput.value)
    varpdois.innerHTML = ' '
    varNomeMoedaB.innerHTML = 'You are God damn right'
    varNomeMoedaA.innerHTML = 'Bitcoin'
    varimagemUm.src = './assets/midia/imgBitcoin.png'
    varimagemDois.src = './assets/midia/imgWalter.PNG'
  }
  // do Bitcoin para Real //
  if (varSelectDe.value == 'bitcoin' && varSelectPara.value == 'real') {
    varpum.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BIT',
    }).format(varValorDigitadonoInput.value)
    const varResultadoBR = realBitcoin / varValorDigitadonoInput.value
    varpdois.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(varResultadoBR)
    varNomeMoedaA.innerHTML = 'Bitcoin'
    varNomeMoedaB.innerHTML = 'Real'
    varimagemUm.src = './assets/midia/imgBitcoin.png'
    varimagemDois.src = './assets/midia/imgBrasil.png'
  }
}
