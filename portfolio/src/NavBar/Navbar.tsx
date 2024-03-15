import {
  Box,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CustomAccordion = styled(Accordion)({
  "&.MuiAccordion-root.Mui-expanded": {
    margin: 0,
  },
});

const Navbar = () => {
  const email = "sujithsharma69@gmail.com";
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* Conditional rendering of section based on screen size */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          backgroundColor: "#003366",
          color: "white",
          justifyContent: "space-between",
          alignItems: "center",
          py: 3,
          px: 5,
        }}
      >
        {/* Email section */}
        <Box>
          <a
            href={`mailto:${email}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            {email}
          </a>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 5 }}>
          <StyledLink to={"/about"}>About</StyledLink>
          <StyledLink to={"/skills"}>Skills</StyledLink>
          <StyledLink to={"/resume"}>Resume</StyledLink>
          <StyledLink to={"/contact"}>Contact</StyledLink>
          <StyledLink to={""}>Hire me</StyledLink>
        </Box>
      </Box>

      {/* Accordion Content for Mobile */}
      <CustomAccordion
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
          backgroundColor: "#003366",
          color: "white",
        }}
        expanded={expanded}
        onChange={handleAccordionChange}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="mobile-nav-content"
          id="mobile-nav-header"
        >
          {/* Hamburger Icon for Mobile */}
          <MenuIcon />
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <StyledLink to={"/about"} onClick={handleAccordionChange}>
              About
            </StyledLink>
            <StyledLink to={"/skills"} onClick={handleAccordionChange}>
              Skills
            </StyledLink>
            <StyledLink to={"/resume"} onClick={handleAccordionChange}>
              Resume
            </StyledLink>
            <StyledLink to={"/contact"} onClick={handleAccordionChange}>
              Contact
            </StyledLink>
            <StyledLink to={""} onClick={handleAccordionChange}>
              Hire me
            </StyledLink>
          </Box>
        </AccordionDetails>
      </CustomAccordion>

      <Outlet />
    </>
  );
};

export default Navbar;
