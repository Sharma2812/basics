import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Rating } from "@mui/material";
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
  const [chunksPerRow, setChunksPerRow] = useState<number>(4); // Default for desktop

  useEffect(() => {
    // Check viewport width and set chunk size accordingly
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768; // Example breakpoint for mobile
      setChunksPerRow(isMobileView ? 1 : 4); // Change chunk size for mobile view
    };

    handleResize(); // Call once on component mount
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={index}
              onClick={() => handleSkillClick(skill)}
            >
              <Card
                sx={{
                  maxWidth: 300,
                  backgroundColor: "#ddd",
                  border: "2px solid transparent",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    border: "2px solid #000",
                  },
                }}
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
                    {expandedIndices[rowIndex * chunksPerRow + index]
                      ? skill.description
                      : skill.description.slice(0, 100) + "..."}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Rating:
                    </Typography>
                    <Rating
                      name={`rating-${rowIndex * chunksPerRow + index}`}
                      value={skill.rating}
                      readOnly
                    />
                  </Box>
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
