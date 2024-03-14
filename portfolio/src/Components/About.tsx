import { Box, Typography } from "@mui/material";
import { aboutData } from "../datas/AboutData";
import photo from "../assets/photo.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const About = () => {
  const handleLinkClick = (url:string) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        display: "flex",
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
        <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
          Connect with me:
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LinkedInIcon
              sx={{ color: "white", mr: 1, cursor: "pointer" }}
              onClick={() => handleLinkClick("https://www.linkedin.com/in/sharma96/")}
            />
            <Typography
              variant="body1"
              sx={{ color: "white", cursor: "pointer" }}
              onClick={() => handleLinkClick("https://www.linkedin.com/in/sharma96/")}
            >
              LinkedIn
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <InstagramIcon
              sx={{ color: "white", mr: 1, cursor: "pointer" }}
              onClick={() => handleLinkClick("https://www.instagram.com/sujith_sharma69?igsh=MWZoeHhsejJ4dDkwcA==")}
            />
            <Typography
              variant="body1"
              sx={{ color: "white", cursor: "pointer" }}
              onClick={() => handleLinkClick("https://www.instagram.com/sujith_sharma69?igsh=MWZoeHhsejJ4dDkwcA==")}
            >
              Instagram
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon
              sx={{ color: "white", mr: 1, cursor: "pointer" }}
              onClick={() => handleLinkClick("mailto:sujithsharma69@gmail.com")}
            />
            <Typography
              variant="body1"
              sx={{ color: "white", cursor: "pointer" }}
              onClick={() => handleLinkClick("mailto:sujithsharma69@gmail.com")}
            >
              Email
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
