import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const TodoFilter = ({ tasks, onFilterChange }) => (
  <Card
    sx={{
      borderRadius: 2,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(8px)",
    }}
  >
    <CardContent
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Typography sx={{ flexGrow: 1 }} className="text-[#9DA9B9]">
        {tasks.length} items left
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {["all", "active", "completed"].map((label) => (
          <Button
            key={label}
            sx={{
              backgroundColor: label === "all" ? "#12B1E3" : "#475569",
              color: "#ffffff",
              textTransform: "capitalize",
              border: "none",
              boxShadow: "none",
            }}
            size="small"
            variant={label === "all" ? "contained" : "outlined"}
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Button>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default TodoFilter;
