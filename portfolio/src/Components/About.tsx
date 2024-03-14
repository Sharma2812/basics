import { Box, Typography } from "@mui/material";
import { aboutData } from "../datas/AboutData";
import photo from "../assets/photo.jpg";
const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
      }}
    >
      <Box sx={{ color: "white", textAlign: "center", mb: 4 }}>
        <img
          src={photo}
          alt="Photo"
          style={{ width: "350px", height: "350px", borderRadius: "50%" }}
        />
        <Typography variant="h3" gutterBottom>
          {aboutData.title}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {aboutData.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
