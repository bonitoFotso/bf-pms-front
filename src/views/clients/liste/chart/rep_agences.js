import ApexCharts from 'react-apexcharts';

const RepAgences = ({client_agence}) => {
    // Préparez les données pour le pie chart
  const chartData = {
    labels: client_agence.map((item) => item.name),
    series: client_agence.map((item) => item.agence_count),
  };

  const options = {
    labels: chartData.labels,
  };
  return (
    <div>
      <h2>Répartition des agences par client</h2>
      <ApexCharts options={options} series={chartData.series} type="pie" width="100%" height={200} />
    </div>
  );
}

export default RepAgences;