import style from './header.module.scss'

const Header = () => {
    return (
        <header className={style.container}>
          <div className='header-bg'>
            <h1>klima <span>tossen</span></h1>
            <h2>klima-tossen.dk</h2>
            <p>"det er rigtigt, at vi hver især kun kan bidrage lidt til den samlede løsning."</p>
            <p>"lige så rigtigt er det, at vi slet ikke kan nå målet uden at hver især bidrager en smule til det."</p>
          </div>
        </header>
    )
}

export {Header}