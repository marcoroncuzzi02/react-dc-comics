import comics from "./comics"

const Card = () => {
    return(
        <ul className="row row-cols-6">
            {comics.map( (element) => {
                return(
                    <li className="col" key="element.id">
                        <img src={element.thumb} alt={element.title} />
                        <h3 className="fs-6">{element.title}</h3>
                    </li>
                )
                })
            }
        </ul>
    )
}
export default Card