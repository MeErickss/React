import { TaskItem } from "./TaskItem/TaskItem"
import styles from "./TaskList.module.css"


export function TaskList(){
    const arayTarefas =[]
    const task = new Object(),
        id = Math.random(),
        nTarefa = "minhaTarefa";

     return(
        <ul className={styles.TaskList}>
            <TaskItem texto="Item 1" task={task} array={arayTarefas}/>
        </ul>
    )
}