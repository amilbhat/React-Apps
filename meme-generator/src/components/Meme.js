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
        {/* Meme Image and Text Render Here */}
       </main> 
    )
}

export default Meme