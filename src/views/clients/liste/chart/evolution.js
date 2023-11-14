import React from 'react';
import ApexCharts from 'react-apexcharts';

const EvolutionChart = ({ monthlyData }) => {
  return (
    <ApexCharts
      options={{
        // Options du graphique (consultez la documentation d'ApexCharts)
      }}
      series={[
        {
          name: 'Clients',
          data: monthlyData.map((item) => item.client_count),
        },
      ]}
      type="line"
      width="100%"
      height={200}
    />
  );
};

export default EvolutionChart;
