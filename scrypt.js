const varSelectDe = document.querySelector("#selectDE")
// Colocar o Digitado no Parágrafo #pum 
const varpum = document.querySelector("#pum")

//Nome das Moedas
const varNomeMoedaA = document.querySelector(".NomedaMoedaA")
const varNomeMoedaB = document.querySelector(".NomedaMoedaB")


// colocar o Resultado no Paragrafo #pdois para DOL
const varpdois = document.querySelector("#pdois")

// imagens
const varimagemUm = document.querySelector("#bandeiraum")
const varimagemDois = document.querySelector("#bandeiradois")

// MINHAS CONSTANTES - Quanto vale um MoedaPARA em MoedaDE
const varbitcoinHoje = 125001.67
const vareuroHoje = 5.24
const vardolarHoje = 4.92
const varDollarEuroHoje = 1.06
const varDollarBitcoinHoje = 29799.53
const varEuroDollarHoje = 0.945548
const varEuroBitcoinHoje = 27971.64
const varEuroRealHoje = 0.1874
const varBitcoinDollarHoje = 0.0000335520
const varBitcoinEuroHoje = 0.000036
const varBitcoinReal = 0.00000673

const varValorDigitadonoInput = document.querySelector(".inputdigitado")

const varbotaoConverter = document.querySelector("button")
varbotaoConverter.addEventListener("click", funcaoCliquei) 
async function funcaoCliquei() { 

 
    const varSelectPara = document.querySelector("#selectPara")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const realDolar = data.USDBRL.high;
    const realEuro = data.EURBRL.high;
    const realBitcoin = data.BTCBRL.high;

       // Real para Dollar
    if (varSelectDe.value == "real" && varSelectPara.value == "doleta"){        
        varpum.innerHTML = new Intl.NumberFormat("pt-BR",{ style: "currency", currency:"BRL"}).format(varValorDigitadonoInput.value)
        const varResultadoRD = varValorDigitadonoInput.value / realDolar
        varpdois.innerHTML = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(varResultadoRD)
        varNomeMoedaA.innerHTML = "Real"
        varNomeMoedaB.innerHTML = "Dólar"
        varimagemUm.src = "./assets/midia/imgBrasil.png"
        varimagemDois.src = "./assets/midia/imgDollar.png"   }
       // Real para Euro
    if (varSelectDe.value == "real" && varSelectPara.value == "euro"){
        varpum.innerHTML = new Intl.NumberFormat("pt-BR",{ style: "currency", currency:"BRL"}).format(varValorDigitadonoInput.value)
        varpdois.innerHTML = new Intl.NumberFormat("de-DE", {style:"currency", currency:"EUR"}).format
        (varValorDigitadonoInput.value / realEuro)
        varNomeMoedaA.innerHTML = "Real"
        varNomeMoedaB.innerHTML = "Euro"
        varimagemUm.src = "./assets/midia/imgBrasil.png"
        varimagemDois.src = "./assets/midia/imgEuro.png"      }
       // Real para Bitcoin
    if (varSelectDe.value == "real" && varSelectPara.value == "bitcoin"){
       varpum.innerHTML = new Intl.NumberFormat("pt-BR",{ style: "currency", currency:"BRL"}).format(varValorDigitadonoInput.value)
       varpdois.innerHTML = new Intl.NumberFormat("de-DE", {style:"currency", currency:"BIT",maximumFractionDigits:10, }).format(varValorDigitadonoInput.value / realBitcoin)
       varNomeMoedaB.innerHTML = "Bitcoin"
       varNomeMoedaA.innerHTML = "Real"
       varimagemUm.src = "./assets/midia/imgBrasil.png"
       varimagemDois.src = "./assets/midia/imgBitcoin.png" }
       // Real para Real
    if (varSelectDe.value == "real" && varSelectPara.value == "real"){
       varpum.innerHTML = new Intl.NumberFormat("pt-BR",{ style: "currency", currency:"BRL"}).format(varValorDigitadonoInput.value)
       varpdois.innerHTML = " "
       varNomeMoedaB.innerHTML = "You are God damn right"
       varNomeMoedaA.innerHTML = "Real"
       varimagemUm.src = "./assets/midia/imgBrasil.png"
       varimagemDois.src = "./assets/midia/imgWalter.PNG" }   
       // Do Dollar  para Real
    if (varSelectDe.value == "doleta" && varSelectPara.value == "real"){
        varpum.innerHTML = new Intl.NumberFormat("en-US",{ style: "currency", currency:"USD"}).format(varValorDigitadonoInput.value)
        const varResultadoDR = vardolarHoje / varValorDigitadonoInput.value 
        varpdois.innerHTML = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(varResultadoDR)
        varNomeMoedaA.innerHTML = "Dólar"
        varNomeMoedaB.innerHTML = "Real"
        varimagemUm.src = "../assets/midia/imgDollar.png"
        varimagemDois.src = "../assets/midia/imgBrasil.png"   }
       // do Dollar para Euro
    if (varSelectDe.value == "doleta" && varSelectPara.value == "euro"){
        varpum.innerHTML = new Intl.NumberFormat("en-US",{ style: "currency", currency:"USD"}).format(varValorDigitadonoInput.value)
        const varResultadoDE = varValorDigitadonoInput.value / varDollarEuroHoje
        varpdois.innerHTML = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(varResultadoDE)
        varNomeMoedaA.innerHTML = "Dólar"
        varNomeMoedaB.innerHTML = "Euro"
        varimagemUm.src = "../assets/midia/imgDollar.png"
        varimagemDois.src = "../assets/midia/imgEuro.png"   }   
       // do Dollar para Bictoin
    if (varSelectDe.value == "doleta" && varSelectPara.value == "bitcoin"){
        varpum.innerHTML = new Intl.NumberFormat("en-US",{ style: "currency", currency:"USD"}).format(varValorDigitadonoInput.value)
        const varResultadoDB = varValorDigitadonoInput.value / varDollarBitcoinHoje
        varpdois.innerHTML = new Intl.NumberFormat("de-DE", {style:"currency", currency:"BIT"}).format(varResultadoDB)
        varNomeMoedaA.innerHTML = "Dólar"
        varNomeMoedaB.innerHTML = "Bitcoin"
        varimagemUm.src = "./midia/imgDollar.png"
        varimagemDois.src = "./midia/imgBitcoin.png"   }
       // do Dollar para Dollar
    if (varSelectDe.value == "doleta" && varSelectPara.value == "doleta"){
        varpum.innerHTML = new Intl.NumberFormat("pt-BR",{ style: "currency", currency:"BRL"}).format(varValorDigitadonoInput.value)
        varpdois.innerHTML = " "
        varNomeMoedaB.innerHTML = "You are God damn right"
        varNomeMoedaA.innerHTML = "Dólar"
        varimagemUm.src = "./assets/midia/imgDollar.png"
        varimagemDois.src = "./assets/midia/imgWalter.PNG"       } 
// do Euro para Dollar
    if (varSelectDe.value == "euro" && varSelectPara.value == "doleta"){
        varpum.innerHTML = new Intl.NumberFormat("de-DE",{ style: "currency", currency:"EUR"}).format(varValorDigitadonoInput.value)
        const varResultadoED = varValorDigitadonoInput.value / varEuroDollarHoje
        varpdois.innerHTML = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(varResultadoED)
        varNomeMoedaA.innerHTML = "Euro"
        varNomeMoedaB.innerHTML = "Dólar"
        varimagemUm.src = "./assets/midia/imgEuro.png"
        varimagemDois.src = "./assets/midia/imgDollar.png"   }
// do Euro para Euro
    if (varSelectDe.value == "euro" && varSelectPara.value == "euro"){
        varpum.innerHTML = new Intl.NumberFormat("de-DE",{ style: "currency", currency:"EUR"}).format(varValorDigitadonoInput.value)
        varpdois.innerHTML = " "
        varNomeMoedaB.innerHTML = "You are God damn right"
        varNomeMoedaA.innerHTML = "Euro"
        varimagemUm.src = "./assets/midia/imgEuro.png"
        varimagemDois.src = "./assets/midia/imgWalter.PNG"      } 
// do Euro para Bitcoin
    if (varSelectDe.value == "euro" && varSelectPara.value == "bitcoin"){
        varpum.innerHTML = new Intl.NumberFormat("de-DE",{ style: "currency", currency:"EUR"}).format(varValorDigitadonoInput.value)
    const varResultadoED = varValorDigitadonoInput.value / varEuroBitcoinHoje
    varpdois.innerHTML = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(varResultadoED)
    varNomeMoedaA.innerHTML = "Euro"
    varNomeMoedaB.innerHTML = "Bitcoin"
    varimagemUm.src = "./assets/midia/imgEuro.png"
    varimagemDois.src = "./assets/midia/imgBitcoin.png"   }
// do Euro para Real
if (varSelectDe.value == "euro" && varSelectPara.value == "real"){
        varpum.innerHTML = new Intl.NumberFormat("de-DE",{ style: "currency", currency:"EUR"}).format(varValorDigitadonoInput.value)
    const varResultadoED = varValorDigitadonoInput.value / varEuroRealHoje
    varpdois.innerHTML = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(varResultadoED)
    varNomeMoedaA.innerHTML = "Euro"
    varNomeMoedaB.innerHTML = "Real"
    varimagemUm.src = "./assets/midia/imgEuro.png"
    varimagemDois.src = "./assets/midia/imgBrasil.png"   }
// do Bitcoin para Dollar
if (varSelectDe.value == "bitcoin" && varSelectPara.value == "doleta"){
    varpum.innerHTML = new Intl.NumberFormat("de-DE",{ style: "currency", currency:"BIT"}).format(varValorDigitadonoInput.value)
    const varResultadoBD = varValorDigitadonoInput.value / varBitcoinDollarHoje
    varpdois.innerHTML = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(varResultadoBD)
varNomeMoedaA.innerHTML = "Bitcoin"
varNomeMoedaB.innerHTML = "Dólar"
varimagemUm.src = "./assets/midia/imgBitcoin.png"
varimagemDois.src = "./assets/midia/imgDollar.png"   }
// do Bitcoin para Euro
if (varSelectDe.value == "bitcoin" && varSelectPara.value == "euro"){ 
    varpum.innerHTML = new Intl.NumberFormat("de-DE",{ style: "currency", currency:"BIT"}).format(varValorDigitadonoInput.value)
    const varResultadoBE = varValorDigitadonoInput.value / varBitcoinEuroHoje
    varpdois.innerHTML = new Intl.NumberFormat("de-DE", {style:"currency", currency:"EUR"}).format(varResultadoBE)
varNomeMoedaA.innerHTML = "Bitcoin"
varNomeMoedaB.innerHTML = "Euro"
varimagemUm.src = "./assets/midia/imgBitcoin.png"
varimagemDois.src = "./assets/midia/imgEuro.png"   }
// do Bitcoin para Bitcoin
if (varSelectDe.value == "bitcoin" && varSelectPara.value == "bitcoin"){
    varpum.innerHTML = new Intl.NumberFormat("de-DE",{ style: "currency", currency:"BIT"}).format(varValorDigitadonoInput.value)
    varpdois.innerHTML = " "
    varNomeMoedaB.innerHTML = "You are God damn right"
    varNomeMoedaA.innerHTML = "Bitcoin"
    varimagemUm.src = "./assets/midia/imgBitcoin.png"
    varimagemDois.src = "./assets/midia/imgWalter.PNG"      } 
// do Bitcoin para Real
if (varSelectDe.value == "bitcoin" && varSelectPara.value == "real"){
    varpum.innerHTML = new Intl.NumberFormat("de-DE",{ style: "currency", currency:"BIT"}).format(varValorDigitadonoInput.value)
    const varResultadoBR = varValorDigitadonoInput.value / varBitcoinReal
    varpdois.innerHTML = new Intl.NumberFormat("pt-BR", {style:"currency", currency:"BRL"}).format(varResultadoBR)
varNomeMoedaA.innerHTML = "Bitcoin"
varNomeMoedaB.innerHTML = "Real"
varimagemUm.src = "./assets/midia/imgBitcoin.png"
varimagemDois.src = "./assets/midia/imgBrasil.png"   }

}