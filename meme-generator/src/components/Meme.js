import React from "react";
import classes from "./../styles.module.css"

const Meme = () =>{
    // API = https://api.imgflip.com/get_memes


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