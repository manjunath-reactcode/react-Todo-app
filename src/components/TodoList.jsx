import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = ({ tasks, onDelete, onToggleStatus, onEdit }) =>
  tasks.map((task) => (
    <Card
      key={task.id}
      sx={{
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(8px)",
        mb: 2,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <IconButton onClick={() => onToggleStatus(task.id)}>
            {task.status === "completed" ? (
              <CheckCircleIcon sx={{ color: "#12B1E3" }} />
            ) : (
              <RadioButtonUncheckedIcon sx={{ color: "#cbd5e1" }} />
            )}
          </IconButton>
          <Box sx={{ ml: 1 }}>
            <Typography
              variant="subtitle1"
              sx={{
                textDecoration:
                  task.status === "completed" ? "line-through" : "none",
                color: task.status === "completed" ? "#9DA9B9" : "#12B1E3",
                fontWeight: 500,
              }}
            >
              {task.title}
            </Typography>
            {task.description && (
              <Typography
                variant="body2"
                sx={{
                  textDecoration:
                    task.status === "completed" ? "line-through" : "none",
                  color: task.status === "completed" ? "#9DA9B9" : "#ffffff",
                }}
              >
                {task.description}
              </Typography>
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton onClick={() => onEdit(task.id)}>
            <EditIcon className="text-[#9DA9B9]" />
          </IconButton>
          <IconButton onClick={() => onDelete(task.id)}>
            <DeleteIcon className="text-[#9DA9B9]" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  ));

export default TodoList;
