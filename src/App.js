import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import face from './images/myFace.png';
import ollie from './images/ollie.png';
import chewy from './images/chewy.png';
import servicenow from './images/servicenow.png';



import './App.css';
import { Helmet } from 'react-helmet';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#bbc7bd",
    },
  },
  typography: {
    fontFamily: [
      'Nunito'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <Helmet>
        <title>Anne Shen</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Container id="about" maxWidth = "xl" alight = "left">
          <Typography variant="h4" align = "left" className={classes.bigSpace} color="#3d3627">
           Welcome!
          </Typography> 
          <Typography variant="h5" align = "left" className={classes.littleSpace} color="#59503d">
          Hi! My name is Anne Shen. I’m currently a second year student
studying at Northeastern University and pursuing a B.S. in 
Computer Science and a minor in Animation. In my free time 
I love to explore Boston, decorate my room, and play with 
my dog!
<Typography display = "block"/>
This website serves as my portfolio for various 
school/personal/club projects and I hope it showcases
my different skills and abilities. I’m actively looking for
entry level opportunities, so please feel free to contact
me :) 
          </Typography>
        <img width = "450" height = "450" src={face} className={classes.logo}/> 
        <img width = "250" height = "250" src={ollie} className={classes.logo}/> 
        </Container>
        <Container id="experience" maxWidth = "xl" alight = "left">
        <Typography variant = "h4" align = "left" className={classes.bigSpace} color="#3d3627">
          Work Experience:
          <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid item md={12}>
          <img align = "left" width = "20%" height = "20%" src={servicenow} className={classes.logo}/> 

          <Typography variant="h5" align = "left" className={classes.littleSpace} color="#59503d">
          Software Engineer Intern 
          <Typography display = "block"/>
          June 2022 - September 2022
          </Typography>
          <Typography variant="h6" align = "left" className={classes.littleSpace} color="#59503d">
          As an intern on the UX Platform team, I helped my co-workers to monitor user metrics across the various ServiceNow products. I mainly utilized Javascript in order to dispatch events that would collect performance metrics for various aspects such as the time a user stays on a particular webpage or how often a user clicks on a specific button. This data would then be sent over to an analytics platform called AppSee.
          </Typography>
          </Grid>
          <Grid item md={12}>
          <img align = "right" width = "20%" height = "20%" src={chewy} className={classes.logo}/> 
          <Typography variant="h5" align = "right" className={classes.littleSpace} color="#59503d">
          Software Development Co-op
          <Typography display = "block"/>
          Janurary 2022 - June 2022
          </Typography>
          <Typography variant="h6" align = "left" className={classes.littleSpace} color="#59503d">
          Worked with the customer MDM team to resolve issues and add new API features to the Chewy database. Some tickets I've worked on dealt with running database fix scripts, QA-ing other team member's tickets, and adding additional features such as new fields to the customer API's and read/write scopes. Tools/languages that I have used throughout this Co-op include Postman, Docker, Java, SQL, and Python.
          </Typography>
          </Grid>  
        </div>
        </Typography> 
        <Typography variant = "h4" align = "left" className={classes.bigSpace} color="#3d3627">
          Projects I've Worked On:
        </Typography> 
        </Container>

        <div id = "projects" className={`${classes.grid} ${classes.littleSpace}`}>
          <Container>
          <Grid item md={12}>
          <Typography variant="h5" align = "left" className={classes.bigSpace} color="#59503d">
          Freecell
          <Typography display = "block"/>
          </Typography>
          <Typography variant="h6" align = "left" className={classes.littleSpace} color="#59503d">
            Freecell was a school project to become familiar with OOD princeples and the MVC pattern. Much like solitare users are givings stacks of cards with the end goal being to have all cards organized by number and suit. Users specified which card they wanted to move and where through the controller which communicates with the model and displays the stacks through the view. I also implemented other features such as the ability to move multiple cards.
          </Typography>
          </Grid>
          <Grid item md={12}>
          <Typography variant="h5" align = "right" className={classes.littleSpace} color="#59503d">
          AR Interior Design 
          <Typography display = "block"/>
          </Typography>
          <Typography variant="h6" align = "left" className={classes.littleSpace} color="#59503d">
            Built an android application using Android Studio and the AI Core API from Google. The purpose of this app was to be able to visualize pieces of furniture that a user would want to buy without having to own the physical pieces themselves. 
          </Typography>
          </Grid>  
          <Grid item md={12}>
          <Typography variant="h5" align = "left" className={classes.littleSpace} color="#59503d">
          Personal Website 
          <Typography display = "block"/>
          </Typography>
          <Typography variant="h6" align = "left" className={classes.littleSpace} color="#59503d">
            This website was built using React JS and hosted on Google Cloud! The source code is from https://github.com/facebook/create-react-app and I began to build off of that repository. Although imperfect I learned how to more about front-end development through this project :). 
          </Typography>
          </Grid> 
          </Container>
        </div>
        <div className={classes.bigSpace}>
        <Container id="socials" maxWidth = "xl" alight = "left">
          <Typography variant = "h5" align = "center">
          Feel free to reach out to me via any of my socials below!
          </Typography>

        </Container>
        <Footer/>

        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;