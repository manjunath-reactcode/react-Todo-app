import { Typography, Button } from "@mui/material";

const TodoHeader = ({ onAddClick }) => (
  <>
    <Typography
      variant="h3"
      align="center"
      gutterBottom={false}
      className="text-[#12B1E3]"
      sx={{ fontWeight: 700, fontFamily: "sans-serif" }}
    >
      Todo List App
    </Typography>
    <Typography
      className="text-[#9DA9B9]"
      variant="subtitle1"
      gutterBottom
      align="center"
    >
      Organize your day, beautifully.
    </Typography>
    <Button
      sx={{ backgroundColor: "#12B1E3", textTransform: "capitalize" }}
      variant="contained"
      fullWidth
      onClick={onAddClick}
    >
      + Add New Task
    </Button>
  </>
);

export default TodoHeader;
