import React ,{useContext} from 'react'
import { ThemeContext } from "./ThemeProvider.js";

const About = () => {
    const [isDark] = useContext(ThemeContext)
    return (
        <div className={isDark?"AboutPageDark":"AboutPage"}>
            <h1>About Us</h1>
            <p>We are developer of productive app that tracks your task.
            You can add Task , tick them as completed , Edit them , Delete them.
            You can filter your Tasks and we also have special feature of marking important Task with different 
            color</p>
        </div>
    )
}

export default About
