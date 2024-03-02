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



import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
function NavList() {
  return (
    <List className=" lg:flex-row  gap-10 ">
      <Link to="/"><Typography className="text-sm font-semibold ">Home</Typography></Link>
      <Link to="/shop"><Typography className="text-sm font-semibold ">Shop</Typography></Link>
      <Link to="/blog"> <Typography className="text-sm font-semibold ">Blog</Typography></Link>
      <Link to="/about"> <Typography className="text-sm font-semibold ">About</Typography></Link>
      <Link to="/contact"> <Typography className="text-sm font-semibold ">Contact</Typography></Link>

    </List>
  );
}

export function Menu() {
  const [openNav, setOpenNav] = React.useState(false);

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
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 "
        >
          <img src="/src/assets/images/logo/logo.png" className="h-8 md:h-12" />
        </Typography>
        <div className="hidden gap-2 lg:flex">
          <NavList />
          <Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button>
          <Button size="sm" className="bg-primary text-black">
            Sign In
          </Button>
        </div>
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
      </div>
      <Collapse open={openNav}>
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