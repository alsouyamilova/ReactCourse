import styles from './Button.module.css'

export default function Button({children, isActive, ...props}){ // ...props - все остальные параметры (rest)
    return(
        //изолированные классы кнопки
        <button 
        {...props} //spread
        className={isActive ? `${styles.button} ${styles.active}`: styles.button} 
        >{children}</button>
    )
}