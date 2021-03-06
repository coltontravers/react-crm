import React from "react";
import PropTypes from "prop-types";
import colors from "../../../constants/colors";
import gutters from "../../../constants/gutters";
import fontSizes from "../../../constants/fontSizes";
import { StyledInput } from "./TextInput.styled";

const TextInput = ({
    defaultValue,
    handleOnChange,
    background,
    color,
    width,
    padding,
    fontSize,
    placeholder
}) => {
    return (
        <StyledInput
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={handleOnChange}
            background={background}
            color={color}
            width={width}
            padding={padding}
            fontSize={fontSize}
        />
    );
};

TextInput.propTypes = {
    defaultValue: PropTypes.string,
    handleOnChange: PropTypes.func,
    background: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    padding: PropTypes.string,
    fontSize: PropTypes.string,
    placeholder: PropTypes.string
};

TextInput.defaultProps = {
    defaultValue: "",
    handleOnChange: () => {},
    background: "none",
    color: colors.white,
    width: "100%",
    padding: gutters.oneThird,
    fontSize: fontSizes.medium,
    placeholder: "Search..."
};

export default TextInput;
