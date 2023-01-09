import style from './nav.module.scss'

const NavArr = [
    {title: 'main page'},
    {title: 'products'},
    {title: 'about us'},
    {title: 'available positions'},
    {title: 'contact us'}
]

const Nav = (props) => {
    console.log(props);
    return (
        <ul className={style.container}>
            {props.data.map((navItem, key) => {
               return (
                <li key={key}><a href={`#${navItem.title}`}>{navItem.title}</a></li>
               )     
            })}
        </ul>
    )
}
export {NavArr}
export {Nav}