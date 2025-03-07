import { useState, useEffect } from "react";

const carsel = () => {
 const [shows, setShows] = useState([]);
 cosnt [imgIndex, setIndex] = useState(1);

    const showList = ["../tempImages/tempImg1", "../tempImages/tempImg2", 
        "../tempImages/tempImg3", "../tempImages/tempImg4", 
        "../tempImages/tempImg5", "../tempImages/tempImg6",
        "../tempImages/tempImg7"
    ]

    //I do not have an api for this and I may not
    const fetchShows = async () => {
        const tempShowList = await fetch(api);
        const showList = await tempShowList.json();

        setShows(showList);
    }    

    function changeDisplay(dirrection){

        let leftImg = document.getElementById("left-display");
        let currentImg = document.getElementById("current-display");
        let rihgtImg = document.getElementById("right-display");

        setIndex(index + (direction));

        if (imgIndex > showList.length) {
            setIndex(0)
            leftImg.src = showList[-1];
            currentImg.src = showList[imgIndex];
            rihgtImg.src = showList[imgIndex + 1];
        } else if (imgIndex + 1 > showList.length) {
            leftImg.src = showList[imgIndex -1];
            currentImg.src = showList[imgIndex];
            rihgtImg.src = showList[0];
        } else if(imgIndex < 0) {
            setIndex(showList.length - 1)
            leftImg.src = showList[imgIndex - 1];
            currentImg.src = showList[imgIndex];
            rihgtImg.src = showList[0];
        } else if (imgIndex - 1 < 0) {
            leftImg.src = showList[-1];
            currentImg.src = showList[imgIndex];
            rihgtImg.src = showList[imgIndex+ 1];
        } else {
            leftImg.src = showList[index - (direction)];
            currentImg.src = showList[imgIndex];
            rihgtImg.src = showList[index + (direction)];
        }

    }
    
    return (
        <div>
            <h2>Keep Watching:</h2>
            <div>
                <Button ><img src="../Icons/rightArrowIcon.png" alt="leftIcon" /></Button>
                <img id="left-display" src="" alt="Show" />
                <img id="middle-display" src="" alt="Show" />
                <img id="right-display" src="" alt="Show" />
                <button><img src="../Icons/rightArrowIcon.png" alt="RightIcon" /></button>
            </div>

        </div>
    )

        

}