import React, { useState } from "react"
import { Outlet } from "react-router-dom";
import "./Tabs.css";
import { Settings, Home, Bookmark, Favorite, AccountCircleOutlined } from "@material-ui/icons";
import { RamenDining, Start } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";

/**
 * Reusable component for tabs in the tab bar.
 * 
 * - `label` - Tab label
 * - `icon` - Tab icon
 * - `href` - Hash-link for react router
 * - `active` - If the string matches the `label`, the tab is highlighted
 * - `setActive` - Function used to set the `active` state
 * - `collapsed` - When `false` the label is shown
 * @returns 
 */
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

/**
 * Contains the tab bar side pannel for the website
 */
const Tabs = () => {
    const [active, setActive] = useState("Landing");
    const [collapsed, setCollapsed] = useState(false);

    /** Used to collapse/expand the tab bar */
    const flipCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="window-content">
            <div className={`tabs-container`}>
                {/** Tab title */}
                <div className="tab-title-container">
                    {
                        !collapsed ?
                            <HashLink className="tab-title" to={"/"} onClick={() => { setActive("Landing") }}>
                                <RamenDining fontSize="inherit" />
                                <h1>BiteSite</h1>
                            </HashLink>
                            : null
                    }
                    <Start fontSize="inherit" className={`icon ${!collapsed ? "rotate" : ""}`} onClick={flipCollapsed} />
                </div>
                {/** Main routes */}
                <div>
                    <TabsIcon label={"Home"} icon={<Home fontSize="inherit" />} href={"home"} active={active} setActive={setActive} collapsed={collapsed} />
                    <TabsIcon label={"Saved"} icon={<Bookmark fontSize="inherit" />} href={"saved"} active={active} setActive={setActive} collapsed={collapsed} />
                    <TabsIcon label={"Favorites"} icon={<Favorite fontSize="inherit" />} href={"favorites"} active={active} setActive={setActive} collapsed={collapsed} />
                </div>
                {/** Settings and accounts tabs */}
                <div>
                    <TabsIcon label={"Settings"} icon={<Settings fontSize="inherit" />} href={"settings"} active={active} setActive={setActive} collapsed={collapsed} />
                    <TabsIcon label={"Login/Sign Up"} icon={<AccountCircleOutlined fontSize="inherit" />} href={"login"} active={active} setActive={setActive} collapsed={collapsed} />
                </div>
            </div>
            {/** Outlet for route selected */}
            <div className="selected-tab">
                <Outlet />
            </div>
        </div>
    );
}

export default Tabs;