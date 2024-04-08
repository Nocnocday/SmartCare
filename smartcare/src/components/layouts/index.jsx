import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

function Layout({children}) {
  return (
    <div className="flex h-full">
      <div className="section-left basis-[280px] relative">
        <Sidebar />
      </div>
      <div className="section-right flex-1 p-[20px]">
        <div className="header">
        <Header />
        </div>
        <div className="content mt-[10px]">
            {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
