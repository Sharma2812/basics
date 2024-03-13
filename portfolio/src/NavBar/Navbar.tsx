import { Box, styled } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const StyledButton = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
          gap: 5,
          py: 3,
        }}
      >
        <StyledButton to={"/work"}>Works</StyledButton>
        <StyledButton to={"/services"}>Services</StyledButton>
        <StyledButton to={"/resume"}>Resume</StyledButton>
        <StyledButton to={"/contact"}>Contact</StyledButton>
        <StyledButton to={""}>Hire me</StyledButton>
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
