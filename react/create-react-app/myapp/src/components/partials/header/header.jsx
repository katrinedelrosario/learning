import style from './header.module.scss'

const Header = props => {
    return (
        <header className={style.container}>
            <h1>{props.pageTitle}</h1>
        </header>
    )
}

export {Header}