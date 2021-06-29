import React from 'react';
import { Flex, Box, Text, Input } from '@chakra-ui/react'
import Switch from 'react-switch'
interface Props{
  day:String,
  isOff:Boolean
}
const NoteBook=({day,isOff}:Props) => {
  const [checked,setChecked]=React.useState(isOff===true?false:true);
  return <Flex width={isOff===true?"140px":"310px"} justifyContent="space-between" marginLeft="33px" marginTop="15px" alignItems="center">
    <Box>
      <Text variant="modalBarText">{day}</Text>
    </Box>
    <Flex   alignItems="center">
    <Switch
            checked={checked}
            onChange={setChecked}
            onColor="#B2CDF4"
            onHandleColor="#375F9B"
            offColor="#D8D8D8"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={12}
            width={30}
            className="react-switch"
            id="material-switch"
          />
          
                <Input
                display={isOff===true?"none":"block"}
        borderRadius="2px"
        backgroundColor="#EBEBEB"
        width="50px"
        height="23px"
        padding="5px 9px"
        fontWeight="normal"
        fontSize="12px"
        textAlign="center"
        lineHeight="14.06px"
        placeholder="07:00"
        _placeholder={{ color: '#666666' }}
        marginLeft="32px"
      />
      <Text variant="modalBarText"
        margin="0px 15px"
        display={isOff===true?"none":"block"}
      >To</Text>
      <Input
      display={isOff===true?"none":"block"}
        borderRadius="2px"
        backgroundColor="#EBEBEB"
        width="50px"
        height="23px"
        padding="5px 9px"
        fontWeight="normal"
        fontSize="12px"
        textAlign="center"
        lineHeight="14.06px"
        placeholder="07:00"
        _placeholder={{ color: '#666666' }}
      />
    </Flex>

  </Flex>

}
export default NoteBook;