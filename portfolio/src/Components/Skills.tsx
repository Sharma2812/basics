import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Modal,
} from "@mui/material";
import { Rating } from "@mui/material";
import { Images } from "../datas/SkillsData";
import SkillsModal from "../Modals/SkillsModal";

const chunkArray = (arr, size) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

const Skills = () => {
  const [expandedIndices] = useState(Array(Images.length).fill(false));
  const [selectedSkill, setSelectedSkill] = useState(null);
  const skillsChunks = chunkArray(Images, 4);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleModalClose = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      {skillsChunks.map((chunk, rowIndex) => (
        <Box
          key={rowIndex}
          display="flex"
          justifyContent="space-evenly"
          sx={{
            backgroundColor: "#00008B",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          {chunk.map((skill, index) => (
            <Card
              sx={{
                maxWidth: 300,
                border: "2px solid transparent",
                "&:hover": {
                  border: "2px solid #000",
                },
              }}
              key={index}
              onClick={() => handleSkillClick(skill)}
            >
              <CardHeader title={skill.title} sx={{ textAlign: "center" }} />
              <CardMedia
                component="img"
                height="194"
                image={skill.image}
                alt={skill.title}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ overflowWrap: "anywhere", cursor: "pointer" }}
                >
                  {expandedIndices[rowIndex * 4 + index]
                    ? skill.description
                    : skill.description.slice(0, 100) + "..."}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Rating:
                  </Typography>
                  <Rating
                    name={`rating-${rowIndex * 4 + index}`}
                    value={skill.rating}
                    readOnly
                  />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      ))}
      <SkillsModal
        selectedSkill={selectedSkill}
        handleModalClose={handleModalClose}
      />
    </>
  );
};

export default Skills;
