import React from 'react'
import {Box,Text} from '@chakra-ui/react'
interface Props{
    title:string
    style?:object
    fontStyle?:object
}
const OnBox= (props:Props)=>{
    const {title,style,fontStyle}=props;
    return <Box {...style}
    
    width= "33px"
    height= "16px"
    borderRadius= "2px"
    backgroundColor= "#EBFEDF"
    display= "flex"
    alignItems= "center"
    justifyContent= "center"
    
    ><Text 
    
    fontWeight= "500"
    fontSize="10px"
    lineHeight="12px"
    margin= "0px"
    textAlign= "center"
    color= "#6EAC4A"
    {...fontStyle}>{title}</Text></Box>
}
export default OnBox;