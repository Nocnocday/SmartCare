import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

function Layout({children}) {
  return (
    <div className="flex h-full">
      <div className="section-left basis-[280px]">
        <Sidebar />
      </div>
      <div className="section-right flex-1 p-[20px]">
        <div className="header">
        <Header />
        </div>
        <div className="content bg-[#fafafa] h-[530px] mt-[10px] rounded-lg shadow">
            {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
