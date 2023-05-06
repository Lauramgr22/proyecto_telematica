import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <b><h2 style={{fontSize:"28px",color:"#B50000"}}>IoTH&H</h2></b>
      <HSeparator mb='20px' />
    </Flex>
  );
  //borojo: cambiar el titulo
}

export default SidebarBrand;
