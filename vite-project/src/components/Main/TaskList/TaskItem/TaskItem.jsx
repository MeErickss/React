import styles from "./TaskItem.module.css"

export function TaskItem(props){
    const { texto } = props
    const { array } = props
    const { task } = props

    task.id = array.lenght
    task.nTarefa = texto
    array.push(task)
    console.log(array)

     return(
        <li className={styles.TaskItem}>
            { task.nTarefa }
            <span>X</span>
        </li>
    )
}