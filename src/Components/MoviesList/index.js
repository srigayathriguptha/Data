const MoviesList = (props) => {
    const { item } = props;
    const { name, type, languages, category, image, date, year, month, cast, OTT, ratings } = item;
    return (
        <li>
            <h1>{name}</h1>
            <h2>{type}</h2>
            <h3>{languages}</h3>
            <h4>{category}</h4>
            <img src={image} />
            <h5>{date}</h5>
            <h5>{year}</h5>
            <h5>{month}</h5>
            <h4>{cast}</h4>
            <h4>{OTT}</h4>
            <h4>{ratings}</h4>
        </li>
    )
}

export default MoviesList;