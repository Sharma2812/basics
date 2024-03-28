import { Modal, Box, Typography, IconButton, LinearProgress } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Skill } from "../dataType/Type";


interface SkillsModalProps {
  selectedSkill: Skill | null;
  handleModalClose: () => void;
}

const SkillsModal: React.FC<SkillsModalProps> = ({
  selectedSkill,
  handleModalClose,
}) => {
  return (
    <Modal
      open={selectedSkill !== null}
      onClose={handleModalClose}
      aria-labelledby="skills-modal-title"
      aria-describedby="skills-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxWidth: "80%",
          maxHeight: "80%",
          overflowY: "auto",
          borderRadius: 8,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h4" id="skills-modal-title">
            {selectedSkill?.title}
          </Typography>
          <IconButton onClick={handleModalClose} size="large">
            <Close />
          </IconButton>
        </Box>
        <Typography variant="body1" id="skills-modal-description" gutterBottom>
          {selectedSkill?.description}
        </Typography>
        <Box sx={{ width: '100%',my: 2 }}>
          <LinearProgress variant="determinate" value={selectedSkill?.progress} />
          <Typography>{selectedSkill?.progress}%</Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default SkillsModal;
