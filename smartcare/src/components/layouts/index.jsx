import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./sidebar";
import Header from "./header";

function Layout({children,heading,type}) {
  const account = useSelector((state) => {
    console.log("state:::",state);
    return state.account
  })
  console.log(account);
  return (
    <div className="flex h-full">
      <div className="section-left basis-[280px] relative">
        <Sidebar account={account}/>
      </div>
      <div className="section-right flex-1 p-[20px]">
        <div className="header">
        <Header heading={heading} type={type}/>
        </div>
        <div className="content mt-[10px]">
            {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
