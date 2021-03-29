import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"lg-width": "300px",
	"width": "300px",
	"height": "300px",
	"background": "#c53232"
};
const overrides = {};

const Box1 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Box1, { ...Box,
	defaultProps,
	overrides
});
export default Box1;