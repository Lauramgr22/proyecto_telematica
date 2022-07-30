
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase"
import { useDispatch } from "store/StoreProvider";
import { types } from "store/storeReducer";

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
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
//Aqui va la imagen, se va a la ruta y reemplazamos por la imagen que queremos, palabra clave: Tamarindo
import illustration from "assets/img/auth/auth2.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState();
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, user.email, user.password)
      dispatch({
        type: types.authLogin,
        payload: {
          "id": 1,
          "name": "Laura",
          "role": "user"
        }
      })
      history.push('/')
    } catch (error) {
      setError(error.message);
    }
  }
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
            Iniciar sesión
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            ¡Ingrese su correo electrónico y contraseña para iniciar sesión!
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
          <Flex align='center' mb='25px'>
            <HSeparator />
            <HSeparator />
          </Flex>
          <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
              <FormLabel
                display='flex'
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                mb='8px'>
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
                id="email"
                name="email"
                onChange={handleChange}
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                type='email'
                placeholder='email@email.com'
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
                Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size='md'>
                <Input
                  isRequired={true}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  fontSize='sm'
                  placeholder='Min. 8 characters'
                  mb='24px'
                  size='lg'
                  type={show ? "text" : "password"}
                  variant='auth'
                />
                <InputRightElement display='flex' alignItems='center' mt='4px'>
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <Flex justifyContent='space-between' align='center' mb='24px'>
                <FormControl display='flex' alignItems='center'>
                  <Checkbox
                    id='remember-login'
                    colorScheme='brandScheme'
                    me='10px'
                  />
                  <FormLabel
                    htmlFor='remember-login'
                    mb='0'
                    fontWeight='normal'
                    color={textColor}
                    fontSize='sm'>
                    Keep me logged in
                  </FormLabel>
                </FormControl>
                <NavLink to='/auth/forgot-password'>
                  <Text
                    color={textColorBrand}
                    fontSize='sm'
                    w='145px'
                    fontWeight='500'>
                    ¿Olvidó su contraseña?
                  </Text>
                </NavLink>
              </Flex>
              <Button
                type='submit'
                fontSize='sm'
                variant='brand'
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'>
                Iniciar sesión
              </Button>
            </form>
          </div>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='start'
            maxW='100%'
            mt='0px'>
            <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
              ¿Aún no se ha registrado?
              <NavLink to='/auth/sign-up'>
                <Text
                  color={textColorBrand}
                  as='span'
                  ms='5px'
                  fontWeight='500'>
                  Cree una cuenta
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
