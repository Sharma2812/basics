import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import { educationQualification } from "../datas/EducationData";
import { experienceData } from "../datas/ExperienceData";

// Styled Card component with hover effect
const StyledCard = styled(Card)(() => ({
  backgroundColor: "#003366",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: 20,
  transition: "background-color 0.5s ease-in-out", // Adding transition effect
  "&:hover": {
    backgroundColor: "#0080ff", // Changing background color on hover
    backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)", // Adding gradient
  },
}));

const GradientTypography = styled(Typography)(() => ({
  backgroundImage: "linear-gradient(to right, #FFFFFF, #ADD8E6)", // Adjusted gradient
  backgroundClip: "text",
  color: "transparent",
}));


const Resume = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
      }}
    >
      {/* Education */}
      <Box sx={{ flex: "1", paddingRight: 1 }}>
      <GradientTypography
          variant="h3"
          align="center"
          sx={{ marginTop: "15%", marginBottom: "5%" }}
        >
          My Education
        </GradientTypography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "75%",
            margin: "auto",
          }}
        >
          {Object.values(educationQualification.course).map((course, index) => (
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
                  {course.year}
                </Typography>
                <Typography sx={{ mb: 1.5, color: "white" }}>
                  {course.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  {course.institution} <br />
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  {course.city}
                  <br />
                </Typography>
              </CardContent>
            </StyledCard>
          ))}
        </Box>
      </Box>

      {/* Experience */}
      <Box sx={{ flex: "1", paddingLeft: 1 }}>
        <GradientTypography
          variant="h3"
          align="center"
          sx={{ marginTop: "15%", marginBottom: "5%" }}
        >
          My Experience
        </GradientTypography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "75%",
            margin: "auto",
          }}
        >
          {/* Mapping over experience data */}
          {Object.values(experienceData.experience).map((experience, index) => (
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
                {/* Accessing properties of each experience */}
                <Typography sx={{ fontSize: 14, color: "white" }} gutterBottom>
                  {experience.year}
                </Typography>
                <Typography sx={{ mb: 1.5, color: "white" }}>
                  {experience.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  {experience.company} <br />
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  {experience.city}
                  <br />
                </Typography>
              </CardContent>
            </StyledCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
