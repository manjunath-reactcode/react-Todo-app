import { useState } from "react";
import { Container, Box } from "@mui/material";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import AddTaskDrawer from "./components/AddTaskDrawer";
import EmptyState from "./components/EmptyState";
import TodoFooter from "./components/TodoFooter";
import EditTaskDrawer from "./components/EditTaskDrawer";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [description, setDescription] = useState("");

  const [editingTask, setEditingTask] = useState(null); 

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  const handleAddTask = () => {
    if (!description.trim()) return;
    const newTask = {
      id: Date.now(),
      title: description,
      status: "active",
    };
    setTasks([...tasks, newTask]);
    setDescription("");
    setDrawerOpen(false);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "completed" ? "active" : "completed",
            }
          : {
              ...task,
              status: "active",
            }
      )
    );
  };

  const handleEditTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      setEditingTask(task); 
    }
  };

  const handleSaveEdit = (id, newDescription) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newDescription } : task
      )
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        py: 4,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          borderRadius: 4,
          boxShadow: 6,
          backgroundColor: "#1e293b",
          p: 2,
        }}
      >
        <TodoHeader
          onAddClick={() => {
            setEditingTask(null); 
            setDescription("");  
            setDrawerOpen(true);
          }}
        />

        <Box sx={{ my: 4 }}>
          <TodoFilter tasks={filteredTasks} onFilterChange={setFilter} />
        </Box>

        {filteredTasks.length > 0 ? (
          <TodoList
            tasks={filteredTasks}
            onDelete={handleDeleteTask}
            onToggleStatus={handleToggleStatus}
            onEdit={handleEditTask}
          />
        ) : (
          <EmptyState />
        )}

        <TodoFooter />

        
        <AddTaskDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          description={description}
          setDescription={setDescription}
          onSave={handleAddTask}
        />

      
        <EditTaskDrawer
          open={Boolean(editingTask)}
          editingTask={editingTask}
          onClose={() => setEditingTask(null)}
          onSaveEdit={handleSaveEdit}
        />
      </Container>
    </Box>
  );
};

export default App;
