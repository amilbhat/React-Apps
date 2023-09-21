import React, { useEffect, useState } from "react";
import classes from "./../styles.module.css"

const Meme = () =>{
    const API_URL = "https://api.imgflip.com/get_memes"
    const [memeUrl, setMemeUrl] = useState("http://i.imgflip.com/1bij.jpg")
    const  [topText, setTopText] = useState("TOP TEXT")
    const  [bottomText, setBottomText] = useState("BOTTOM TEXT")
    const [allMemes, setAllMemes] = useState([])

    useEffect(()=>{
        // convert to async function for cleanup
        fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            setAllMemes(data.data.memes)
            console.log(data.data.memes)
        })
    }, [])


    return (
       <main>
        <div className={classes.form}>
        <input 
                    type="text"
                    placeholder="Top text"
                    className={classes["form-input"]}
                    name="topText"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className={classes["form-input"]}
                    name="bottomText"
                />
                <button 
                    className={classes["form-button"]}
                >
                    Get a new meme image
                </button>
        </div>
        <div className={classes.meme}>
                <img src="http://i.imgflip.com/1bij.jpg" className={classes["meme-image"]} />
                <h2 className={`${classes["meme-text"]} ${classes["top"]}`}>TOP TEXT</h2>
                <h2 className={`${classes["meme-text"]} ${classes["bottom"]}`}>BOTTOM TEXT</h2>
            </div>
       </main> 
    )
}

export default Meme