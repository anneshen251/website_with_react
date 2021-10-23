import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.png'
import name from '../name.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#f2eadc",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
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
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar height = "50px" position="fixed" color="rgba(0, 0, 0, 0.87)" top = "0px" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <img src={name} className={classes.logo}/> 
                <Typography onClick={() => window.location.replace("/#about")} variant="h6"  className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Animations
                </Typography>
                <Typography onClick={() => window.location.replace("/#projects")} variant="h6" className={classes.menuItem}>
                    Projects
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Me!
                </Typography>
            </Toolbar>
    )
}

export default NavBar