import React from "react";
import { Box ,styled} from "@mui/material";

const Separator = ({ width, height, marginleft, marginTop }) => {
  return (
    <MySeparator
      sx={{ width: width, height: height, marginLeft: marginleft, marginTop: marginTop }}
    />
  );
};

export default Separator;
const MySeparator = styled(Box)({
  backgroundColor: "#bbbbbb",
  borderRadius: "1rem",
  position: "absolute",
});
