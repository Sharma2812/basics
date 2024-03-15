import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import { educationQualification } from "../datas/EducationData";
import { experienceData } from "../datas/ExperienceData";
import { ExperienceOrQualification } from "../dataType/Type";
import { motion } from "framer-motion"; // Import motion from framer-motion

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#003366",
  boxShadow: theme.shadows[2],
  marginBottom: 20,
  transition: "background-color 0.5s ease-in-out",
  "&:hover": {
    backgroundColor: "#0080ff",
    backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
  },
}));

const GradientTypography = styled(Typography)({
  backgroundImage: "linear-gradient(to right, #FFFFFF, #ADD8E6)",
  backgroundClip: "text",
  color: "transparent",
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 1,
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const titles = {
  education: "My Education",
  experience: "My Experience",
};

const Resume = () => {
  const renderCard = (data: Record<string, ExperienceOrQualification>) => {
    return Object.keys(data).map((key, index) => {
      const { year, name, company, institution, city } = data[key];
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={index}
        >
          <StyledCard variant="outlined">
            <StyledCardContent>
              <Typography sx={{ fontSize: 14, color: "white" }} gutterBottom>
                {year}
              </Typography>
              <Typography sx={{ mb: 1.5, color: "white" }}>{name}</Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                {company || institution} <br />
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                {city}
                <br />
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </motion.div>
      );
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
      }}
    >
      <Box sx={{ flex: "1", paddingRight: 1 }}>
        <GradientTypography
          variant="h3"
          align="center"
          sx={{ marginTop: "15%", marginBottom: "5%" }}
        >
          {titles.education}
        </GradientTypography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "75%",
            margin: "auto",
          }}
        >
          {renderCard(educationQualification.course)}
        </Box>
      </Box>

      <Box sx={{ flex: "1", paddingLeft: 1 }}>
        <GradientTypography
          variant="h3"
          align="center"
          sx={{ marginTop: "15%", marginBottom: "5%" }}
        >
          {titles.experience}
        </GradientTypography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "75%",
            margin: "auto",
          }}
        >
          {renderCard(experienceData.experience)}
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
