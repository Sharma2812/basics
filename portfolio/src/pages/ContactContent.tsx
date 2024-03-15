import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Button, Paper } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@mui/material";
import { Twitter } from "@mui/icons-material";
import { Instagram } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "#fff", // White font color
  },
  contactInfo: {
    marginTop: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center", // Center the items horizontally
    marginTop: theme.spacing(2),
  },
}));

const ContactContent = () => {
  const classes = useStyles();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container maxWidth="md" className={classes.container}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              Let's Connect!
            </Typography>
            <Typography variant="body1" paragraph>
              Thank you for visiting my portfolio! I'm excited to connect with
              you. Feel free to reach out to me using any of the following
              methods:
            </Typography>
            <Grid container spacing={2} className={classes.contactInfo}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  <EmailIcon />
                </Typography>
                <Typography variant="body1">
                  sujithsharma69@gmail.com
                </Typography>
                <Typography variant="body2" paragraph>
                  For business inquiries or collaboration opportunities, please
                  use the above email address.
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/sharma96/"
                  target="_blank"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<GitHubIcon />}
                  style={{ marginLeft: "10px" }}
                  href="https://github.com/Sharma2812/basics"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Grid>
            </Grid>

            {/* Additional Content */}
            <Typography variant="body1" paragraph>
              You can also find more about my work and projects on my personal
              website. Feel free to explore and drop a message!
            </Typography>

            <Typography variant="body1" paragraph>
              Connect with me on social media for updates on my latest projects,
              articles, and more!
            </Typography>
            <Typography variant="body2" paragraph>
              <Link
                href="https://twitter.com/sujithsharma69"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "10px",
                }}
              >
                <Twitter />
              </Link>
              <Link
                href="https://www.instagram.com/sujith_sharma69?igsh=MWZoeHhsejJ4dDkwcA=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "10px",
                }}
              >
                <Instagram />
              </Link>
            </Typography>
          </Paper>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactContent;
