import { Box, Stack, Typography, styled, useMediaQuery } from '@mui/material';
import { experienceData } from "../datas/ExperienceData";
import { motion } from "framer-motion";
import { educationQualification } from "../datas/EducationData";


const StyledBox = styled(Box)({
  padding:20,
  marginBottom: 2,
  backgroundColor: "#003366",
  transition: "background-color 0.5s ease-in-out",
  textAlign: "center",
  width: "90%",
  maxWidth: "600px",
  margin: "0 auto",
  "&:hover": {
    backgroundColor: "#0080ff",
    backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
  },
});

const StyledTypography = styled(Typography)({
  marginBottom: 2,
  color: "white",
  textAlign: "center",
});

const titles = {
  education: "My Education",
  experience: "My Experience",
};

const Resume = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const renderExperience = () => {
    return Object.keys(experienceData.experience).map((key, index) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={index}
      >
        <StyledBox>
          <StyledTypography variant="h6">{experienceData.experience[key as keyof typeof experienceData.experience].name}</StyledTypography>
          <StyledTypography variant="subtitle1">{experienceData.experience[key as keyof typeof experienceData.experience].year}</StyledTypography>
          <StyledTypography variant="body2">{experienceData.experience[key as keyof typeof experienceData.experience].company}</StyledTypography>
          <StyledTypography variant="body2">{experienceData.experience[key as keyof typeof experienceData.experience].city}</StyledTypography>
        </StyledBox>
      </motion.div>
    ));
  };
  

  const renderEducationQualifications = () => {
    return Object.keys(educationQualification.course).map((key, index) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={index}
      >
        <StyledBox>
          <StyledTypography variant="h6">{educationQualification.course[key as keyof typeof educationQualification.course].name}</StyledTypography>
          <StyledTypography variant="subtitle1">{educationQualification.course[key as keyof typeof educationQualification.course].year}</StyledTypography>
          <StyledTypography variant="body2">{educationQualification.course[key as keyof typeof educationQualification.course].institution}</StyledTypography>
          <StyledTypography variant="body2">{educationQualification.course[key as keyof typeof educationQualification.course].city}</StyledTypography>
        </StyledBox>
      </motion.div>
    ));
  };
  

  return (
    <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} justifyContent="center" alignItems="center" minHeight="100vh" padding={3} sx={{ backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)" }}>
      <Stack flex="1" spacing={2} padding={3}>
        <StyledTypography variant="h3" >{titles.education}</StyledTypography>
        {renderEducationQualifications()}
      </Stack>
      <Stack flex="1" spacing={2}>
        <StyledTypography variant="h3">{titles.experience}</StyledTypography>
        {renderExperience()}
      </Stack>
    </Box>
  );
};

export default Resume;
