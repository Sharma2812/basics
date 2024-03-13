import { Box, styled } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const StyledLink = styled(Link)`
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
          backgroundColor: "#003366", 
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
          gap: 5,
          py: 3,
        }}
      >
        <StyledLink to={"/work"}>Works</StyledLink>
        <StyledLink to={"/services"}>Services</StyledLink>
        <StyledLink to={"/skills"}>Skills</StyledLink>
        <StyledLink to={"/resume"}>Resume</StyledLink>
        <StyledLink to={"/contact"}>Contact</StyledLink>
        <StyledLink to={""}>Hire me</StyledLink>
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
