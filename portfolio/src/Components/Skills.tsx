import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  LinearProgress,
} from "@mui/material";
import { Images } from "../datas/SkillsData";
import SkillsModal from "../Modals/SkillsModal";
import { Skill } from "../dataType/Type";
import { motion } from "framer-motion";

const chunkArray = (arr: Skill[], size: number) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

const Skills = () => {
  const [expandedIndices] = useState(Array(Images.length).fill(false));
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [chunksPerRow, setChunksPerRow] = useState<number>(4);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setChunksPerRow(isMobileView ? 1 : 4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skillsChunks = chunkArray(Images, chunksPerRow);

  const handleSkillClick = (skill: Skill) => {
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
            backgroundImage: "linear-gradient(to right, #00008B, #00BFFF)",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          {chunk.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              key={index}
              onClick={() => handleSkillClick(skill)}
            >
              <Card
                sx={{
                  maxWidth: 300,
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  width="300"
                  image={skill.image}
                  alt={skill.title}
                  sx={{
                    objectFit: "cover",
                    borderRadius: "15px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />

                <CardContent sx={{ paddingBottom: "16px" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      textAlign: "center",
                      color: "#1a1a1a",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    {skill.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      textAlign: "center",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    {expandedIndices[rowIndex * chunksPerRow + index]
                      ? skill.description
                      : skill.description.slice(0, 100) + "..."}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.progress}
                    sx={{ mb: 1 }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      color: "#555",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    Progress: ({Math.round(skill.progress)})%
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
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
