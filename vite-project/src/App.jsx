function App() {
  let nome = "Erick"

  const soma = (a,b) => {
    return a+b
  }

  const saudacao = (nome) => {
    return <h2>Seja bem vindo {nome}</h2>
  }

 return(
  <>
    <h1>Oi {nome}</h1>
    <p>{saudacao(nome)}</p>
    <p>{soma(10,20)}</p>
  </>
 );
}

export default App
