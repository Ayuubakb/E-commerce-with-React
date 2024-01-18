import React from "react";
import { createContext } from "react";

const contextShare=createContext({addedItems:[],setAddedItems:()=>{}});

export default contextShare;