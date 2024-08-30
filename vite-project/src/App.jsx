import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { TaskList } from "./components/Main/TaskList/TaskList"
import { Footer } from "./components/Footer/Footer"
import styles from "./App.module.css"

export default function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Main>

        <form>
          <input type="text" placeholder=""/>
          <button>+</button>
        </form>

        <TaskList/>
      </Main>

      <Footer autor="Nego"/>
    </div>
  )
}
