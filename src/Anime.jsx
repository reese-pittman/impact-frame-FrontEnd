const Anime = (props) => {
    return (
        <div className="anime">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.img} alt={props.name} />
        </div>
    );
};

export default Anime;