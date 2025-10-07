import CarbonGauge from '../CarbonGauge';

export default function CarbonGaugeExample() {
  return (
    <div className="p-8 max-w-sm">
      <CarbonGauge score={24.5} region="Monterey Bay, CA" />
    </div>
  );
}
