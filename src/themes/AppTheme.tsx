import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const Text = {
 
  variants: {
    Starred: {
      marginLeft:"12px",
      fontWeight:"500",
      fontSize:"14px",
      lineHeight:"16px",
      color:"#666666",
      marginTop:"2px",
    },
    Recent: {
      marginLeft:"12px",
      fontWeight:"500",
      fontSize:"14px",
      lineHeight:"16px",
      color:"#666666",
      marginTop:"2px"
    },
    descriptionText:{
      ml:"15.23px" ,color:"#666666" ,fontSize:"12px" ,lineHeight:"14px"
    },
    priceTab:{
      cursor:"pointer",
              color:"#ADADAD",
              padding:"15px",
              fontWeight:"500",
              fontSize:"12px",
    },
    dataSet:{
      fontWeight:"500",
      fontSize:"12px",
      lineHeight:"14px",
      color:"#ADADAD"
    }
    ,
    priceTab_active:{
              borderBottom:"2px solid #375F9B",
              cursor:"pointer",
              color:"#ADADAD",
              padding:"15px",
              fontWeight:"500",
              fontSize:"12px",
    },
    menu:{
      fontSize:"12px" ,display:"flex", lineHeight:"14px"
    },
    menu_span:{
      fontWeight: 500 ,color: "#000000"
    },
    moreOption:{
      fontSize:" 12px",
lineHeight: "14px",
alignItems: "center",
color: "#000000",
fontWeight:'400'
    },
    modalBarText:{
      fontSize:"12px",
lineHeight: "14px",
textAlign:"center",
color:"#666666"
    }

   
  },
  
}
const Button={
  variants:{
    priceButtonDisabled:{
      _hover:{ bg: "#375F9B" },
      color:"#EBEBEB",
      fontWeight:500,
      fontSize:"12px",
      textTransform:"uppercase",
      lineHeight:"18px",
      width:"112px",
      height:"34px",
      letterSpacing: "0.05em",
      backgroundColor:"#F8F8F8"
    },
    priceButton:{
      _hover:{ bg: "#375F9B" },
      color:"#FFFFFF",
      fontWeight:500,
      fontSize:"12px",
      textTransform:"uppercase",
      lineHeight:"18px",
      width:"112px",
      height:"34px",
      letterSpacing: "0.05em",
      backgroundColor:"#375F9B"
    },
    crossButton:{
  minWidth: "22px",
  padding:'6.92px',
height:"22px",
borderRadius:"22px",
backgroundColor: "#EBEBEB"
    }
  }
}
const Input={
  variants:{
    textBox:{
   
    },
    modalTextBox:{
      backgroundColor:"black",
      borderRadius: "2px",
      maxWidth:"60px",
      maxHeight:"23px",

    }
  }
}
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Roboto",
        bg: mode("bg.light", "bg.dark")(props),
      },
    }),
  },
    colors: {
        sideDrawer: {
          light: "#FFFFFF",
          dark: "#333333",
        },
        bg:{
            light:'rgb(242,244,248)',
            dark:'white'
        },
        textSecondary:{
          light:"#666666",
          dark:"white"
        },
        Interface_Grey_02:{
          light:"#EBEBEB",
          dark:"white"
        
        },
        Text_third:{
          light:"#ADADAD",
          dark:"white"
        }
      },
      components: {
        Text,
        Button,
        Input,
      },
  })
  export default theme;