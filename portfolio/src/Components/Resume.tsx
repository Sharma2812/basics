import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import { educationQualification } from "../datas/EducationData";
import { experienceData } from "../datas/ExperienceData";
import { ExperienceOrQualification } from "../dataType/Type";

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
const titles = {
  education: "My Education",
  experience: "My Experience",
};
const Resume = () => {
  const renderCard = (data: Record<string, ExperienceOrQualification>) => {
    console.log(data);
    return Object.keys(data).map((key, index) => {
      const { year, name, company, institution, city } = data[key];
      return (
        <StyledCard key={index} variant="outlined">
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
          </CardContent>
        </StyledCard>
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
