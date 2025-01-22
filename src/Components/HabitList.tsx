import { Box, Typography } from "@mui/material";
import { useHabitStore } from "../store/store";

const HabitList = () => {
  const { habits } = useHabitStore();

  return (
    <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
      {habits.length > 0 ? <Typography variant="h4" component={"h2"} gutterBottom>Habits</Typography> : <Typography variant="h4" component={"h2"} gutterBottom>No habits found</Typography>}
    </Box>
  )
}

export default HabitList
