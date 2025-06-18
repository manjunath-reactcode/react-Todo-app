import { Card, CardContent, Typography, Box } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

const EmptyState = () => (
  <Card
    sx={{
      textAlign: "center",
      py: 6,
      color: "#94a3b8",
      boxShadow: 2,
      borderRadius: 2,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(8px)",
    }}
  >
    <CardContent>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <AssignmentIcon sx={{ fontSize: 48, mb: 2 }} />
        <Typography variant="body1" className="text-[#9DA9B9]">
          No tasks yet. Add one to get started!
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default EmptyState;
