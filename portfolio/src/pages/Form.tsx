import { Stack, TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import {  Form, Field, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
  mobile: Yup.string().required('Mobile number is required'),
});

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
        subscribe: false,
        mobile: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        // Handle form submission here
        console.log(values);
        resetForm(); // Optionally reset the form after submission
      }}
    >
      {({ errors, touched, handleChange }) => (
        <Form style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Stack spacing={2} sx={{ width: "100%", maxWidth: 400 }}>
            <Field
              as={TextField}
              label="Name"
              variant="outlined"
              name="name"
              error={errors.name && touched.name}
              helperText={errors.name && touched.name && errors.name}
              onChange={handleChange}
            />
            <Field
              as={TextField}
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
              onChange={handleChange}
            />
            <Field
              as={TextField}
              label="Mobile Number"
              variant="outlined"
              name="mobile"
              error={errors.mobile && touched.mobile}
              helperText={errors.mobile && touched.mobile && errors.mobile}
              onChange={handleChange}
            />
            <Field
              as={TextField}
              label="Subject"
              variant="outlined"
              name="subject"
              error={errors.subject && touched.subject}
              helperText={errors.subject && touched.subject && errors.subject}
              onChange={handleChange}
            />
            <Field
              as={TextField}
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              name="message"
              error={errors.message && touched.message}
              helperText={errors.message && touched.message && errors.message}
              onChange={handleChange}
            />
            <FormControlLabel
              control={
                <Field
                  as={Checkbox}
                  name="subscribe"
                  color="primary"
                />
              }
              label="Subscribe to newsletter"
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
