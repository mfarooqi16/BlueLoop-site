import DataChart from '../DataChart';

const sampleData = [
  { date: 'Jan', value: 18.2 },
  { date: 'Feb', value: 18.5 },
  { date: 'Mar', value: 19.1 },
  { date: 'Apr', value: 20.3 },
  { date: 'May', value: 21.8 },
  { date: 'Jun', value: 23.2 },
];

export default function DataChartExample() {
  return (
    <div className="p-8 max-w-2xl">
      <DataChart
        title="Sea Surface Temperature"
        data={sampleData}
        unit="°C"
        color="hsl(186 70% 45%)"
      />
    </div>
  );
}
