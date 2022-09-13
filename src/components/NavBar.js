import React from 'react'
import logo from '../images/logo.png'
import name from '../images/name.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import Pdf from '../resume.pdf';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#f2eadc",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "8%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "75%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "0.5rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar height = "50px" position="fixed" color="rgba(0, 0, 0, 0.87)" top = "0px" className={classes.bar}>   
                <img src={name} className={classes.logo}/> 
                <Typography onClick={() => window.location.replace("/#about")} variant="subtitle1"  className={classes.menuItem}>
                   About
                </Typography>
                <Typography  onClick={() => window.location.replace("/#experience")} variant="subtitle1" className={classes.menuItem}>
                    Work Experience
                </Typography>
                <a href = {Pdf} target = "_blank" className = {classes.menuItem}>Resume</a>
                <Typography onClick={() => window.location.replace("/#projects")} variant="subtitle1" className={classes.menuItem}>
                    Projects
                </Typography>
                <Typography onClick={() => window.location.replace("/#socials")} variant="subtitle1" className={classes.menuItem}>
                    Contact Me!
                </Typography>
            </Toolbar>
    )
}

export default NavBar