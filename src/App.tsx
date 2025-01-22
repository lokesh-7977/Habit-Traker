import { useHabitStore } from './store/store';
import { Container, Box, Typography } from '@mui/material';
import HabitForm from './Components/HabitForm';
import HabitList from './Components/HabitList';
function App() {
const store = useHabitStore();
  console.log(store);
  return (
    <>
      <Container>
        <Box>
          <Typography variant="h2" component={"h1"} gutterBottom align="center">Habit Tracker</Typography>
        </Box>
        <HabitForm />
        <HabitList />
      </Container>
    </>
  )
}

export default App
