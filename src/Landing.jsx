import { useState, useEffect } from "react";
import { fetchTopAnimes } from "./jikanAPI";


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
        <nav>
            <button><img src="../icons/navIcon.png" alt="expand navigation" /></button>
            <input type="text" />
            <button><img src="" alt="profile" /></button>
        </nav>
        <h1 class="title">Impact Frames</h1>
        <div class="news-box">
            <img src="" alt="place holder" />
        </div>
        <div class="carsel">
            
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