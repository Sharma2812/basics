import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        2016-2020
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Bachelor Of Engineering
      </Typography>
      <Typography variant="body2">
        SNS COLLEGE OF ENGINEERING <br />
      </Typography>
      <Typography variant="body2">
        6.7
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

const Resume = () => {
  return (
    <Box sx={{ display: "flex", border: "2px solid black" }}>
      <Card variant="outlined" >
        {card}
      </Card>
    </Box>
  );
};

export default Resume;
