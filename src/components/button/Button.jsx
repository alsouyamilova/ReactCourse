import classes from './Button.module.css'

export default function Button({children, isActive, ...props}){ // ...props - все остальные параметры (rest)
    return(
        //изолированные классы кнопки
        <button 
        {...props} //spread
        className={isActive ? `${classes.button} ${classes.active}`: classes.button} 
        >{children}</button>
    )
}