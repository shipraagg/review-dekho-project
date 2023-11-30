import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Appstate } from "../App";
import Login from "./Login";
import Signup from "./Signup";
const Header = () => {
  const useAppstate = useContext(Appstate);
  return (
    <div className="sticky header z-10 top-0 text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Review<span className="text-white">Dekho</span>
        </span>
      </Link>
      {useAppstate.login ? (
        <Link to={"/addMovie"}>
          <h1 className="text-lg  cursor-pointer flex items-center">
            <Button>
              <AddCircleOutlineIcon className="mr-1" color="secondary" />
              <span className="text-white">Add new</span>
            </Button>
          </h1>
        </Link>
      ) : (
        <Link to={"/login"}>
          <h1 className="text-lg bg-green-500 cursor-pointer flex items-center">
            <Button>
              <span className="text-white font-medium capitalize">Login</span>
            </Button>
          </h1>
        </Link>
      )}
    </div>
  );
};

export default Header;
