import React from "react";
import classes from "./../styles.module.css"

const Header = () => {
    return (
        <header className={classes.header}>
            <img 
                src={require("./../images/troll-face.png" )}
                className={classes["header-image"]}
            />
            <h2 className={classes["header-title"]}>Meme Generator</h2>
            <h4 className={classes["header-project"]}>Generate Memes Easily</h4>
        </header>
    )
}

export default Header