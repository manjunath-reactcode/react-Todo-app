import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Divider,
  TextField,
  FormLabel,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddTaskDrawer = ({
  open,
  onClose,
  description,
  setDescription,
  onSave,
}) => (
  <Drawer
    anchor="right"
    open={open}
    onClose={onClose}
    PaperProps={{
      sx: {
        width: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 0,
        backgroundColor: "#1e293b",
      },
    }}
  >
    <Box sx={{ p: 2, flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography variant="h6" className="text-[#12B1E3]">
          Add New Task
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon className="text-[#9DA9B9]" />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2, borderColor: "#9DA9B9" }} />
      <FormLabel className="text-[#9DA9B9]" sx={{ mb: 1, color: "#ffffff" }}>
        Task Description
      </FormLabel>
      <TextField
        sx={{
          backgroundColor: "#475569",
          color: "#ffffff",
          borderRadius: "8px",
          mt: 2,
          boxShadow: "none",
          "& .MuiInputBase-input": { color: "#9DA9B9" },
          "& .MuiInputLabel-root": { color: "#9DA9B9" },
        }}
        label="What needs to be done?"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
    </Box>
    <Box sx={{ p: 2 }}>
      <Divider sx={{ mb: 2, borderColor: "#9DA9B9" }} />
      <Box
        sx={{ display: "flex", gap: 1, justifyContent: "flex-start", pr: 4 }}
      >
        <Button
          sx={{
            backgroundColor: "#475569",
            color: "#ffffff",
            border: "none",
            boxShadow: "none",
          }}
          variant="outlined"
          size="small"
          fullWidth
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          sx={{ backgroundColor: "#12B1E3" }}
          variant="contained"
          size="small"
          fullWidth
          onClick={onSave}
        >
          Save Task
        </Button>
      </Box>
    </Box>
  </Drawer>
);

export default AddTaskDrawer;
