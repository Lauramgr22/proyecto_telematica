import React from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text, 
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

/*Para poder usarlo como etiqueta se exporta */
export function Dispositivos(){
    const textColor = useColorModeValue("navy.700", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const [show, setShow] = React.useState(false);
    return(
        <Center w='100%'>
            <Box w='40%' as='span' fontWeight='bold' fontSize='lg'>
            <FormControl>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='sm'
          fontWeight='500'
          color={textColor}
          mb='8px'>
          Dispositivo<Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          variant='auth'
          fontSize='sm'
          ms={{ base: "0px", md: "0px" }}
          type='text'
          placeholder='Bombillo'
          mb='24px'
          fontWeight='500'
          size='lg'
        />
        <FormLabel
          ms='4px'
          fontSize='sm'
          fontWeight='500'
          color={textColor}
          display='flex'>
          Potencia (W)<Text color={brandStars}>*</Text>
        </FormLabel>
        <InputGroup size='md'>
          <Input
            isRequired={true}
            fontSize='sm'
            placeholder='40 W'
            mb='24px'
            size='lg'
            type='number'
            variant='auth'
          />
        </InputGroup>
        <Button
          fontSize='sm'
          variant='brand'
          fontWeight='500'
          w='100%'
          h='50'
          mb='24px'>
          Crear dispositivo
        </Button>
      </FormControl>
            </Box>
      </Center>
    )
}