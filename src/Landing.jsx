import { useState, useEffect } from "react";
import Anime from "./Anime";



export default function Landing() {

    const [topAnimes, setTopAnimes] = useState([]);
    const [loading, setLoading] = useState(true);




    async function fetchTopAnimes(filter) {
        const animeRes = await fetch("https://api.jikan.moe/v4/top/anime");
        const animeJson = await animeRes.json();
        setTopAnimes(animeJson);
        setLoading(false);
    };




    <div>
        <nav>
            <button><img src="" alt="expand navigation" /></button>
            <input type="text" />
            <button><img src="" alt="profile" /></button>
        </nav>
        <h1>Impact Frames</h1>
        <div>

        </div>
        <div>

        </div>
        <div>
            
        </div>
    </div>

}