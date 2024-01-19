import React from "react";
import { createContext } from "react";

const contextShare=createContext({addedItems:[{img:null,number:null}],setAddedItems:()=>{}});

export default contextShare;