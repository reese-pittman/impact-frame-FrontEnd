const Anime = (props) => {
    return (
        <div className="anime">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};


export default Anime;