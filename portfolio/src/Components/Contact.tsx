import { Box } from "@mui/material";
import Form from "../pages/Form";
import ContactPage from "../pages/ContactPage";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
      }}
    >
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <ContactPage />
      </Box>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Form />
      </Box>
    </Box>
  );
};

export default Contact;
