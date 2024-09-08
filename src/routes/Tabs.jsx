import React, { useState } from "react"
import { Outlet } from "react-router-dom";
import "./Tabs.css";
import { Settings, Home, Bookmark, Favorite, AccountCircleOutlined } from "@material-ui/icons";
import { RamenDining, Start } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";

const TabsIcon = ({ label, icon, href, active, setActive, collapsed }) => {
    const onClick = () => {
        setActive(label);
    }

    return (
        <HashLink to={href} className={`tab-option ${active == label ? "selected" : ""}`} onClick={onClick}>
            {icon}
            {
                !collapsed ?
                    <p>{label}</p> : null
            }
        </HashLink>
    )
}

const Tabs = () => {
    const [active, setActive] = useState("Home");
    const [collapsed, setCollapsed] = useState(false);

    const flipCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="window-content">
            <div className={`tabs-container`}>
                <div className="tab-title-container">
                    {
                        !collapsed ?
                            <HashLink className="tab-title" to={"/"} onClick={() => { setActive("Home") }}>
                                <RamenDining fontSize="inherit" />
                                <h1>Recipe App</h1>
                            </HashLink>
                            : null
                    }
                    <Start fontSize="inherit" className={`icon ${!collapsed ? "rotate" : ""}`} onClick={flipCollapsed} />
                </div>
                <div>
                    <TabsIcon label={"Home"} icon={<Home fontSize="inherit" />} href={"/"} active={active} setActive={setActive} collapsed={collapsed} />
                    <TabsIcon label={"Saved"} icon={<Bookmark fontSize="inherit" />} href={"saved"} active={active} setActive={setActive} collapsed={collapsed} />
                    <TabsIcon label={"Favorites"} icon={<Favorite fontSize="inherit" />} href={"favorites"} active={active} setActive={setActive} collapsed={collapsed} />
                </div>
                <div>
                    <TabsIcon label={"Settings"} icon={<Settings fontSize="inherit" />} href={"settings"} active={active} setActive={setActive} collapsed={collapsed} />
                    <TabsIcon label={"Login/Sign Up"} icon={<AccountCircleOutlined fontSize="inherit" />} href={"login"} active={active} setActive={setActive} collapsed={collapsed} />
                </div>
            </div>
            <div className="selected-tab">
                <Outlet />
            </div>
        </div>
    );
}

export default Tabs;