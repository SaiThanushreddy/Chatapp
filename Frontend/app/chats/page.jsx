"use client"
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
// import  ChatProvider from "../../contextapi/chatProvider"
import SideDrawer from "../../components/Misc/SideDrawer";
import {ChatState} from "../../contextapi/chatProvider"


const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
     
    </div>
  );
};

export default Chatpage;