import React, { useEffect, useState } from "react";
import classes from "./../styles.module.css"

const Meme = () =>{
    const API_URL = "https://api.imgflip.com/get_memes"
    const [memeUrl, setMemeUrl] = useState("http://i.imgflip.com/1bij.jpg")
    const  [topText, setTopText] = useState("TOP TEXT")
    const  [bottomText, setBottomText] = useState("BOTTOM TEXT")
    const [allMemes, setAllMemes] = useState([])

    useEffect(()=>{
        const getMemes = async () => {
            const response = await fetch(API_URL)
            const data = await response.json()
            setAllMemes(data.data.memes)
        }

        getMemes()
    }, [])

    const topTextHandler = (event) => {
        setTopText(event.target.value)
    }

    const bottomTextHandler = (event) => {
        setBottomText(event.target.value)
    }

    const memeHandler = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMemeUrl(allMemes[randomNumber].url)
    }

    return (
       <main>
        <div className={classes.form}>
        <input 
                    type="text"
                    placeholder="Top text"
                    className={classes["form-input"]}
                    name="topText"
                    value={topText}
                    onChange={topTextHandler}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className={classes["form-input"]}
                    name="bottomText"
                    value={bottomText}
                    onChange={bottomTextHandler}
                />
                <button 
                    className={classes["form-button"]}
                    onClick={memeHandler}
                >
                    Get a new meme image
                </button>
        </div>
        <div className={classes.meme}>
                <img src={memeUrl} className={classes["meme-image"]} alt="fetched meme"/>
                <h2 className={`${classes["meme-text"]} ${classes["top"]}`}>{topText}</h2>
                <h2 className={`${classes["meme-text"]} ${classes["bottom"]}`}>{bottomText}</h2>
            </div>
       </main> 
    )
}

export default Meme