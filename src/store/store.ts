import { create } from 'zustand';

interface Habit {
  id: number;
  name: string;
  frequency: string;
}

interface HabitState {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
//   removeHabit: (habitId: number) => void;
}

export const useHabitStore = create<HabitState>((set) => {
    return {
        habits: [],
        addHabit: (habit: Habit) => {
            return set((state: HabitState) => ({ ...state, habits: [...state.habits, habit] }));
        }
    };
})

