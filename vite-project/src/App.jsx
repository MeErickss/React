import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { TaskList } from "./components/Main/TaskList/TaskList"
import { Footer } from "./components/Footer/Footer"
import styles from "./App.module.css"

export default function App() {

  function addTask(e){
    
  }

  return (
    <div className={styles.App}>
      <Header/>
      <Main>

        <form onSubmit={addTask()}>
          <input type="text" placeholder="Insira o nome da tarefa"/>
          <button type="submit">+</button>
        </form>

        <TaskList/>
      </Main>

      <Footer autor="Erick"/>
    </div>
  )
}
