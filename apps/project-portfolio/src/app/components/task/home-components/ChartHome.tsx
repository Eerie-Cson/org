import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartSectionProps {
  data: any;
}

const ChartSection: React.FC<ChartSectionProps> = ({ data }) => {
  return (
    <div className="relative h-80">
      <Bar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              grid: {
                display: false, // Hide y-axis grid lines
              },
              ticks: {
                callback: function (value) {
                  return value + '%'; // Format y-axis labels as percentages
                },
              },
            },
          },
          plugins: {
            legend: {
              display: true, // Show the legend
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Format tooltips to show percentage
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ChartSection;
