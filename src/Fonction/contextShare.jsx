import React from "react";
import { createContext } from "react";

const contextShare=createContext({addedItems:[{img:null,number:null,size:'m',color:'black'}],setAddedItems:()=>{}});

export default contextShare;