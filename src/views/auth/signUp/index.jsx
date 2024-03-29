import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase"
import { Redirect } from "react-router-dom"
import {
  Box,
  Button,
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

function SignUp() {
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
      await createUserWithEmailAndPassword(auth, user.email, user.password)
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
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
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
            Crear Cuenta
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            ¡Ingrese su correo electrónico y contraseña para crear una cuenta!
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
                placeholder='mail@simmmple.com'
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
                  fontSize='sm'
                  placeholder='Min. 8 characters'
                  mb='24px'
                  size='lg'
                  type={show ? "text" : "password"}
                  variant='auth'
                  onChange={handleChange}
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
              <Button
                type="submit"
                fontSize='sm'
                variant='brand'
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
              >
                Crear Cuenta
              </Button>
            </form>
          </div>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignUp;
