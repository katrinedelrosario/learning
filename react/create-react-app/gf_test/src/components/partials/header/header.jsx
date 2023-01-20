import style from './header.module.scss'

const Header = () => {
    return (
        <header className={style.container}>
          <img src={require('../../../assets/images/Bg-Hero-Blue.png')} alt="header-bg" />
          <div className={style.text}>
            <h1>klima<span>tossen</span></h1>
            <h2>klima-tossen.dk</h2>
            <p>"Det er rigtigt, at vi hver især kun kan bidrage lidt <br /> til den samlede løsning."</p>
            <p>"Lige så rigtigt er det, at vi slet ikke kan nå målet <br /> uden at hver især bidrager en smule til det."</p>
          </div>
        </header>
    )
}

export {Header}