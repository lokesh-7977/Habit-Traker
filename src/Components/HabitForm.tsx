import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { useHabitStore } from "../store/store";

const HabitForm = () => {
  const [habitName, setHabitName] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">("daily");

  const { habits, addHabit } = useHabitStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addHabit({
      id: habits.length + 1,
      name: habitName,
      frequency: frequency
    });
    setHabitName("");
    setFrequency("daily");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Habit Name"
          variant="outlined"
          fullWidth
          placeholder="Enter Habit Name"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            id="frequency"
            value={frequency}
            label="Frequency"
            onChange={(e) => setFrequency(e.target.value as "daily" | "weekly" | "monthly")}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </form>
  );
};

export default HabitForm;
