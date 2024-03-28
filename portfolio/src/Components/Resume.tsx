import { Box, Stack, Typography, Card, CardContent, useMediaQuery, styled } from '@mui/material';
import { experienceData } from "../datas/ExperienceData";
import { motion } from "framer-motion";
import { educationQualification } from "../datas/EducationData";

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
      <Card
        key={index}
        sx={{
          padding: 2,
          marginBottom: 2,
          backgroundColor: "#003366",
          borderRadius: 10,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.5s ease-in-out, transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out",
          textAlign: "center",
          width: "90%",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
          "&:hover": {
            backgroundColor: "#0080ff",
            transform: "scale(1.05)",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
          },
        }}
        component={motion.div}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
      >
        <CardContent>
          <StyledTypography variant="h6">{experienceData.experience[key as keyof typeof experienceData.experience].name}</StyledTypography>
          <StyledTypography variant="subtitle1">{experienceData.experience[key as keyof typeof experienceData.experience].year}</StyledTypography>
          <StyledTypography variant="body2">{experienceData.experience[key as keyof typeof experienceData.experience].company}</StyledTypography>
          <StyledTypography variant="body2">{experienceData.experience[key as keyof typeof experienceData.experience].city}</StyledTypography>
        </CardContent>
      </Card>
    ));
  };
  
  const renderEducationQualifications = () => {
    return Object.keys(educationQualification.course).map((key, index) => (
      <Card
        key={index}
        sx={{
          padding: 2,
          marginBottom: 2,
          backgroundColor: "#003366",
          borderRadius: 10,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.5s ease-in-out, transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out",
          textAlign: "center",
          width: "90%",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
          "&:hover": {
            backgroundColor: "#0080ff",
            transform: "scale(1.05)",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
          },
        }}
        component={motion.div}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
      >
        <CardContent>
          <StyledTypography variant="h6">{educationQualification.course[key as keyof typeof educationQualification.course].name}</StyledTypography>
          <StyledTypography variant="subtitle1">{educationQualification.course[key as keyof typeof educationQualification.course].year}</StyledTypography>
          <StyledTypography variant="body2">{educationQualification.course[key as keyof typeof educationQualification.course].institution}</StyledTypography>
          <StyledTypography variant="body2">{educationQualification.course[key as keyof typeof educationQualification.course].city}</StyledTypography>
        </CardContent>
      </Card>
    ));
  };

  return (
    <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} justifyContent="center" alignItems="center" minHeight="100vh" padding={3} sx={{ backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)" }}>
      <Stack flex="1" spacing={2} padding={3}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StyledTypography variant="h3">{titles.education}</StyledTypography>
        </motion.div>
        {renderEducationQualifications()}
      </Stack>
      <Stack flex="1" spacing={2}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StyledTypography variant="h3">{titles.experience}</StyledTypography>
        </motion.div>
        {renderExperience()}
      </Stack>
    </Box>
  );
};

export default Resume;
