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
    return Object.keys(experienceData.experience).map((key, index) => {
      const experienceItem = experienceData.experience[key as keyof typeof experienceData.experience];
      const startDate = new Date(experienceItem.year.split(' - ')[0]);
      const endDate = key === 'thirdCompany' ? new Date() : new Date(experienceItem.year.split(' - ')[1]);
      const duration = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

      return (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <Card
            sx={{
              padding: 2,
              marginBottom: 2,
              backgroundColor: "#003366",
              borderRadius: 10,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "90%",
              maxWidth: "600px",
              margin: "0 auto",
              backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
            }}
            component={motion.div}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <CardContent>
              <StyledTypography variant="h6">{experienceItem.name}</StyledTypography>
              <StyledTypography variant="subtitle1">{key === 'thirdCompany' ? `June-2023 - Present (${duration} months)` : experienceItem.year}</StyledTypography>
              <StyledTypography variant="body2">{experienceItem.company}</StyledTypography>
              <StyledTypography variant="body2">{experienceItem.city}</StyledTypography>
            </CardContent>
          </Card>
        </motion.div>
      );
    });
  };

  const renderEducationQualifications = () => {
    return Object.keys(educationQualification.course).map((key, index) => (
      <motion.div
        key={index}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        <Card
          sx={{
            padding: 2,
            marginBottom: 2,
            backgroundColor: "#003366",
            borderRadius: 10,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "90%",
            maxWidth: "600px",
            margin: "0 auto",
            backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
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
      </motion.div>
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
