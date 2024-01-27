
import { createContext } from "react";

const contextShare=createContext({addedItems:[{id:null,img:null,number:0,size:null,color:null,label:null}],setAddedItems:()=>{}});

export default contextShare;