import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Footer } from "./components/Footer/Footer"


export default function App() {
  return (
    <div>
      <Header/>
      <Main>
        <h3>Conteudo</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nihil suscipit reprehenderit, odio, voluptates, voluptatem explicabo voluptatum a ad beatae blanditiis ducimus recusandae delectus iure! Vel itaque illum architecto ad.</p>
      </Main>

      <Footer autor="Nego"/>
    </div>
  )
}
