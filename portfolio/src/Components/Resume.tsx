import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14, color: "white" }} gutterBottom>
        2016-2020
      </Typography>

      <Typography sx={{ mb: 1.5, color: "white" }}>
        Bachelor Of Engineering
      </Typography>
      <Typography variant="body2" sx={{ color: "white" }}>
        SNS COLLEGE OF ENGINEERING <br />
      </Typography>
      <Typography variant="body2" sx={{ color: "white" }}>
        6.7
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

const Resume = () => {
  return (
    <Box sx={{ display: "flex", border: "2px solid black" }}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#003366",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {card}
      </Card>
    </Box>
  );
};

export default Resume;
