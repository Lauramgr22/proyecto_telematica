import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "store/StoreProvider";
import { types } from "store/storeReducer";
import { useContext } from "react"
import { StoreContext } from "store/StoreProvider";

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
  //Valor del estado local para poner nombre y potencia
    const [name, setName]= useState("");
    const [potencia, setPotencia]= useState(0);

    const [store, dispatch2] = useContext(StoreContext)
    const {user, lastId } = store;
   // console.log(lastId, "****************************************************");


    const textColor = useColorModeValue("navy.700", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const [show, setShow] = React.useState(false);
    const dispatch= useDispatch();
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
          Dispositivo<Text color={"#B50000"}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          variant='auth'
          fontSize='sm'
          ms={{ base: "0px", md: "0px" }}
          type='text'
          placeholder='BOMBILLO'
          mb='24px'
          fontWeight='500'
          size='lg'
          onChange={({target:{value}})=>{
            console.log(value);
            setName(value);
          }}
        />
        <FormLabel
          ms='4px'
          fontSize='sm'
          fontWeight='500'
          color={textColor}
          display='flex'>
          Potencia (W)<Text color={"#B50000"}>*</Text>
        </FormLabel>
        <InputGroup size='md'>
          <Input
            isRequired={true}
            fontSize='sm'
            placeholder='70'
            mb='24px'
            size='lg'
            onChange={({target:{value}})=>{
              console.log(value);
              setPotencia(value);
            }}
            type='number'
            variant='auth'
          />
        </InputGroup>
        <FormLabel
          ms='4px'
          fontSize='sm'
          fontWeight='500'
          color={textColor}
          display='flex'>
          Precio Kw/h (COP)<Text color={"#B50000"}>*</Text>
        </FormLabel>
        <InputGroup size='md'>
          <Input
            isRequired={true}
            fontSize='sm'
            placeholder='15000'
            mb='24px'
            size='lg'
            type='number'
            variant='auth'
          />
        </InputGroup>
        <Button
          background='#B50000'
          fontSize='sm'
         // variant='brand'
          fontWeight='500'
          w='100%'
          h='50'
          mb='24px'
          onClick={()=>dispatch({
            type: types.productAdd,
            payload:{
              "id":lastId+1,
              "name":name,
              "estado": "Inactivo",
              "potencia": potencia,
              "acciones": 75.5 
            }
            })}
            >
          Ingresar nuevo dispositivo
        </Button>
      </FormControl>
            </Box>
      </Center>
    )
}