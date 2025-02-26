const links= [
    {id: 1, title:"COMICS"},
    {id: 2, title:"MOVIES"},
    {id: 3, title:"MOVIES"},
    {id: 4, title:"TV"},
    {id: 5, title:"GAMES"},
    {id: 6, title:"COLLECTIBLES"},
    {id: 7, title:"VIDEOS"},
    {id: 8, title:"FANS"},
    {id: 9, title:"NEWS"},
    {id: 10, title:"SHOP"},

]

const HeaderPage = () =>{
    return(
        <header>
            <figure>
                <img src="img\dc-logo.png" alt="" />
            </figure>
            <ul>
                {links.map( (element) => {
                    return(
                        <li key="element.id">
                            <a href="">{element.title}</a>
                        </li>
                    )
                    })
                }
            </ul>
        </header>
    )
}
export default HeaderPage
