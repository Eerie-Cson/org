// data/tasks.ts
import { Task, Progress, RepeatType } from '../types/tasks';
import { Chance } from 'chance';
const chance = new Chance();

// Sample task data

export const tasks: Task[] = [
  {
    name: 'Morning Yoga',
    description: 'Start the day with a refreshing yoga session.',
    progress: Progress.Incomplete,
    date: '2024-08-20T07:00:00Z',
    repeatType: 'daily',
    repeatDetails: { days: 1 }, // Repeats every day
  },
  {
    name: 'Weekly Team Meeting',
    description: 'Discuss progress and plans with the team.',
    progress: Progress.Incomplete,
    date: '2025-08-20T10:00:00Z',
    repeatType: 'weekly',
    repeatDetails: { days: ['Monday'] }, // Repeats every Monday
  },
  {
    name: 'Monthly Report',
    description: 'Prepare and submit the monthly performance report.',
    progress: Progress.Incomplete,
    date: '2024-08-20T15:00:00Z',
    repeatType: 'monthly',
    repeatDetails: { months: 1, day: 19 }, // Repeats every month on the 19th
  },
  {
    name: 'Yearly Health Checkup',
    description: 'Schedule an annual health checkup.',
    progress: Progress.Incomplete,
    date: '2024-08-21T09:00:00Z',
    repeatType: 'yearly',
    repeatDetails: { years: 1 }, // Repeats every year
  },
  {
    name: 'Bi-Weekly Newsletter',
    description: 'Write and send out the company newsletter.',
    progress: Progress.Incomplete,
    date: '2024-08-26T12:00:00Z',
    repeatType: 'weekly',
    repeatDetails: { days: ['Monday', 'Thursday'] }, // Repeats every Monday and Thursday
  },
  {
    name: 'Quarterly Budget Review',
    description: 'Review the budget and financials for the quarter.',
    progress: Progress.Incomplete,
    date: '2024-08-19T16:00:00Z',
    repeatType: 'monthly',
    repeatDetails: { months: 3, day: 19 }, // Repeats every 3 months on the 19th
  },
  ...Array.from({ length: 20 }, (_, i) => ({
    name: `Sample Task ${i + 1}`,
    progress: Progress.Incomplete,
    // isRecurring: false,

    description: `Details for sample task ${i + 1}`,
    date: new Date(
      new Date().setDate(new Date().getDate() + (i % 5))
    ).toISOString(), // Varying dates
    repeatType: chance.pickone([
      'daily',
      'weekly',
      'monthly',
      'yearly',
    ] as RepeatType[]),
    repeatDetails: {
      days: chance.pickone([1, 2, 3, 4, 5]),
    },
  })),
];
