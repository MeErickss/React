import styles from "./Header.modules.css"

let nome = "Joao"

export function Header(){

    return(
        <div className={styles.container}>
            <h1>Header</h1>
            <h2>Olá {nome}</h2>
        </div>
    )

}

export function teste(){
    return "sou um teste"
}