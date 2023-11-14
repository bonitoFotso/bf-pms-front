import React from 'react';
import ApexCharts from 'react-apexcharts';

const ContractChart = ({ contractedClients, nonContractedClients }) => {
  
  return (
    <div>
    <h2>Répartition des clients sous contrat et non sous contrat</h2>

    <ApexCharts
      
      series={[contractedClients, nonContractedClients]}
      type="pie"
      width="100%"
      
    />
    </div>
  );
};

export default ContractChart;
