import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { AnimatePresence, motion } from "framer-motion";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string().required("Mobile Number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  subject: "",
  message: "",
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    backgroundColor: "#f0f0f0",
  },
  form: {
    marginTop: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  const handleSubmit = (  values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false); // Don't forget to set submitting to false when done
  };

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
              Contact Me
            </Typography>
            <Typography variant="body1" paragraph>
              Have a question or want to work together? Fill out the form below
              and I'll get back to you as soon as possible.
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className={classes.form}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        fullWidth
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        fullWidth
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        id="mobile"
                        name="mobile"
                        label="Mobile Number"
                        fullWidth
                        error={touched.mobile && Boolean(errors.mobile)}
                        helperText={touched.mobile && errors.mobile}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        id="subject"
                        name="subject"
                        label="Subject"
                        fullWidth
                        error={touched.subject && Boolean(errors.subject)}
                        helperText={touched.subject && errors.subject}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        id="message"
                        name="message"
                        label="Message"
                        multiline
                        rows={4}
                        fullWidth
                        error={touched.message && Boolean(errors.message)}
                        helperText={touched.message && errors.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Paper>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;
