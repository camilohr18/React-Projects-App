// DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DoughnutChart = ({tasks}) => {

  let toComplete = 0;
  let completed= 0; 
  
  function getPorcentage () {
    tasks.map((task) => {
        if(tasks.length>0) {
            if(task.completed) {
                completed++;
            }else {
                toComplete++;
            }
        }
    })
  }
  getPorcentage();


  console.log(tasks)
  const data = {
    labels: ['Completed', 'Not Complete'],
    datasets: [
      {
        label: 'Progress',
        data: [completed, toComplete],
        backgroundColor: ['rgb(74 222 128)', '#FF6384'],
        hoverBackgroundColor: ['rgb(74 222 128)', '#FF6384'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      datalabels: {
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
        color: '#fff',
        font: {
          weight: 'bold',
          size: 16,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;