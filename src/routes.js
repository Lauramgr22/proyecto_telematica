import React from "react";

import { Icon, VisuallyHidden } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUpCentered from "views/auth/signUp"

const routes = [
  {
    name: "Ver dispositivos",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Iniciar sesion",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },


];
const user = 'admin';
if (user == 'admin') {
  routes.push({
    name: "Crear Cuenta",
    layout: "/auth",
    path: "/sign-up",
    component: SignUpCentered,
  },
    {
      name: "Crear dispositivos",
      layout: "/admin",
      icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
      path: "/data-tables",
      component: DataTables,
    })
}
export default routes;
