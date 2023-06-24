import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [series] = useState([
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 74, 80, 95, 75, 99]
    },
    {
      name: 'Revenue', 
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 67, 78, 98, 92, 99]
    },
  ]);

  const [options] = useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12','13','14']
    },
    yaxis: {
      title: {
        text: '(Kilometres)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        }
      }
    },
    legend: {
        show: false
      }
  });

  return (
    <div id="chart" >
      <ReactApexChart options={options} series={series} type="bar" height={250} />
    </div>
  );
};

export default ApexChart;