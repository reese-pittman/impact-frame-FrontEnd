import { useState, useEffect } from "react";



const Carsel = () => {
 const [shows, setShows] = useState([]);
 const [imgIndex, setIndex] = useState(1);

    const showList = ["tempImages/tempImg1.jpg", "tempImages/tempImg2.jpg", 
        "tempImages/tempImg3.jpg", "tempImages/tempImg4.jpg", 
        "tempImages/tempImg5.jpg", "tempImages/tempImg6.jpg",
        "tempImages/tempImg7.jpg"
    ]

    //I do not have an api for this and I may not
    const fetchShows = async () => {
        const tempshows = await fetch(api);
        const listshows = await tempshows.json();

        setShows(lsitshows);
    }



    useEffect(() => {
        setShows(showList); ``
    },[]);

    
    function changeDisplay(direction){

        let leftImg = document.getElementById("left-display");
        let currentImg = document.getElementById("current-display");
        let rihgtImg = document.getElementById("right-display");

        setIndex(imgIndex + (direction));

        //console.log(shows[imgIndex + 1]);

        if (imgIndex > shows.length) {
            setIndex(0)
            leftImg.src = shows[-1];
            currentImg.src = shows[imgIndex];
            rihgtImg.src = shows[imgIndex + 1];
        } else if (imgIndex + 1 > shows.length) {
            leftImg.src = shows[imgIndex -1];
            currentImg.src = shows[imgIndex];
            rihgtImg.src = shows[0];
        } else if(imgIndex < 0) {
            setIndex(shows.length - 1)
            leftImg.src = shows[imgIndex - 1];
            currentImg.src = shows[imgIndex];
            rihgtImg.src = shows[0];
        } else if (imgIndex - 1 < 0) {
            leftImg.src = shows[-1];
            currentImg.src = shows[imgIndex];
            rihgtImg.src = shows[imgIndex+ 1];
        } else {
            leftImg.src = shows[imgIndex - (direction)];
            currentImg.src = shows[imgIndex];
            rihgtImg.src = shows[imgIndex + (direction)];
        }

    }
    
    return (
        <div>
            <h2>Keep Watching:</h2>
            <div>
                <button onClick={()=>changeDisplay(-1)} ><img src="../Icons/rightArrowIcon.png" alt="leftIcon" /></button>
                <img id="left-display" src="" alt="Show" />
                <img id="current-display" src="" alt="Show" />
                <img id="right-display" src="" alt="Show" />
                <button onClick={()=>changeDisplay(1)}><img src="../Icons/rightArrowIcon.png" alt="RightIcon" /></button>
            </div>

        </div>
    )

        

}

export default Carsel