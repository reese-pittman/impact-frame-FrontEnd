import { useState, useEffect } from "react";
import { fetchTopAnimes } from "./jikanAPI";
import Carsel from "./Carsel";


export default function Landing() {

    const [topAnimes, setTopAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [topFilter, setTopFilter] = useState("airing");


    useEffect(() => {
        console.log("Fetching");
        fetchAnimeShows();
      }, [topFilter]);

    async function fetchAnimeShows() {
        const shows = await fetchTopAnimes(topFilter)
        setTopAnimes(shows);
        console.log("Fetched");

    }

    return (
    <div>
        <nav className="nav-bar">
            <button className="nav-button"><img src="../icons/navIcon.png" alt="expand navigation" /></button>
            <input type="text" />
            <button><img src="" alt="profile" /></button>
        </nav>
        <h1 className="title">Impact Frames</h1>
        <div className="news-box">
            <img src="" alt="place holder" />
        </div>
        <div className="carsel">
            <Carsel></Carsel>
        </div>
        <div>
            <h2>Top Shows!</h2>
            <label htmlFor="filter-type">Filter By:</label>
            <select
                onChange={(e) => setTopFilter(e.target.value)}
                name="filter-type"
                value={topFilter}
            >
                <option value="upcoming">Up coming</option>
                <option value="bypopularity">Popularity</option>
                <option value="favorite">Favorite</option>
            </select>
            <div>
            {topAnimes.map((show) => (
                <p key={show.id}>{show.title}</p>
              ))}
            </div>
        </div>
    </div>
    )
}