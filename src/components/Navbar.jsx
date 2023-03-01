import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#ccc",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <span
        style={{
          color: "black",
          fontSize: "30px",
          marginLeft: "20px",
          fontWeight: "bold",
        }}
      >
        Youtube
      </span>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
