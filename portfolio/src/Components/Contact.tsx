import { Box } from "@mui/material";
import ContactForm from "../pages/ContactForm";
import ContactContent from "../pages/ContactContent";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
      }}
    >
      <Box sx={{ flex: 1, textAlign: "center", mb: { xs: 2, md: 0 } }}>
        <ContactContent />
      </Box>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
