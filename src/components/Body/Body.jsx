import React from "react";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

const Body = () => {
    return (
        <div className="flex flex-nowrap px-10 py-10">
            <Sidebar className="self-center" />
            <Content className="flex grow" />
        </div>

    )
}
export default Body