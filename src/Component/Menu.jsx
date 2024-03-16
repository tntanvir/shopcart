import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
} from "@material-tailwind/react";
import {
  Drawer,

} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";


import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { Badge } from "@material-tailwind/react";
import { useContext } from "react";
import { contextAPI } from "../App";
import { Avatar } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
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
//------------loging impot--------
import auth from "./Firebase/firebase.config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";




export function Menu() {
  const [openNav, setOpenNav] = React.useState(false);
  const { cartItem, setCartItem } = useContext(contextAPI);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  // ----------Dawer-------
  const [open, setOpen] = React.useState(false);
  // ----------------login-------
  const { userLogin, setUserLogin } = useContext(contextAPI);
  const singOutrem = () => {
    console.log('object');

    signOut(auth).then(() => {
      // Sign-out successful.
      setUserLogin([])
      Navigate('/')
      closeDrawer()
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }


  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
      <Navbar className="mx-auto max-w-screen px-4 py-2 rounded-none
    sticky top-0 z-50 bg-transparent shadow-none border-none">
        <div className="flex items-center justify-between text-blue-gray-900 bg-transparent">
          {/* {
            console.log(userLogin)
          } */}
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
            {userLogin.email ?
              <Tooltip content={userLogin.displayName}>

                <Avatar size="sm" className="cursor-pointer" src={userLogin.photoURL} alt="avatar" onClick={openDrawer} />
              </Tooltip>
              :
              <div>

                <Button variant="text" size="sm" color="blue-gray">
                  Log In
                </Button>
                <Button size="sm" className="bg-primary text-black">
                  Sign In
                </Button>
              </div>}
          </div>
          <div className="lg:hidden flex items-center justify-center gap-1">
          <Link to={'/cart'}>
              <Badge content={cartItem.length} withBorder>

                <BsCart4 className="text-xl font-bold" />
              </Badge>
            </Link>
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
      {/* ----------------------Dawer--------------------- */}
      {/* <Button >Open Drawer</Button> */}
      <Drawer placement="right" open={open} onClose={closeDrawer} className="p-4 " overlay={false}>
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            {/* Material Tailwind */}
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex  flex-col items-center gap-2">
          <Avatar src={userLogin.photoURL} size="lg" />
          <Typography variant="h4">{userLogin.displayName}</Typography>
          <Typography>{userLogin.email}</Typography>
          <div className="">

            <Button size="sm" onClick={() => singOutrem()}>Sing out</Button>
          </div>
        </div>
      </Drawer>

    </>

  );
}

