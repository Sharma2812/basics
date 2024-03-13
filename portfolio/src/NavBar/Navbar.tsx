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
  const email = "sujithsharma69@gmail.com";

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#003366",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 3,
          px: 5,
        }}
      >
        <Box>
          <a
            href={`mailto:${email}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            {email}
          </a>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 5,
          }}
        >
          <StyledLink to={"/work"}>Works</StyledLink>
          <StyledLink to={"/services"}>Services</StyledLink>
          <StyledLink to={"/skills"}>Skills</StyledLink>
          <StyledLink to={"/resume"}>Resume</StyledLink>
          <StyledLink to={"/contact"}>Contact</StyledLink>
          <StyledLink to={""}>Hire me</StyledLink>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
