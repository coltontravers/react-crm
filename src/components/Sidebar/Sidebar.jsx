import React from "react";
import PropTypes from "prop-types";
import SidebarItem from "./SidebarItem/SidebarItem";
import Search from "./SidebarSearch/SidebarSearch";
import { SidebarWrapper } from "./Sidebar.styled";

const Sidebar = ({ visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <SidebarWrapper>
            <Search />
            <SidebarItem />
        </SidebarWrapper>
    );
};

Sidebar.propTypes = {
    visible: PropTypes.bool
};

Sidebar.defaultProps = {
    visible: true
};

export default Sidebar;
