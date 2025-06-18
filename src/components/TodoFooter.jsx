import { Box, Typography, Divider } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const TodoFooter = () => (
  <Box sx={{ mt: 6, textAlign: "center" }}>
    <Divider sx={{ my: 2, borderColor: "#9DA9B9" }} />
    <Typography variant="caption" sx={{ color: "#9DA9B9" }}>
      Crafted with{" "}
      <FavoriteIcon fontSize="small" sx={{ color: "error.main" }} />
    </Typography>
    <Typography
      variant="caption"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 0.5,
        color: "#9DA9B9",
      }}
    >
      using MUI + Tailwind
    </Typography>
  </Box>
);

export default TodoFooter;
