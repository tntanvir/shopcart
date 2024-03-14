import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";


import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { Badge } from "@material-tailwind/react";
import { useContext } from "react";
import { contextAPI } from "../App";
function NavList() {
  return (
    <List className=" lg:flex-row  gap-1 md:gap-10 ">
      <Link to="/"><Typography className="text-sm font-semibold py-1.5 lg:py-0 ">Home</Typography></Link>
      <Link to="/shop"><Typography className="text-sm font-semibold py-1.5 lg:py-0 ">Shop</Typography></Link>
      <Link to="/blog"> <Typography className="text-sm font-semibold py-1.5 lg:py-0 ">Blog</Typography></Link>
      <Link to="/about"> <Typography className="text-sm font-semibold py-1.5 lg:py-0 ">About</Typography></Link>
      <Link to="/contact"> <Typography className="text-sm font-semibold py-1.5 lg:py-0 ">Contact</Typography></Link>

    </List>
  );
}

export function Menu() {
  const [openNav, setOpenNav] = React.useState(false);
  const { cartItem, setCartItem } = useContext(contextAPI);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen px-4 py-2 rounded-none
    sticky top-0 z-50 bg-transparent shadow-none border-none">
      <div className="flex items-center justify-between text-blue-gray-900 bg-transparent">
        <Link to='/'>
          <Typography
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2 "
          >
            <img src="/src/assets/images/logo/01.png" className="h-8 md:h-9" />
          </Typography>
        </Link>
        <div className="hidden gap-2 lg:flex items-center">
          <NavList />
          <Link to={'/cart'}>
            <Badge content={cartItem.length} withBorder>

              <BsCart4 className="text-xl font-bold" />
            </Badge>
          </Link>
          <Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button>
          <Button size="sm" className="bg-primary text-black">
            Sign In
          </Button>
        </div>
        <div className="lg:hidden">
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ?
              <IoMdClose className="h-6 w-6" strokeWidth={2} />
              :
              <IoMdMenu className="h-6 w-6" strokeWidth={2} />
            }

          </IconButton>

          <Link to={'/cart'}>
            <Badge content={cartItem.length} withBorder>

              <BsCart4 className="text-xl font-bold" />
            </Badge>
          </Link>
        </div>
      </div>
      <Collapse open={openNav} className="" onClick={() => setOpenNav(!openNav)}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden ">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}