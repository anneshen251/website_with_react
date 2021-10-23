import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import Container from '@material-ui/core/Container';
import face from './myFace.png'
import ollie from './ollie.png'



import './App.css';
import { Helmet } from 'react-helmet';
//changes to imports 
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AndroidIcon from '@material-ui/icons/Android';
import ComputerIcon from '@material-ui/icons/Computer';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import CreateIcon from '@material-ui/icons/Create';

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

This website serves as my portfolio for various 
school/personal/club projects and I hope it showcases
my different skills and abilities. I’m actively looking for
entry level opportunities, so please feel free to contact
me :) 
          </Typography>
        <img width = "450" height = "450" src={face} className={classes.logo}/> 
        <img width = "250" height = "250" src={ollie} className={classes.logo}/> 
        </Container>
        <Typography variant = "h5" align = "left" className={classes.bigSpace} color="#3d3627">
          Projects I've Worked On:
        </Typography> 
        <div id = "projects" className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<AndroidIcon style={{fill: "#5b755b", height:"125", width:"125"}}/>}  title="AR Interior Design" btnTitle="Show me More" />
          <Grid icon={<AccountBalanceIcon style={{fill: "#5b755b", height:"125", width:"125"}}/>} title="Bud.get" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#5b755b", height:"125", width:"125"}}/>}  title="Personal Website" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<SportsSoccerIcon style={{fill: "#5b755b", height:"125", width:"125"}}/>}  title="ShowNxt" btnTitle="Show me More"/>
          <Grid icon={<VideogameAssetIcon style={{fill: "#5b755b", height:"125", width:"125"}}/>}  title="Freecell" btnTitle="Show me More"/>
          <Grid icon={<CreateIcon style={{fill: "#5b755b", height:"125", width:"125"}}/>} title="Animation Projects" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;