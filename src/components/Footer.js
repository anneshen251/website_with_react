import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <BottomNavigation >
          <BottomNavigationAction href = "https://www.facebook.com/anneshennn/" color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#36322d"}}/>} />
          <BottomNavigationAction href = "https://www.linkedin.com/in/anne-shen-5894971bb/" label="LinkedIn" value="favorites" icon={<LinkedInIcon  style={{fill: "##36322d"}}/>} />
          <BottomNavigationAction href = "https://www.instagram.com/anneshen_/" label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: "#36322d"}}/>} />
          <BottomNavigationAction href = "https://github.com/anneshen251" label="Github" value="folder" icon={<GithubIcon  style={{fill: "#36322d"}}/>} />
        </BottomNavigation>
)
}

export default Footer