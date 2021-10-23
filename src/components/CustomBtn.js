import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#84a184",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#5b755b"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

function CustomBtn(props) {
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}

export default CustomBtn