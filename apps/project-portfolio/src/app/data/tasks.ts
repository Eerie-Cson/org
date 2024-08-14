import { Task, Progress } from '../types/tasks';

export const tasks: Task[] = [
  {
    name: 'Morning Yoga',
    progress: Progress.Done,
    isRecurring: true,
    details: 'Complete a 30-minute yoga session every morning.',
  },
  {
    name: 'Read 20 Pages',
    progress: Progress.NotStarted,
    isRecurring: true,
    details: '',
  },
  {
    name: 'Complete Work Assignment',
    progress: Progress.NotStarted,
    isRecurring: false,
    details: 'Finish the weekly work assignment by Friday.',
  },
  {
    name: 'Grocery Shopping',
    progress: Progress.NotStarted,
    isRecurring: true,
    details: 'Buy groceries every Sunday.',
  },
];
