// Data for today's completion rate
export const completionRateData = {
  labels: ['Completed', 'Remaining'],
  datasets: [
    {
      data: [65, 35], // Example: 65% completed today
      backgroundColor: ['#60A5FA', '#f3f4f6'],
      borderWidth: 1,
    },
  ],
};

// Data for this week's completion rate
export const weeklyCompletionRateData = {
  labels: ['Completed', 'Missed'],
  datasets: [
    {
      data: [80, 20], // Example: 80% completed this week, 20% missed
      backgroundColor: ['#9F7AEA', '#f3f4f6'],
      borderWidth: 1,
    },
  ],
};

// Data for this month's completion rate
export const monthlyCompletionRateData = {
  labels: ['Completed', 'Missed'],
  datasets: [
    {
      data: [90, 10], // Example: 90% completed this month, 10% missed
      backgroundColor: ['#8B5CF6', '#f3f4f6'],
      borderWidth: 1,
    },
  ],
};
